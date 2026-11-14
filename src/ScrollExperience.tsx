import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { FiPause, FiPlay } from 'react-icons/fi';

import './immersion.css';

const chapters = [
	{ id: 'accueil', label: 'Accueil' },
	{ id: 'expertise', label: 'Expertise' },
	{ id: 'projets', label: 'Projets' },
	{ id: 'parcours', label: 'Parcours' },
	{ id: 'contact', label: 'Contact' },
];
const clamp = (value: number) => Math.min(1, Math.max(0, value));
const preferenceKey = 'portfolio-reduced-motion';

export function ScrollExperience({ children }: { children: ReactNode }) {
	const root = useRef<HTMLDivElement>(null);
	const [activeChapter, setActiveChapter] = useState('accueil');
	const [systemReduced, setSystemReduced] = useState(
		() => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
	);
	const [userReduced, setUserReduced] = useState(() => {
		try {
			return localStorage.getItem(preferenceKey) === 'true';
		} catch {
			return false;
		}
	});
	const reduced = systemReduced || userReduced;

	useEffect(() => {
		const media = window.matchMedia('(prefers-reduced-motion: reduce)');
		const change = () => setSystemReduced(media.matches);
		media.addEventListener('change', change);
		return () => media.removeEventListener('change', change);
	}, []);

	useEffect(() => {
		const element = root.current;
		if (!element) return;
		const sections = chapters.map((chapter) =>
			document.getElementById(chapter.id),
		);
		const scenes = [...element.querySelectorAll<HTMLElement>('.project-scene')];
		const sequenceLinks = [
			...element.querySelectorAll<HTMLAnchorElement>('.project-sequence a'),
		];
		const targets = [
			...element.querySelectorAll<HTMLElement>(
				'.section-heading, .expertise-item, .project-card-copy, .more-projects > div, .experience-list > li, .education-item, .contact-inner > div',
			),
		];
		targets.forEach((target, index) => {
			target.classList.add('reveal-target');
			target.style.setProperty('--reveal-delay', `${(index % 4) * 55}ms`);
		});
		const observer =
			!reduced && 'IntersectionObserver' in window
				? new IntersectionObserver(
						(entries) => {
							entries.forEach((entry) => {
								if (!entry.isIntersecting) return;
								entry.target.classList.add('is-revealed');
								observer?.unobserve(entry.target);
							});
						},
						{ threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
					)
				: null;
		if (observer) targets.forEach((target) => observer.observe(target));
		else targets.forEach((target) => target.classList.add('is-revealed'));

		let frame = 0;
		let lastChapter = '';
		let lastProject = -1;
		const update = () => {
			frame = 0;
			if (document.hidden) return;
			const height = window.innerHeight;
			const scrollRange = document.documentElement.scrollHeight - height;
			const sectionRects = sections.map((section) =>
				section?.getBoundingClientRect(),
			);
			const sceneRects = scenes.map((scene) => scene.getBoundingClientRect());
			element.style.setProperty(
				'--reading-progress',
				String(clamp(window.scrollY / Math.max(1, scrollRange))),
			);
			element.style.setProperty(
				'--hero-progress',
				reduced
					? '0'
					: String(
							clamp(
								window.scrollY / Math.max(1, sectionRects[0]?.height ?? height),
							),
						),
			);
			let chapter = 'accueil';
			sectionRects.forEach((rect, index) => {
				if (rect && rect.top <= height * 0.4) chapter = chapters[index].id;
			});
			if (window.scrollY + height >= document.documentElement.scrollHeight - 4)
				chapter = 'contact';
			if (chapter !== lastChapter) {
				lastChapter = chapter;
				setActiveChapter(chapter);
			}
			let currentProject = 0;
			sceneRects.forEach((rect, index) => {
				if (rect.top <= height * 0.6) currentProject = index;
			});
			scenes.forEach((scene, index) => {
				const next = sceneRects[index + 1];
				const depth =
					reduced || !next
						? 0
						: clamp((height * 0.68 - next.top) / Math.max(1, height * 0.48));
				scene.style.setProperty('--stack-depth', String(depth));
			});
			if (currentProject !== lastProject) {
				lastProject = currentProject;
				sequenceLinks.forEach((link, index) => {
					if (index === currentProject)
						link.setAttribute('aria-current', 'step');
					else link.removeAttribute('aria-current');
				});
			}
		};
		const schedule = () => {
			if (!frame) frame = requestAnimationFrame(update);
		};
		window.addEventListener('scroll', schedule, { passive: true });
		window.addEventListener('resize', schedule);
		document.addEventListener('visibilitychange', schedule);
		const resizeObserver = new ResizeObserver(schedule);
		resizeObserver.observe(element);
		schedule();
		return () => {
			cancelAnimationFrame(frame);
			observer?.disconnect();
			resizeObserver.disconnect();
			window.removeEventListener('scroll', schedule);
			window.removeEventListener('resize', schedule);
			document.removeEventListener('visibilitychange', schedule);
		};
	}, [reduced]);

	const toggleMotion = () => {
		const next = !userReduced;
		setUserReduced(next);
		try {
			localStorage.setItem(preferenceKey, String(next));
		} catch {
			/* The preference still works for this visit. */
		}
	};

	return (
		<div
			ref={root}
			className={`immersive-root ${reduced ? 'motion-reduced' : 'has-motion'}`}
		>
			<div
				className='reading-progress'
				aria-hidden='true'
			/>
			<nav
				className='chapter-nav'
				aria-label='Repères de lecture'
			>
				{chapters.map((chapter, index) => (
					<a
						key={chapter.id}
						href={`#${chapter.id}`}
						aria-label={`Aller à la section ${chapter.label}`}
						aria-current={activeChapter === chapter.id ? 'location' : undefined}
					>
						<span className='chapter-name'>{chapter.label}</span>
						<span className='chapter-number'>0{index + 1}</span>
						<i />
					</a>
				))}
			</nav>
			{children}
			<button
				type='button'
				className='motion-toggle'
				onClick={toggleMotion}
				disabled={systemReduced}
				aria-pressed={reduced}
				aria-label={
					systemReduced
						? 'Animations réduites selon votre préférence système'
						: reduced
							? 'Activer les animations'
							: 'Réduire les animations'
				}
			>
				{reduced ? <FiPlay /> : <FiPause />}
				<span>{reduced ? 'Animations réduites' : 'Réduire les effets'}</span>
			</button>
		</div>
	);
}
