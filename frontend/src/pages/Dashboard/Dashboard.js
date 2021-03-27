import {Redirect} from 'react-router'
import SideMenu from '../../parts/SideMenu/SideMenu'
import useAuth from '../../utils/useAuth'


const Dashboard = () => {
	const {user} = useAuth()

	if (!user) return <Redirect to='/login' />
	return (
		<>
			<SideMenu />
		</>
	)
}


export default Dashboard
