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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Artist"
					subTitle="In the alchemy of my art, I seek to map the uncharted territories of the human experience. Blank sheets become the liminal spaces where thoughts are given volume and emotions are rendered in a spectrum of colors that echo the complexity of feeling and the resonance of mental states."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg" alt="Nelson family photo"/>
						{/* <Image src="https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Lorem ipsum dolor sit amet"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="consectetur adipiscing elit. Aenean et sapien sit amet velit mattis interdum. Donec auctor laoreet euismod. Aenean pellentesque felis id lorem vehicula, ut pharetra elit efficitur."
						/>
						<BadgesBlock 
							title="Lorem ipsum dolor sit amet" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="consectetur adipiscing elit. Aenean et sapien sit amet velit mattis interdum. Donec auctor laoreet euismod. Aenean pellentesque felis id lorem vehicula, ut pharetra elit efficitur."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]