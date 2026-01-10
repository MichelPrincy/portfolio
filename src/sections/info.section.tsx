import { FaGithub, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

// Import de l'image
import profilePic from '../image/profil.png';

import { FloatingButton } from '../components/floating-button';
import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>
			<FloatingButton
				label='À propos'
				className='first'
				href='/#about-me'
			/>

			{/* Ajout de l'image ici */}
			<div className='profile-wrapper'>
				<img
					src={profilePic}
					alt='Michel Princy'
					className='profile-img'
				/>
			</div>

			<p>Bonjour, je suis</p>
			<TextHover
				text='MICHEL PRINCY'
				className='name'
			/>
			<p>Développeur Full Stack Junior</p>

			<FloatingButton
				label='Technos'
				className='sec'
				href='/#tech-stack'
			/>

			<div className='blur'></div>

			<div className='bottom-bar'>
			    <GlowLink
			        href='https://github.com/MichelPrincy'
			        color='rgba(255, 255, 255, 0.4)'
			        icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
			        aria-label='github'
			    />
			    <GlowLink
			        href='https://www.linkedin.com/in/princy-rakotozafimalala-ba1022327/'
			        color='rgb(0, 160, 220, 0.6)'
			        icon={<FaLinkedinIn color='rgb(0, 160, 220)' />}
			        aria-label='linkedin'
			    />
			    {/* WhatsApp Lien direct */}
			    <GlowLink
			        href='https://wa.me/261382994693'
			        color='rgba(37, 211, 102, 0.6)'
			        icon={<FaWhatsapp color='rgb(37, 211, 102)' />}
			        aria-label='whatsapp'
			    />
			    {/* Telegram Lien direct */}
			    <GlowLink
			        href='https://t.me/+261382994693'
			        color='rgba(0, 136, 204, 0.6)'
			        icon={<FaTelegramPlane color='rgb(0, 136, 204)' />}
			        aria-label='telegram'
			    />
			    <GlowLink
			        href='mailto:micheleprincy2709@gmail.com'
			        icon={<IoMailOutline color='rgb(18, 122, 209)' />}
			        color='rgb(18, 122, 209, 0.7)'
			        aria-label='mail'
			    />
			</div>
		</div>
	);
};
