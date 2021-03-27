import {Link} from 'react-router-dom'
import Button from '../../components/Button/Button'
import {Nav, NavLink} from '../../components/Nav/Nav'
import FoodieFridgeLogo from '../../assets/img/FoodieFridgeLogo.png'
import useAuth from '../../utils/useAuth'

const Header = () => {
	const {user} = useAuth()

	return (
		<header
			style={{
				paddingTop: '1em',
				paddingBottom: '0.5em'
			}}
		>
			<div className='container flex ai-center jc-sb'>
				<Link to='/'>
					<img
						src={FoodieFridgeLogo}
						alt='Foodie Fridge Logo'
						width='138'
						height='60'
					/>
				</Link>
				<Nav>
					<NavLink to='/about'>About Us</NavLink>
					<NavLink to='/services'>Services</NavLink>
					<NavLink to='/contact'>Contact Us</NavLink>
				</Nav>
				<Button
					variant='outlined'
					color='secondary'
					rounded
					to={user ? '/dashboard' : '/login'}
				>
					{user ? 'Dashboard' : 'Login'}</Button>
			</div>
		</header>
	)
}



export default Header
