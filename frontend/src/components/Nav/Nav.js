import {Link} from 'react-router-dom'


export const Nav = ({children}) => {
	return (
		<nav className='flex'>
			{children}
		</nav>
	)
}


export const NavLink = ({to, children}) => {
	return (
		<Link
			className='nav__link'
			style={{
				margin: '0 1.40625em',
				color: '#6D6D6D'
			}}
			to={to}
		>
			{children}
		</Link>
	)
}
