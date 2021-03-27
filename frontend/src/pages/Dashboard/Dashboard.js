import {Redirect} from 'react-router'
import SideMenu from '../../parts/SideMenu/SideMenu'
import DashboardMain from '../../parts/DashboardMain/DashboardMain'
import useAuth from '../../utils/useAuth'


const Dashboard = () => {
	const {user} = useAuth()

	if (!user) return <Redirect to='/login' />
	return (
		<div className='dashboard flex'>
			<SideMenu />
			<DashboardMain />
		</div>
	)
}


export default Dashboard
