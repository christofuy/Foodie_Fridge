import Button from '../../components/Button/Button'
import './hero.scss'


const Hero = () => {
	return (
		<section className='hero' style={{height: '100%'}}>
			<div className='container flex ai-center' style={{height: '80%'}}>
				<div
					className='hero__text'
				>
					<h2>Smart Fridge Features without the Smart Fridge Premium</h2>
					<p>Enhance your at-home dining experience with the freshest ingredients and the richest recipes with your own Foodie Fridge.</p>
					<Button>Start Now</Button>
				</div>
				<div className='hero__img'>
					<div className='' />
				</div>
			</div>
		</section>
	)
}


export default Hero
