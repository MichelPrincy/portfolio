export type Project = {
	id: string;
	title: string;
	category: string;
	year: string;
	description: string;
	context: string;
	role: string;
	features: string[];
	technologies: string[];
	image?: string;
	imageAlt?: string;
	imageCaption?: string;
};
export const profile = {
	name: 'Michel Princy',
	fullName: 'RAKOTOZAFIMALALA Fandeferana Michel Princy',
	email: 'micheleprincy2709@gmail.com',
	phone: '+261 38 29 946 93',
	github: 'https://github.com/MichelPrincy',
	facebook: 'https://www.facebook.com/profile.php?id=61596370403565',
	linkedin: 'https://www.linkedin.com/in/princy-rakotozafimalala-ba1022327/',
	whatsapp: 'https://wa.me/261382994693',
};
export const expertise = [
	{
		title: 'Développement logiciel',
		description:
			'Des applications web, desktop et mobiles adaptées aux usages : interfaces, API, authentification et bases de données.',
		technologies: [
			'React',
			'Vue.js',
			'Node.js',
			'FastAPI',
			'Electron',
			'Flutter',
		],
		icon: 'code',
	},
	{
		title: 'Automatisation & IA',
		description:
			'Des processus plus simples grâce aux scripts, à la génération de documents et aux assistants IA avec validation humaine.',
		technologies: ['Python', 'Prompt engineering', 'API IA', 'Génération PDF'],
		icon: 'workflow',
	},
	{
		title: 'Support & infrastructure IT',
		description:
			'Diagnostic, résolution d’incidents et maintenance. Un accompagnement des utilisateurs, du poste de travail au réseau.',
		technologies: [
			'Support N1 à N3',
			'Windows Server',
			'MikroTik',
			'LAN / WAN',
		],
		icon: 'support',
	},
	{
		title: 'Données & déploiement',
		description:
			'Des données organisées et des environnements maîtrisés pour développer, intégrer et maintenir les applications.',
		technologies: [
			'PostgreSQL',
			'MySQL',
			'Supabase',
			'Git',
			'Docker',
			'Jenkins',
		],
		icon: 'database',
	},
];
export const selectedProjects: Project[] = [
	{
		id: 'vina',
		title: 'VINA',
		category: 'Application web · Intelligence artificielle',
		year: '2026',
		description:
			'Centraliser la gestion de projets et accompagner les équipes avec un assistant IA.',
		context:
			'Plateforme de gestion, de suivi et d’évaluation de projets pour ALTIORA / E PREST.',
		role: 'Développement full-stack et intégration IA',
		features: [
			'Portefeuille de projets, planification, tâches et indicateurs de suivi.',
			'Assistant conversationnel avec réponses structurées et propositions d’actions.',
			'Aperçu des modifications et validation humaine avant application.',
			'Droits d’accès par projet, traçabilité et exports Word / PDF.',
		],
		technologies: [
			'React',
			'TypeScript',
			'Python',
			'FastAPI',
			'PostgreSQL',
			'SQLAlchemy',
			'API IA',
		],
	},
	{
		id: 'ifem',
		title: 'IFEM Hub',
		category: 'Application métier · Éducation',
		year: '2026',
		description:
			'Simplifier la gestion pédagogique et automatiser les documents de l’institut.',
		context:
			'Plateforme de gestion pédagogique développée dans le cadre de mes fonctions à l’IFEM Madagascar.',
		role: 'Responsable informatique et développeur',
		features: [
			'Authentification et gestion des relevés de notes.',
			'Génération automatisée des bulletins et résultats théoriques.',
			'Documents PDF conformes aux modèles et à l’identité visuelle de l’institut.',
		],
		technologies: ['React', 'TypeScript', 'jsPDF'],
	},
	{
		id: 'rakoto',
		title: 'RAKOTO Player',
		category: 'Logiciel desktop · Multimédia',
		year: '2026',
		description:
			'Un lecteur audio et vidéo Windows, avec bibliothèque musicale et moteur natif.',
		context:
			'Application de lecture de médias locaux pour Windows, avec une interface Vue.js / Electron et un moteur mpv.',
		role: 'Développement logiciel desktop',
		features: [
			'Bibliothèque musicale, playlists et favoris.',
			'Égaliseur, pistes audio et gestion des sous-titres.',
			'Mini-lecteur flottant et mode plein écran.',
			'Création des installateurs Windows.',
		],
		technologies: ['Vue.js', 'Electron', 'JavaScript', 'Node.js', 'mpv'],
		image: 'images/rakoto-player.webp',
		imageAlt:
			'RAKOTO Player sous Windows, avec sa bibliothèque musicale et ses commandes de lecture.',
		imageCaption: 'Capture de l’application · données de démonstration',
	},
	{
		id: 'ludo',
		title: 'LUDO Mazika',
		category: 'Projet personnel · Jeu Android',
		year: '2026 · Bêta',
		description:
			'Un jeu de Ludo mobile avec animations 3D et parties sur réseau local.',
		context:
			'Projet personnel de jeu Android en version bêta, associant un univers illustré à des pions et un dé animés en 3D.',
		role: 'Développement de jeu mobile',
		features: [
			'Commandes tactiles et entraînement contre trois robots.',
			'Sauvegarde et reprise des parties locales.',
			'Mode à quatre joueurs sur le même Wi-Fi via un serveur Node.js.',
			'Génération d’un APK de test ; validation sur téléphone physique à poursuivre.',
		],
		technologies: ['Godot', 'GDScript', 'Node.js', 'Android'],
		image: 'images/ludo-mazika.webp',
		imageAlt:
			'Plateau de LUDO Mazika avec ses pions 3D dans un décor inspiré de Madagascar.',
		imageCaption: 'Capture de la version bêta',
	},
];
export const otherProjects: Project[] = [
	{
		id: 'cybercafe',
		title: 'Gestion de cybercafé',
		category: 'Application web · Gestion',
		year: 'Juillet 2025',
		context: 'Cyber Net Rapide · Freelance',
		role: 'Développeur full-stack',
		description:
			'Suivi des temps de connexion en temps réel et gestion directe du routeur.',
		features: [
			'Plateforme web de gestion du cybercafé.',
			'Suivi des temps de connexion en temps réel.',
			'Gestion directe du routeur depuis la plateforme.',
		],
		technologies: ['Node.js', 'Vue.js', 'PostgreSQL'],
	},
	{
		id: 'docker',
		title: 'Serveur offline & CI/CD',
		category: 'Infrastructure · Déploiement',
		year: 'Avril 2026',
		context: 'ENI · Projet d’étude',
		role: 'Administrateur systèmes',
		description:
			'Configuration de Docker sous Windows Server, intégration Spring Boot / Flask et pipeline Jenkins.',
		features: [
			'Configuration d’un serveur offline avec Docker Desktop sur Windows Server.',
			'Intégration d’applications Spring Boot et Flask.',
			'Mise en place d’un pipeline CI/CD avec Jenkins.',
		],
		technologies: [
			'Docker',
			'Windows Server',
			'Spring Boot',
			'Flask',
			'Jenkins',
		],
	},
	{
		id: 'webmail',
		title: 'WebMailing interne',
		category: 'Application web · Communication',
		year: 'Mai 2025',
		context: 'ENI · Projet d’étude',
		role: 'Développeur full-stack',
		description:
			'Une plateforme de messagerie interne pour échanger et administrer les comptes.',
		features: [
			'Envoi et réception de messages électroniques.',
			'Création, modification et suppression des comptes.',
			'Gestion des données avec PostgreSQL.',
		],
		technologies: ['Node.js', 'Vite.js', 'PostgreSQL'],
	},
	{
		id: 'cadastre',
		title: 'Opérations domaniales & cadastre',
		category: 'Application métier · Administration',
		year: 'Septembre 2024',
		context: 'MDAT Antananarivo · Stage DDPF',
		role: 'Stagiaire développeur',
		description:
			'Traitement et suivi des opérations, communication sécurisée et gestion de fichiers Excel.',
		features: [
			'Traitement et suivi des opérations domaniales et du cadastre en temps réel.',
			'Communication sécurisée pour la coordination de l’équipe à distance.',
			'Correction et traitement de fichiers Excel.',
		],
		technologies: ['React', 'Node.js', 'Python', 'PostgreSQL'],
	},
	{
		id: 'ashna',
		title: 'Site touristique Ashna Dagotour',
		category: 'Site web · Tourisme',
		year: 'Septembre 2023',
		context: 'Startup Ashna Dagotour · Freelance',
		role: 'Développeur web',
		description:
			'Site vitrine avec interface d’administration et gestion de galerie photos.',
		features: [
			'Présentation de la startup et de son activité touristique.',
			'Interface d’administration du site.',
			'Gestion de la galerie photos.',
		],
		technologies: ['PHP', 'HTML / CSS', 'Supabase', 'PostgreSQL'],
	},
	{
		id: 'communes',
		title: 'Gestion des dépenses communales',
		category: 'Application métier · Finances',
		year: 'Avril 2023',
		context: 'ENI · Projet d’étude',
		role: 'Développeur Java / J2EE',
		description:
			'Suivi des dépenses communales et génération de rapports financiers.',
		features: [
			'Suivi des dépenses communales.',
			'Génération de rapports financiers.',
		],
		technologies: ['Java / J2EE', 'PostgreSQL'],
	},
	{
		id: 'saisie',
		title: 'Course de saisie en réseau',
		category: 'Application desktop · Réseau',
		year: 'Février 2023',
		context: 'ENI · Projet d’étude',
		role: 'Développeur Java',
		description:
			'Application desktop avec interconnexion des participants, calcul de vitesse et détection des fautes en temps réel.',
		features: [
			'Interconnexion des postes et des participants via Java Networking.',
			'Détection des fautes et calcul de la vitesse de saisie en temps réel.',
			'Détection du premier participant ayant terminé la course.',
		],
		technologies: ['Java', 'Java Networking'],
	},
];
export const experiences = [
	{
		date: 'Depuis 2026',
		title: 'Responsable du Service Informatique',
		company: 'IFEM Madagascar',
		location: 'Antananarivo',
		description:
			'Coordination du support utilisateurs, maintenance du parc et administration réseau. Supervision d’une équipe de 3 personnes et développement de la plateforme pédagogique IFEM Hub.',
	},
	{
		date: 'Juillet 2025',
		title: 'Développeur full-stack freelance',
		company: 'Cyber Net Rapide',
		location: 'Fianarantsoa',
		description:
			'Conception d’une plateforme de gestion de cybercafé avec suivi des temps de connexion et gestion du routeur.',
	},
	{
		date: 'Septembre 2024',
		title: 'Stagiaire développeur',
		company: 'MDAT · DDPF',
		location: 'Antananarivo',
		description:
			'Développement d’une plateforme pour les opérations domaniales et le cadastre, avec communication sécurisée et traitement de fichiers Excel.',
	},
	{
		date: 'Septembre 2023',
		title: 'Développeur web freelance',
		company: 'Ashna Dagotour',
		location: 'Fianarantsoa',
		description:
			'Création d’un site touristique avec administration et gestion de galerie photos.',
	},
	{
		date: 'Déc. 2019 — Janv. 2021',
		title: 'Technicien IT · Support niveau 2',
		company: 'Cyber Plus Canal+',
		location: 'Fianarantsoa',
		description:
			'Configuration et réparation d’ordinateurs, téléphones et imprimantes. Installation réseau LAN / WAN, configuration des décodeurs et assistance client.',
	},
];
