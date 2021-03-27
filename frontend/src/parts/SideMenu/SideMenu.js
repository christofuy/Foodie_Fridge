import {useState} from 'react'
import {Drawer, DrawerGroupSubheader, DrawerItem, DrawerItemGroup} from '../../components/Drawer/Drawer'
import useAuth from '../../utils/useAuth'
import MenuIcon from '@material-ui/icons/Menu'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import DeleteIcon from '@material-ui/icons/Delete';
import KitchenIcon from '@material-ui/icons/Kitchen';
import ListAltIcon from '@material-ui/icons/ListAlt';


const SideMenu = () => {
	const {logout} = useAuth()
	const [menuOpen, setMenuOpen] = useState(false)

	const openMenu = () => setMenuOpen(true)

	return (
		<>
			<MenuIcon fontSize='large' onClick={openMenu} />
			<Drawer variant='permanent' menuState={{menuOpen, setMenuOpen}}>
				<DrawerItemGroup>
					<DrawerItem to='/' title='Home' icon={<MeetingRoomIcon />} />
					<DrawerItem action={logout} title='Log Out' icon={<ExitToAppIcon />} />
				</DrawerItemGroup>
				<DrawerItemGroup>
					<DrawerGroupSubheader>Welcome, Steve</DrawerGroupSubheader>
					<DrawerItem title='Waste Console' icon={<DeleteIcon />} />
					<DrawerItem title='Your Fridge' icon={<KitchenIcon />} />
					<DrawerItem title='New Recipes' icon={<ListAltIcon />} />
				</DrawerItemGroup>
			</Drawer>
		</>
	)
}


export default SideMenu
