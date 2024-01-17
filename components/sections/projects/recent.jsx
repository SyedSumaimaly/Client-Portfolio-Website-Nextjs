// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

import Image from 'next/image'

import Icon from '../../utils/icon.util'

import css from '../../../styles/sections/projects/recent.module.scss'

export default function GitProjects() {
	return (
		<Section classProp={css.section}>	
			<Container classProp={css.container} spacing={'verticalXXXLrg'}>
				<h3>Recent Projects</h3>
				<section className={css.profile}>
					<img className={css.profilePhoto} src={`https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png`} alt="Profile Photo" height={60} width={60}/>
					<span class={css.details}>
						<p>{"Randy Simmony"}</p>
						{/* <a href={user[0].html_url} rel="noreferrer" target="_blank">{user[0].html_url} <Icon icon={[ 'far', 'arrow-up-right-from-square' ]} /></a> */}
					</span>
				</section>
				<div className={css.projects}>
				<div style={{gap:20, display:'flex', flexWrap:'wrap', justifyContent: 'space-around'}}>
					<img src='/img/portfolio/4th-Dimension no.1.jpg' width={300} />
					<img src='/img/portfolio/Bio-architecture no.7.jpg' width={300} />
					<img src='/img/portfolio/Bio-architecture no.8.jpg' width={300} />
					<img src='/img/portfolio/Arabelle.jpg' width={300} />
					<img src='/img/portfolio/AuditoriumShores.JPG' width={300} />
					<img src='/img/portfolio/Bio-architecture no.4.jpg' width={300} />
				</div>
				</div>
			</Container>
		</Section>
	)
}