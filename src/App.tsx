import { Fragment, useEffect, useRef, useState } from 'react';
import {
	FiArrowDown,
	FiArrowUpRight,
	FiCheck,
	FiCode,
	FiCopy,
	FiDatabase,
	FiDownload,
	FiExternalLink,
	FiGithub,
	FiLinkedin,
	FiMail,
	FiMapPin,
	FiMenu,
	FiMonitor,
	FiPlus,
	FiX,
	FiZap,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import {
	experiences,
	expertise,
	otherProjects,
	profile,
	selectedProjects,
} from './content';
import type { Project } from './content';
import { ScrollExperience } from './ScrollExperience';

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;
const cvUrl = asset('documents/CV_Michel_Princy.pdf');
const navigation = [
	{ href: '#expertise', label: 'Expertise' },
	{ href: '#projets', label: 'Projets' },
	{ href: '#parcours', label: 'Parcours' },
	{ href: '#contact', label: 'Contact' },
];
const icons = {
	code: FiCode,
	workflow: FiZap,
	support: FiMonitor,
	database: FiDatabase,
};

function ProjectVisual({ project }: { project: Project }) {
	if (project.image)
		return (
			<div className={`project-visual visual-${project.id}`}>
				<img
					src={asset(project.image)}
					alt={project.imageAlt}
					width={project.id === 'ludo' ? 596 : 1440}
					height={project.id === 'ludo' ? 1061 : 900}
					loading='lazy'
				/>
				<span className='visual-caption'>{project.imageCaption}</span>
			</div>
		);
	if (project.id === 'vina')
		return (
			<div className='project-visual visual-vina'>
				<div
					className='vina-preview'
					aria-hidden='true'
				>
					<div className='preview-top'>
						<span className='preview-logo'>v.</span>
						<span>
							VINA <small>Espace projet</small>
						</span>
						<span className='preview-avatar'>MP</span>
					</div>
					<div className='preview-content'>
						<p className='preview-eyebrow'>VUE D’ENSEMBLE</p>
						<strong>Chaque étape, au bon endroit.</strong>
						<div className='kanban'>
							{[
								['À faire', 'Cadrage', 'Objectifs'],
								['En cours', 'Développement', 'Intégration'],
								['Terminé', 'Analyse', 'Planification'],
							].map(([column, ...tasks]) => (
								<div key={column}>
									<span className='kanban-label'>{column}</span>
									{tasks.map((task) => (
										<div
											className='kanban-task'
											key={task}
										>
											<i />
											{task}
											<span />
										</div>
									))}
								</div>
							))}
						</div>
						<div className='preview-assistant'>
							<FiZap />
							<span>
								Une IA qui propose.
								<br />
								<b>Vous gardez la décision.</b>
							</span>
							<FiArrowUpRight />
						</div>
					</div>
				</div>
				<span className='visual-caption'>Illustration des fonctionnalités</span>
			</div>
		);
	return (
		<div className='project-visual visual-ifem'>
			<div
				className='document-stack'
				aria-hidden='true'
			>
				<div className='paper paper-back' />
				<div className='paper paper-front'>
					<span className='paper-institution'>
						IFEM <small>MADAGASCAR</small>
					</span>
					<span className='paper-label'>GESTION PÉDAGOGIQUE</span>
					<strong>Relevé de notes</strong>
					<div className='paper-lines'>
						{[1, 2, 3, 4].map((i) => (
							<span key={i}>
								<i />
								<i />
								<i />
							</span>
						))}
					</div>
					<div className='paper-bottom'>
						Documents générés automatiquement
						<FiCheck />
					</div>
				</div>
				<span className='pdf-badge'>
					<FiDownload />
					PDF
				</span>
			</div>
			<span className='visual-caption'>Illustration des documents générés</span>
		</div>
	);
}

function ProjectDialog({
	project,
	onClose,
}: {
	project: Project | null;
	onClose: () => void;
}) {
	const dialog = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		if (!project) return;
		dialog.current?.showModal();
		const previous = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = previous;
		};
	}, [project]);
	return (
		<dialog
			ref={dialog}
			className='project-dialog'
			aria-labelledby='project-dialog-title'
			onClose={onClose}
			onClick={(event) => {
				if (event.target !== event.currentTarget) return;
				const rect = event.currentTarget.getBoundingClientRect();
				if (
					event.clientX < rect.left ||
					event.clientX > rect.right ||
					event.clientY < rect.top ||
					event.clientY > rect.bottom
				)
					event.currentTarget.close();
			}}
		>
			{project && (
				<div className='dialog-content'>
					<button
						type='button'
						className='icon-button dialog-close'
						onClick={() => dialog.current?.close()}
						aria-label='Fermer le détail du projet'
						autoFocus
					>
						<FiX />
					</button>
					<p className='eyebrow'>
						{project.category} / {project.year}
					</p>
					<h2 id='project-dialog-title'>{project.title}</h2>
					<p className='dialog-intro'>{project.description}</p>
					<ProjectVisual project={project} />
					<h3>Le contexte</h3>
					<p>{project.context}</p>
					<h3>Mon rôle</h3>
					<p>{project.role}</p>
					<h3>Les fonctionnalités</h3>
					<ul className='feature-list'>
						{project.features.map((feature) => (
							<li key={feature}>
								<FiCheck aria-hidden='true' />
								{feature}
							</li>
						))}
					</ul>
					<div className='tags'>
						{project.technologies.map((tech) => (
							<span key={tech}>{tech}</span>
						))}
					</div>
					<a
						className='button button-primary'
						href={`mailto:${profile.email}?subject=${encodeURIComponent(`Échange à propos du projet ${project.title}`)}`}
					>
						Échanger sur ce projet <FiArrowUpRight />
					</a>
				</div>
			)}
		</dialog>
	);
}

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [activeProject, setActiveProject] = useState<Project | null>(null);
	const [copyStatus, setCopyStatus] = useState('');
	const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
		undefined,
	);
	useEffect(() => () => clearTimeout(copyTimer.current), []);
	useEffect(() => {
		if (!menuOpen) return;
		const close = (event: KeyboardEvent) => {
			if (event.key === 'Escape') setMenuOpen(false);
		};
		window.addEventListener('keydown', close);
		return () => window.removeEventListener('keydown', close);
	}, [menuOpen]);
	const copyEmail = async () => {
		clearTimeout(copyTimer.current);
		try {
			await navigator.clipboard.writeText(profile.email);
			setCopyStatus('Adresse e-mail copiée.');
		} catch {
			setCopyStatus(
				'Vous pouvez sélectionner et copier l’adresse affichée ci-dessus.',
			);
		}
		copyTimer.current = setTimeout(() => setCopyStatus(''), 5000);
	};
	return (
		<ScrollExperience>
			<a
				className='skip-link'
				href='#contenu'
			>
				Aller au contenu
			</a>
			<header className='site-header'>
				<div className='container header-inner'>
					<a
						className='brand'
						href='#accueil'
						aria-label='Michel Princy, retour à l’accueil'
					>
						<span className='brand-mark'>
							mp<span>.</span>
						</span>
						<span>
							Michel Princy<small>Développement & solutions IT</small>
						</span>
					</a>
					<button
						type='button'
						className='icon-button menu-toggle'
						aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
						aria-expanded={menuOpen}
						aria-controls='navigation'
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{menuOpen ? <FiX /> : <FiMenu />}
					</button>
					<nav
						id='navigation'
						aria-label='Navigation principale'
						className={menuOpen ? 'navigation is-open' : 'navigation'}
					>
						{navigation.map((link) => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setMenuOpen(false)}
							>
								{link.label}
							</a>
						))}
						<a
							className='nav-cv'
							href={cvUrl}
							download
							onClick={() => setMenuOpen(false)}
						>
							Mon CV <FiDownload />
						</a>
					</nav>
				</div>
			</header>
			<main id='contenu'>
				<section
					id='accueil'
					className='hero container'
					aria-labelledby='hero-title'
				>
					<div className='hero-copy'>
						<p className='eyebrow'>
							<span className='status-dot' />
							Ouvert aux opportunités professionnelles
						</p>
						<p className='hero-name'>Bonjour, je suis Michel Princy.</p>
						<h1 id='hero-title'>
							Développement
							<br />
							logiciel, <span>automatisation</span>
							<br />& support IT.
						</h1>
						<p className='hero-description'>
							Je conçois des applications web, desktop et mobiles, automatise
							les processus et accompagne les utilisateurs. Une approche
							technique ancrée dans les besoins du terrain.
						</p>
						<div className='hero-actions'>
							<a
								href='#projets'
								className='button button-primary'
							>
								Découvrir mes projets <FiArrowDown />
							</a>
							<a
								href={cvUrl}
								download
								className='text-link'
							>
								Télécharger mon CV <FiDownload />
							</a>
						</div>
						<div className='hero-links'>
							<span>
								<FiMapPin />
								Antananarivo, Madagascar
							</span>
							<a
								href={profile.github}
								target='_blank'
								rel='noopener noreferrer'
							>
								GitHub <FiArrowUpRight />
							</a>
							<a
								href={profile.linkedin}
								target='_blank'
								rel='noopener noreferrer'
							>
								LinkedIn <FiArrowUpRight />
							</a>
						</div>
					</div>
					<div className='hero-portrait'>
						<div className='portrait-frame'>
							<span className='portrait-label'>MICHEL PRINCY / PORTFOLIO</span>
							<div className='portrait-circle' />
							<img
								src={asset('images/michel-princy.jpg')}
								alt='Portrait de Michel Princy'
								width='426'
								height='389'
								fetchPriority='high'
							/>
							<span
								className='portrait-monogram'
								aria-hidden='true'
							>
								MP
							</span>
						</div>
						<div className='degree-note'>
							<span className='degree-icon'>
								<FiCheck />
							</span>
							<span>
								<strong>Master professionnel en Informatique</strong>
								<small>ENI Fianarantsoa · Obtenu le 11 novembre 2026</small>
							</span>
						</div>
					</div>
				</section>
				<div className='current-role container'>
					<span className='eyebrow'>AUJOURD’HUI</span>
					<p>
						Responsable du Service Informatique{' '}
						<strong>à l’IFEM Madagascar</strong>
					</p>
					<a
						href='#parcours'
						aria-label='Découvrir mon parcours professionnel'
					>
						<FiArrowDown />
					</a>
				</div>
				<section
					id='expertise'
					className='section container'
					aria-labelledby='expertise-title'
				>
					<div className='section-heading'>
						<p className='section-index'>01 / EXPERTISE</p>
						<div>
							<h2 id='expertise-title'>Du logiciel à l’utilisateur.</h2>
							<p>
								Concevoir les outils, simplifier le travail et assurer leur bon
								fonctionnement.
							</p>
						</div>
					</div>
					<div className='expertise-grid'>
						{expertise.map((item, index) => {
							const Icon = icons[item.icon as keyof typeof icons];
							return (
								<article
									className='expertise-item'
									key={item.title}
								>
									<div className='expertise-item-top'>
										<Icon aria-hidden='true' />
										<span>0{index + 1}</span>
									</div>
									<h3>{item.title}</h3>
									<p>{item.description}</p>
									<div className='tags'>
										{item.technologies.map((tech) => (
											<span key={tech}>{tech}</span>
										))}
									</div>
								</article>
							);
						})}
					</div>
					<p className='stack-note'>
						<span>Aussi dans ma boîte à outils</span>JavaScript · TypeScript ·
						PHP · Java / J2EE · C# · Symfony · SQLite · Postman · Agile / Scrum
					</p>
				</section>
				<section
					id='projets'
					className='section projects-section'
					aria-labelledby='projects-title'
				>
					<div className='container'>
						<div className='section-heading'>
							<p className='section-index'>02 / RÉALISATIONS</p>
							<div>
								<h2 id='projects-title'>
									Des besoins concrets.
									<br />
									Des outils qui y répondent.
								</h2>
								<p>
									Une sélection de projets métier et personnels, du web au
									mobile.
								</p>
							</div>
							<span className='section-count'>2023 — 2026</span>
						</div>
						<nav
							className='project-sequence'
							aria-label='Les projets sélectionnés'
						>
							{selectedProjects.map((project, index) => (
								<a
									href={`#projet-${project.id}`}
									key={project.id}
								>
									<span>0{index + 1}</span>
									<span>{project.title}</span>
								</a>
							))}
						</nav>
						<div className='project-grid'>
							{selectedProjects.map((project, index) => (
								<Fragment key={project.id}>
									<span
										className='project-anchor'
										id={`projet-${project.id}`}
										aria-hidden='true'
									/>
									<div className='project-scene'>
										<article className='project-card'>
											<ProjectVisual project={project} />
											<div className='project-card-copy'>
												<div className='project-kicker'>
													<span>{project.category}</span>
													<span>{project.year}</span>
												</div>
												<h3>{project.title}</h3>
												<p>{project.description}</p>
												<div className='project-card-bottom'>
													<div className='project-tech'>
														{project.technologies.slice(0, 3).join(' / ')}
													</div>
													<button
														type='button'
														className='project-open'
														onClick={() => setActiveProject(project)}
														aria-label={`Découvrir le projet ${project.title}`}
													>
														<FiArrowUpRight />
													</button>
												</div>
											</div>
										</article>
										<span
											className='project-scene-counter'
											aria-hidden='true'
										>
											0{index + 1} / 04
										</span>
									</div>
								</Fragment>
							))}
						</div>
						<div className='more-projects'>
							<div>
								<p className='eyebrow'>LE RESTE DU PARCOURS</p>
								<h3>D’autres problèmes résolus.</h3>
								<p>
									Des réalisations professionnelles et académiques qui
									complètent mon expérience.
								</p>
							</div>
							<div className='project-disclosures'>
								{otherProjects.map((project) => (
									<details key={project.title}>
										<summary>
											<span>
												{project.title}
												<small>{project.date}</small>
											</span>
											<FiPlus aria-hidden='true' />
										</summary>
										<div className='disclosure-content'>
											<p className='disclosure-context'>{project.context}</p>
											<p>{project.description}</p>
											<p className='disclosure-tech'>{project.technologies}</p>
										</div>
									</details>
								))}
							</div>
						</div>
					</div>
				</section>
				<section
					id='parcours'
					className='section container'
					aria-labelledby='experience-title'
				>
					<div className='section-heading'>
						<p className='section-index'>03 / PARCOURS</p>
						<div>
							<h2 id='experience-title'>
								Une expérience du terrain,
								<br />
								une formation en génie logiciel.
							</h2>
							<p>
								Du support technique à la conception de solutions pour les
								organisations.
							</p>
						</div>
					</div>
					<div className='career-layout'>
						<div>
							<h3 className='column-label'>Expériences professionnelles</h3>
							<ol className='experience-list'>
								{experiences.map((experience) => (
									<li key={experience.company}>
										<p className='experience-date'>{experience.date}</p>
										<div>
											<h4>{experience.title}</h4>
											<p className='experience-company'>
												{experience.company}{' '}
												<span>· {experience.location}</span>
											</p>
											<p>{experience.description}</p>
										</div>
									</li>
								))}
							</ol>
						</div>
						<aside className='education'>
							<h3 className='column-label'>Formation & repères</h3>
							<article className='education-item'>
								<span className='education-date'>11 NOVEMBRE 2026</span>
								<h4>
									Master professionnel
									<br />
									en Informatique
								</h4>
								<p>
									École Nationale d’Informatique
									<br />
									ENI Fianarantsoa
								</p>
								<span className='education-detail'>
									Génie Logiciel et Base de données
								</span>
								<span className='diploma-status'>
									<FiCheck />
									Diplôme obtenu
								</span>
							</article>
							<article className='education-item'>
								<span className='education-date'>JANVIER 2025</span>
								<h4>
									Licence professionnelle
									<br />
									en Informatique
								</h4>
								<p>ENI Fianarantsoa</p>
								<span className='education-detail'>
									Génie Logiciel et Base de données
									<br />
									Mention Bien
								</span>
							</article>
							<div className='languages'>
								<h4>Langues</h4>
								<p>
									<span>Malagasy</span>Langue maternelle
								</p>
								<p>
									<span>Français</span>Avancé
								</p>
								<p>
									<span>Anglais</span>Intermédiaire
								</p>
							</div>
							<a
								className='text-link'
								href={cvUrl}
								download
							>
								Le parcours complet dans mon CV <FiDownload />
							</a>
						</aside>
					</div>
				</section>
				<section
					id='contact'
					className='contact-section'
					aria-labelledby='contact-title'
				>
					<div className='container contact-inner'>
						<div>
							<p className='section-index'>04 / PRENONS CONTACT</p>
							<h2 id='contact-title'>
								Un besoin informatique ?<br />
								<span>Parlons-en.</span>
							</h2>
							<p>
								Un poste, une mission ou une collaboration : je serai heureux
								d’échanger sur vos besoins et la façon dont je peux y
								contribuer.
							</p>
							<a
								className='button button-light'
								href={`mailto:${profile.email}`}
							>
								<FiMail />
								M’écrire un e-mail <FiArrowUpRight />
							</a>
						</div>
						<div className='contact-details'>
							<span className='contact-label'>E-MAIL</span>
							<div className='email-row'>
								<a href={`mailto:${profile.email}`}>{profile.email}</a>
								<button
									type='button'
									className='icon-button copy-email'
									onClick={copyEmail}
									aria-label='Copier l’adresse e-mail'
								>
									{copyStatus.startsWith('Adresse') ? <FiCheck /> : <FiCopy />}
								</button>
							</div>
							<p
								role='status'
								className='copy-status'
							>
								{copyStatus}
							</p>
							<span className='contact-label'>ÉCHANGE DIRECT</span>
							<a
								className='whatsapp-link'
								href={profile.whatsapp}
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaWhatsapp />
								{profile.phone}
								<FiArrowUpRight />
							</a>
							<span className='contact-label'>RETROUVEZ-MOI AUSSI</span>
							<div className='contact-socials'>
								<a
									href={profile.github}
									target='_blank'
									rel='noopener noreferrer'
								>
									<FiGithub />
									GitHub <FiExternalLink />
								</a>
								<a
									href={profile.linkedin}
									target='_blank'
									rel='noopener noreferrer'
								>
									<FiLinkedin />
									LinkedIn <FiExternalLink />
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className='container site-footer'>
				<a
					className='footer-brand'
					href='#accueil'
				>
					Michel Princy<span>.</span>
				</a>
				<p>© 2026 · {profile.fullName}</p>
				<a href='#accueil'>
					Retour en haut <FiArrowUpRight />
				</a>
			</footer>
			<ProjectDialog
				project={activeProject}
				onClose={() => setActiveProject(null)}
			/>
		</ScrollExperience>
	);
}
export default App;
