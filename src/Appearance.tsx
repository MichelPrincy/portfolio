import { useEffect, useRef, useState } from 'react';
import {
	FiBriefcase,
	FiClock,
	FiCode,
	FiFileText,
	FiMonitor,
	FiMoon,
	FiStar,
	FiSun,
} from 'react-icons/fi';

const ornaments = [
	FiMonitor,
	FiStar,
	FiFileText,
	FiClock,
	FiBriefcase,
	FiCode,
	FiStar,
	FiMonitor,
	FiClock,
	FiStar,
	FiBriefcase,
	FiFileText,
];

export function ThemeToggle() {
	const [theme, setTheme] = useState(() =>
		document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
	);
	useEffect(() => {
		const media = window.matchMedia('(prefers-color-scheme: dark)');
		const change = () => {
			try {
				if (localStorage.getItem('portfolio-theme')) return;
			} catch {
				/* Use system preference when storage is unavailable. */
			}
			const next = media.matches ? 'dark' : 'light';
			document.documentElement.dataset.theme = next;
			setTheme(next);
		};
		media.addEventListener('change', change);
		return () => media.removeEventListener('change', change);
	}, []);
	const toggle = () => {
		const next = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = next;
		setTheme(next);
		try {
			localStorage.setItem('portfolio-theme', next);
		} catch {
			/* Keep the choice for this visit. */
		}
	};
	return (
		<button
			type='button'
			className='theme-toggle'
			aria-label={
				theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'
			}
			aria-pressed={theme === 'dark'}
			onClick={toggle}
		>
			{theme === 'dark' ? (
				<FiSun aria-hidden='true' />
			) : (
				<FiMoon aria-hidden='true' />
			)}
			<span>{theme === 'dark' ? 'Mode clair' : 'Mode sombre'}</span>
		</button>
	);
}

export function PointerOrnaments({ reduced }: { reduced: boolean }) {
	const field = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const element = field.current;
		const root = element?.parentElement;
		if (!element || !root || reduced) return;
		const media = window.matchMedia('(hover: hover) and (pointer: fine)');
		const sparks = [...element.querySelectorAll<HTMLElement>('.pointer-spark')];
		let frame = 0;
		let x = 0,
			y = 0,
			lastX = -1000,
			lastY = -1000,
			lastTime = 0,
			slot = 0;
		let hover: HTMLElement | null = null;
		let candidate: HTMLElement | null = null;
		const animations = new Set<Animation>();
		const clearHover = () => {
			hover?.style.removeProperty('--hover-x');
			hover?.style.removeProperty('--hover-y');
			hover = null;
		};
		const reset = () => {
			cancelAnimationFrame(frame);
			frame = 0;
			element.classList.remove('pointer-active');
			root.style.setProperty('--pointer-shift-x', '0px');
			root.style.setProperty('--pointer-shift-y', '0px');
			clearHover();
			animations.forEach((animation) => animation.cancel());
			animations.clear();
			lastX = -1000;
		};
		const update = () => {
			frame = 0;
			if (!media.matches || document.hidden) return;
			element.classList.add('pointer-active');
			root.style.setProperty(
				'--pointer-shift-x',
				`${(x / innerWidth - 0.5) * 16}px`,
			);
			root.style.setProperty(
				'--pointer-shift-y',
				`${(y / innerHeight - 0.5) * 16}px`,
			);
			element.style.setProperty('--pointer-x', `${x}px`);
			element.style.setProperty('--pointer-y', `${y}px`);
			if (hover !== candidate) {
				clearHover();
				hover = candidate;
			}
			if (hover) {
				const rect = hover.getBoundingClientRect();
				hover.style.setProperty(
					'--hover-x',
					String(
						Math.max(-1, Math.min(1, ((x - rect.left) / rect.width) * 2 - 1)),
					),
				);
				hover.style.setProperty(
					'--hover-y',
					String(
						Math.max(-1, Math.min(1, ((y - rect.top) / rect.height) * 2 - 1)),
					),
				);
			}
			const now = performance.now();
			if (now - lastTime < 140 || Math.hypot(x - lastX, y - lastY) < 55) return;
			lastX = x;
			lastY = y;
			lastTime = now;
			const spark = sparks[slot++ % sparks.length];
			spark.getAnimations().forEach((animation) => animation.cancel());
			spark.style.left = `${x}px`;
			spark.style.top = `${y}px`;
			const direction = slot % 2 ? 1 : -1;
			const animation = spark.animate(
				[
					{
						opacity: 0,
						transform: 'translate(-50%, -50%) scale(.6) rotate(0deg)',
					},
					{ opacity: 0.48, offset: 0.18 },
					{
						opacity: 0,
						transform: `translate(calc(-50% + ${direction * 22}px), -42px) scale(1) rotate(${direction * 18}deg)`,
					},
				],
				{ duration: 850, easing: 'ease-out' },
			);
			animations.add(animation);
			const release = () => animations.delete(animation);
			animation.onfinish = release;
			animation.oncancel = release;
		};
		const move = (event: PointerEvent) => {
			if (!media.matches || event.pointerType !== 'mouse') return;
			x = event.clientX;
			y = event.clientY;
			candidate = (
				event.target instanceof Element
					? event.target.closest(
							'.project-visual, .portrait-frame, .expertise-item',
						)
					: null
			) as HTMLElement | null;
			if (!frame) frame = requestAnimationFrame(update);
		};
		const visibility = () => {
			element.dataset.paused = String(document.hidden);
			if (document.hidden) reset();
		};
		root.addEventListener('pointermove', move, { passive: true });
		root.addEventListener('pointerleave', reset);
		window.addEventListener('blur', reset);
		window.addEventListener('scroll', clearHover, { passive: true });
		media.addEventListener('change', reset);
		document.addEventListener('visibilitychange', visibility);
		return () => {
			reset();
			root.removeEventListener('pointermove', move);
			root.removeEventListener('pointerleave', reset);
			window.removeEventListener('blur', reset);
			window.removeEventListener('scroll', clearHover);
			media.removeEventListener('change', reset);
			document.removeEventListener('visibilitychange', visibility);
		};
	}, [reduced]);
	return (
		<div
			ref={field}
			className='ambient-field'
			aria-hidden='true'
		>
			<div className='ambient-icons'>
				{ornaments.map((Icon, index) => (
					<span
						className={`ambient-icon ornament-${index}`}
						key={index}
					>
						<Icon />
					</span>
				))}
			</div>
			<div className='pointer-halo' />
			{ornaments.slice(0, 8).map((Icon, index) => (
				<span
					className='pointer-spark'
					key={index}
				>
					<Icon />
				</span>
			))}
		</div>
	);
}
