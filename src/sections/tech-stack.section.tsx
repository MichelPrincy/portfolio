import {
	BiLogoFlutter,
	BiLogoJavascript,
	BiLogoPhp,
	BiLogoPython,
} from 'react-icons/bi';
import {
	FaCss3Alt,
	FaHtml5,
	FaJava,
	FaNodeJs,
	FaReact,
	FaVuejs,
} from 'react-icons/fa';
import {
	SiMysql,
	SiPostgresql,
	SiSharp,
	SiSqlite,
	SiSymfony,
} from 'react-icons/si';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Langages de Programmation',
		items: [
			{
				title: 'JavaScript',
				icon: <BiLogoJavascript color='rgb(247, 223, 30)' />,
				color: 'rgba(247, 223, 30, 0.6)',
			},
			{
				title: 'PHP',
				icon: <BiLogoPhp color='rgb(119, 123, 179)' />,
				color: 'rgba(119, 123, 179, 0.6)',
			},
			{
				title: 'C#',
				icon: <SiSharp color='rgb(35, 145, 35)' />,
				color: 'rgba(35, 145, 35, 0.6)',
			},
			{
				title: 'Python',
				icon: <BiLogoPython color='rgb(55, 118, 171)' />,
				color: 'rgba(55, 118, 171, 0.6)',
			},
			{
				title: 'HTML 5',
				icon: <FaHtml5 color='rgb(227, 79, 38)' />,
				color: 'rgba(227, 79, 38, 0.6)',
			},
			{
				title: 'CSS 3',
				icon: <FaCss3Alt color='rgb(38, 77, 228)' />,
				color: 'rgba(38, 77, 228, 0.6)',
			},
		],
	},
	{
		heading: 'Technologies Web & Mobile',
		items: [
			{
				title: 'Node JS',
				icon: <FaNodeJs color='rgb(104, 160, 99)' />,
				color: 'rgb(104, 160, 99, 0.6)',
			},
			{
				title: 'Vue JS',
				icon: <FaVuejs color='rgb(65, 184, 131)' />,
				color: 'rgba(65, 184, 131, 0.6)',
			},
			{
				title: 'React JS',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgb(97, 219, 251, 0.6)',
			},
			{
				title: 'Symphony',
				icon: <SiSymfony color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Flutter',
				icon: <BiLogoFlutter color='rgb(2, 175, 249)' />,
				color: 'rgba(2, 175, 249, 0.6)',
			},
			{
				title: 'Java / J2EE',
				icon: <FaJava color='rgb(231, 111, 0)' />,
				color: 'rgba(231, 111, 0, 0.6)',
			},
		],
	},
	{
		heading: 'Bases de Données',
		items: [
			{
				title: 'PostgreSQL',
				icon: <SiPostgresql color='rgb(51, 103, 145)' />,
				color: 'rgba(51, 103, 145, 0.6)',
			},
			{
				title: 'MySQL',
				icon: <SiMysql color='rgb(0, 122, 158)' />,
				color: 'rgb(0, 122, 158, 0.75)',
			},
			{
				title: 'SQLite',
				icon: <SiSqlite color='rgb(0, 59, 144)' />,
				color: 'rgba(0, 59, 144, 0.6)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Stack'
					subTitle='TECH'
				/>
			</div>
		</section>
	);
};
