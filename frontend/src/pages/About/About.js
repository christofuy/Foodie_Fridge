import Header from '../../parts/Header/Header'
import AboutBody from '../../parts/NavBody/AboutBody'

const About = () => {
	return (
		<div className='home flex flex-column' style={{height: '100vh'}}>
			<Header />
			<AboutBody />
		</div>
	)
}


export default About