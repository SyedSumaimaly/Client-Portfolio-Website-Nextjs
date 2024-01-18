import Section from '../structure/section';
import Container from '../structure/container';

import css from '../../styles/sections/projects/featured.module.scss'

export default function ComingSoon() {
	return (
		<Section classProp={css.hasBg}>
			<Container>
				<div style={styles.container} className="art_detailContainer">
					<div style={styles.box}>
						<img src="/img/animationContact.gif" width={500} />
					</div>
					<div style={styles.box}>
						<div>
							<span style={styles.heading} className="heading">Name: </span>
							<span><input type="text" /></span>
						</div>
						<div>
							<span style={styles.heading} className="heading">Email: </span>
							<span><input type="email" /></span>
						</div>
						<div>
							<span style={styles.heading} className="heading">Message: </span>
							<span><textarea name="" id="" cols="40" rows="5"></textarea></span>
						</div>
						<div>
							<button style={styles.button}>Submit</button>
						</div>
					</div>
				</div>
				<style jsx>{`
				.fullHeight {
					min-height: 500px;
					height: 100vh;
					max-height: 1200px;
				}
				.centered {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			`}</style>
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}


const styles = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '5rem',
		paddingTop: '10rem'
	},
	heading: {
		fontSize: '25px',
		fontWeight: '530',
		color: 'var(--primary-bright)'
	},
	box: {
		padding: 10,
		width: '100%'
	},
	button: {
		marginTop: '2rem',
		background: '#ee24ee',
		color: '#fff',
		padding: '1rem',
		borderRadius: '5px',
		cursor: 'pointer'
	},
}