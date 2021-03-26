import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {Nav, NavLink} from '../../components/Nav/Nav'
import FoodieFridgeLogo from '../../assets/img/FoodieFridgeLogo.png'

const Header = () => {
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
				<Button variant='contained'>Register</Button>
			</div>
		</header>
	)
}



export default Header
