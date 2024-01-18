
export default function artDetail() {

	return (
		<>
			<div style={styles.container}>
				<div style={styles.box}>
					<img src="/img/portfolio/Eyes.JPG" width={500}  />
				</div>
				<div style={styles.box}>
					<div>
					<span style={styles.heading}>Title: </span>
					<span>The Eyes of the World</span>
					</div>
					<div>
					<span style={styles.heading}>Dimensions: </span>
					<span>1234 x 0987</span>
					</div>
					<div>
					<span style={styles.heading}>Medium: </span>
					<span>1234 x 0987</span>
					</div>
					<div>
						<button style={styles.button}>Inquiry about availability</button>
					</div>
				</div>
			</div>
		</>
	);
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
		fontWeight: 'bold',
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
	}
}