import './aboutbody.scss'

const AboutBody = () => {
	return (
		<div>
			<p className = 'about-intro'>
				Foodie Fridge was created after we began to notice the amount of waste that came from our home cooking, most of it accidental. 
                Maybe it would be the lost bag of vegetables on the bottom of your refrigerator, or some leftover pasta you forgot about.
				No matter where it came from, we felt that it would be the least we can do to try and be more mindful of the food that we 
				have, and not let it go to waste. 
            </p>

			<p className = 'about-text'>
				The United States Department of Agriculture estimates that about 30-40% of the food supply goes to waste
				<sup>
					<a href = 'https://www.fda.gov/food/consumers/food-loss-and-waste#:~:text=In%20the%20United%20States%2C%20food,worth%20of%20food%20in%202010.'>[1]</a>
				</sup>, 
				a number much too high when considering that poverty, homelessness, and starvation still exists in the world. Whether you are a home chef or a professional, 
				we hope that our service can help reduce waste without the overhead of expensive equipment or inventory management systems.
            </p>

			<p className = 'about-support'>
				-Christopher, Mitch, and Nicholas
			</p>

			<p className = 'about-cite'>
				<a href = 'https://www.fda.gov/food/consumers/food-loss-and-waste#:~:text=In%20the%20United%20States%2C%20food,worth%20of%20food%20in%202010.'>
				<sup>[1]</sup> "Food Loss and Waste". U.S. Food & Drug Administration, 23 February 2021.
				</a>
			</p>
		</div>
	)
}


export default AboutBody
