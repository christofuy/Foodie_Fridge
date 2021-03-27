import {useState} from 'react'
import DashCard from '../../components/DashCard/DashCard'
import Modal from '../../components/Modal/Modal'
import {FoodList} from '../../components/FoodItem/FoodItem'
import useDB from '../../utils/useDB'
import './dashboardmain.scss'
import {Formik, Form} from 'formik'
import TextField from '../../components/Form/TextField'
import Button from '../../components/Button/Button'


const DashboardMain = () => {
	return (
		<div className='dashboard__main' style={{maxHeight: '100vh'}}>
			<div className='container'>
				<div className='dashboard__components'>
					<ExpiryCard />
					<RecipeCard />
					<FridgeCard />
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
		</DashCard>
	)
}


const RecipeCard = () => {
	return (
		<DashCard className='dashCard-recipe'>
			<h3>Recipes</h3>
			<h6>Recipe Name</h6>
		</DashCard>
	)
}



const initialValues = {
	name: '',
	expiry: (new Date('2021-05-24'))
}

const FridgeCard = () => {
	//const {items}=useDB()
	const [items, setItems] = useState([])


	const handleAdd = (values) => {
		setItems(items.concat([values]))
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
						{() => (
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
									name='name'
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
								<Button variant='contained' color='primary' type='submit'>
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
