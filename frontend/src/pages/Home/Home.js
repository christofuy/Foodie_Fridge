import Header from '../../parts/Header/Header'
import Hero from '../../parts/Hero/Hero'


const Home = () => {
	return (
		<div className='home flex flex-column' style={{height: '100vh'}}>
			<Header />
			<Hero />
		</div>
	)
}


export default Home
