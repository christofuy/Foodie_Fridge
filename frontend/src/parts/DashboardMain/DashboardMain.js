import {useEffect, useState} from 'react'
import DashCard from '../../components/DashCard/DashCard'
import DayCard from '../../components/DayCard/DayCard'
import Modal from '../../components/Modal/Modal'
import {FoodList} from '../../components/FoodItem/FoodItem'
import useDB from '../../utils/useDB'
import useAuth from '../../utils/useAuth'
import './dashboardmain.scss'
import {Formik, Form} from 'formik'
import TextField from '../../components/Form/TextField'
import Button from '../../components/Button/Button'


const DashboardMain = () => {
	const {user} = useAuth()
	const [items, setItems] = useState([])


	useEffect(async () => {
		const res = await fetch('http://localhost:5000/api/food', {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json',
				'x-auth-token': user
			},
		})
		const payload = await res.json()
		if (payload.doc) setItems(payload.doc.foodItems)
	}, [])


	return (
		<div className='dashboard__main' style={{maxHeight: '100vh'}}>
			<div className='container'>
				<div className='dashboard__components'>
					<ExpiryCard />
					<RecipeCard items={items} setItems={setItems} />
					<FridgeCard items={items} setItems={setItems} />
				</div>
			</div>
		</div>
	)
}


const ExpiryCard = () => {
	return (
		<DashCard className='dashCard-expiry'>
			<h3>Expiry Dates</h3>
			<p>03/21 - 03/27</p>
			<div className='flex jc-sb'
				style={{

				}}
			>
				<DayCard title='Sun' items={[]} />
				<DayCard title='Mon' items={[]} />
				<DayCard title='Tues' items={[]} />
				<DayCard title='Wed' items={[]} />
				<DayCard title='Thurs' items={[]} />
				<DayCard title='Fri' items={[]} />
				<DayCard title='Sat' items={[]} />
			</div>
		</DashCard>
	)
}


const RecipeCard = ({items}) => {
	const [recipes, setRecipes] = useState([])

	useEffect(async () => {
		if (items) {
			let url = 'https://api.spoonacular.com/recipes/findByIngredients?' + (new URLSearchParams({
				apiKey: '4ea770b37b9b434b9537e77096a8720c',
				number: 3,
				ingredients: items.map(item => item.item).join(',+')
			}))

			const config = {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-type': 'application/json',
				}
			}

			const res = await fetch(url, config)
			const payload = await res.json()
			setRecipes(payload)
		}
	}, [items])

	return (
		<DashCard className='dashCard-recipe'>
			<h3>Recipes</h3>
			{items.length ? (
				recipes.map(recipe => (
					<div className='recipe'>
						<h5 className='recipe__title'>{recipe.title}</h5>
						<div className='recipe__ingredients'>
							{recipe.usedIngredients.map(ingred => (
								<li key={ingred.id} className='recipe__ingredient-using'>{ingred.name}</li>
							))}
							{recipe.missedIngredients.map(ingred => (
								<li key={ingred.id} className='recipe__ingredient-missing'>{ingred.name}</li>
							))}
						</div>
					</div>)))
				: <p>Add some items to see what recipes are waiting for you!</p>
			}
		</DashCard>
	)
}



const initialValues = {
	item: '',
	expiry: ''
}

const FridgeCard = ({items, setItems}) => {
	const {user} = useAuth()


	const handleAdd = async (values, {setSubmitting, resetForm}) => {
		setSubmitting(true)
		try {
			const res = await fetch('http://localhost:5000/api/food', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Accept': 'application/json',
					'Content-type': 'application/json',
					'x-auth-token': user
				},
				body: JSON.stringify(values)
			})
			const payload = await res.json()
			setItems(payload.doc.foodItems)
			resetForm()
		} catch (err) {
			console.log('Add FoodItem Error: ', err)
		}
		setSubmitting(false)
	}

	return (
		<DashCard className='dashCard-fridge'>
			<h3>Your Fridge</h3>
			<FoodList items={items} />
			<Modal button='Add Item +'>
				<div style={{width: '100%', height: '100vh'}} className='itemForm flex ai-center jc-center'>
					<Formik
						initialValues={initialValues}
						onSubmit={handleAdd}
					>
						{(dirty, isSubmitting) => (
							<Form className='flex flex-column'
								style={{
									backgroundColor: 'white',
									borderRadius: 10,
									width: 'clamp(320px,50%,500px)',
									padding: '1.5em'
								}}
							>
								<h4 style={{marginBottom: '0.8em', textAlign: 'center'}}>Add Food Item</h4>
								<TextField
									name='item'
									type='text'
									label='Food Name'
									required
									autoFocus
								/>
								<TextField
									name='expiry'
									type='date'
									required
								/>
								<Button
									variant='contained'
									color='primary'
									type='submit'
									disabled={!dirty || isSubmitting}
								>
									Add Item
								</Button>
							</Form>
						)}
					</Formik>
				</div>
			</Modal>
		</DashCard>
	)
}


export default DashboardMain
