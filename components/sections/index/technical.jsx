// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Artist"
					preTitle="Hardskills"
					subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et sapien sit amet velit mattis interdum."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Lorem ipsum"
							icon={[ 'fat', 'chart-network' ]}
							copy="dolor sit amet, consectetur adipiscing elit. Aenean et sapien sit amet velit mattis interdum. Donec auctor laoreet euismod."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Lorem ipsum" 
							copy="dolor sit amet, consectetur adipiscing elit. Aenean et sapien sit amet velit mattis interdum. Donec auctor laoreet euismod."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Lorem ipsum" 
							copy="dolor sit amet, consectetur adipiscing elit. Aenean et sapien sit amet velit mattis interdum. Donec auctor laoreet euismod."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg} gif`}>
					{/* <iframe src="https://gifer.com/embed/3OdB" width={477} height={435.048} frameBorder="0" allowFullScreen></iframe> */}
						{/* <img src="/img/VRNM.gif" alt="gif" /> */}
						<Image src="/img/VRNM.gif" width={600} height={600} alt="gif" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'illustrator', 	name: 'Illustrator', 		type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'mailbox', 		name: 'Postman', 			type: 'fas' },
	{ key: 'computer-mouse',name: 'Click Up', 			type: 'fas' },
	{ key: 'list-music',	name: 'Ableton', 			type: 'fas' },
	{ key: 'aftereffects',	name: 'After Effects', 		type: 'devicon' },
	{ key: 'premierepro',	name: 'Premiere Pro', 		type: 'devicon' },
]

const tech	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'jquery', 		name: 'jQuery', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'woocommerce', 	name: 'WooCommerce', 		type: 'devicon' },
	{ key: "google",		name: "GA4/GTM", 			type: "devicon" },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]