import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Expériences & Projets',
		items: [
			{
				title: 'Développeur Full-stack (Freelance)',
				place: 'Cyber Net Rapide, Fianarantsoa',
				timePeriod: 'Juillet 2025',
				description: (
					<ul>
						<li>
							Conception d’une plateforme de gestion de cybercafé avec contrôle
							direct du routeur.
						</li>
						<li>
							Développement d’une application de gestion du temps de connexion
							des utilisateurs.
						</li>
						<li>
							<em>Node JS, Vue JS, PostgreSQL.</em>
						</li>
					</ul>
				),
			},
			{
				title: 'Projet d’Étude : Plateforme WebMailing',
				place: 'ENI',
				timePeriod: 'Mai 2025',
				description: (
					<ul>
						<li>
							Développement d’une plateforme interne d’envoi/réception de mails.
						</li>
						<li>Gestion complète des utilisateurs (CRUD).</li>
						<li>
							<em>Node JS, Vite Js, PostgreSQL.</em>
						</li>
					</ul>
				),
			},
			{
				title: 'Stagiaire Développeur',
				place: 'MDAT, Antananarivo',
				timePeriod: 'Septembre 2024',
				description: (
					<ul>
						<li>
							Plateforme de suivi des opérations domaniales et du cadastre
							(DDPF).
						</li>
						<li>
							Système de communication sécurisé et gestion/correction Excel
							intégrée.
						</li>
						<li>
							<em>ReactJS, NodeJS, Python, PostgreSQL.</em>
						</li>
					</ul>
				),
			},
			{
				title: 'Développeur Web (Freelance)',
				place: 'Startup Ashna Dagotour',
				timePeriod: 'Septembre 2023',
				description: (
					<ul>
						<li>
							Site vitrine touristique avec interface d'administration pour la
							galerie photo.
						</li>
						<li>
							<em>PHP, HTML/CSS, Supabase (PostgreSQL).</em>
						</li>
					</ul>
				),
			},
			{
				title: 'Projet d’Étude : Gestion des Dépenses',
				place: 'ENI',
				timePeriod: 'Avril 2023',
				description: (
					<ul>
						<li>
							Suivi des dépenses communales et génération de rapports
							financiers.
						</li>
						<li>
							<em>J2EE, PostgreSQL.</em>
						</li>
					</ul>
				),
			},
			{
				title: 'Projet d’Étude : Course de Saisie (Desktop)',
				place: 'ENI',
				timePeriod: 'Février 2023',
				description: (
					<ul>
						<li>
							Application desktop avec programmation réseau pour interconnecter
							les participants.
						</li>
						<li>Calcul de vitesse et détection de fautes en temps réel.</li>
						<li>
							<em>Java (Réseau).</em>
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Formation',
		items: [
			{
				title: 'Master Professionnel en Génie Logiciel (M2)',
				place: 'École Nationale d’Informatique (ENI)',
				timePeriod: '2024 - Présent',
				description: (
					<p style={{ color: '#ffcc00', fontWeight: 'bold' }}>
						⚠️ Diplôme en cours de préparation (Actuellement en 2ème année).
					</p>
				),
			},
			{
				title: 'Licence Professionnelle en Informatique',
				place: 'École Nationale d’Informatique (ENI)',
				timePeriod: 'Obtenue en Janvier 2025',
				description:
					'Parcours : Génie Logiciel et Base de données. Mention Bien.',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='À Propos'
					subTitle='DE MOI'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Bonjour, je suis{' '}
						<strong>Fandeferana Michel Princy RAKOTOZAFIMALALA</strong>.
					</p>
					<p>
						Actuellement en <strong>Master 2</strong> à l'ENI, je suis un expert
						en développement
						<strong> Full-stack</strong> passionné par la transformation de
						besoins complexes en solutions innovantes.
					</p>
					<p>
						Ma polyvalence couvre des technologies allant de{' '}
						<strong>NodeJS et React</strong> à <strong>Java et Python</strong>,
						avec une solide expertise en bases de données SQL.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
