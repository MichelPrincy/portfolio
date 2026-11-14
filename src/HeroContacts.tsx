import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from './content';

import './hero-contacts.css';

const contacts = [
	{
		name: 'Facebook',
		href: profile.facebook,
		Icon: FaFacebookF,
		channel: 'facebook',
	},
	{
		name: 'LinkedIn',
		href: profile.linkedin,
		Icon: FiLinkedin,
		channel: 'linkedin',
	},
	{
		name: 'E-mail',
		href: `mailto:${profile.email}`,
		Icon: FiMail,
		channel: 'email',
	},
	{
		name: 'WhatsApp',
		href: profile.whatsapp,
		Icon: FaWhatsapp,
		channel: 'whatsapp',
	},
];

export function HeroContacts() {
	return (
		<aside
			className='thought-contact'
			aria-labelledby='thought-contact-title'
		>
			<p id='thought-contact-title'>On échange ?</p>
			<nav aria-label='Contacter Michel Princy'>
				{contacts.map(({ name, href, Icon, channel }) => (
					<a
						key={channel}
						className={`thought-link thought-${channel}`}
						href={href}
						aria-label={
							channel === 'email'
								? 'M’envoyer un e-mail'
								: `Me contacter sur ${name} (nouvel onglet)`
						}
						target={channel === 'email' ? undefined : '_blank'}
						rel={channel === 'email' ? undefined : 'noopener noreferrer'}
					>
						<Icon aria-hidden='true' />
						<span
							className='thought-link-label'
							aria-hidden='true'
						>
							{name}
						</span>
					</a>
				))}
			</nav>
			<span
				className='thought-dot thought-dot-large'
				aria-hidden='true'
			/>
			<span
				className='thought-dot thought-dot-small'
				aria-hidden='true'
			/>
		</aside>
	);
}
