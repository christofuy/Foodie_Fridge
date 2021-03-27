import {useState} from 'react'
import {Drawer, DrawerGroupSubheader, DrawerItem, DrawerItemGroup} from '../../components/Drawer/Drawer'
import useAuth from '../../utils/useAuth'
import {makeStyles} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import DeleteIcon from '@material-ui/icons/Delete';
import KitchenIcon from '@material-ui/icons/Kitchen';
import ListAltIcon from '@material-ui/icons/ListAlt';



const useStyles = makeStyles(theme => ({
	paper: {
		width: 250,
		height: '100vh',
		position:'static'
	},
	selected: {
		borderLeft: `5px solid ${theme.palette.primary.main}`,
	}
}))

const SideMenu = () => {
	const {logout} = useAuth()
	const [menuOpen, setMenuOpen] = useState(false)
	const classes = useStyles()

	const openMenu = () => setMenuOpen(true)

			//<MenuIcon fontSize='large' onClick={openMenu} />
	return (
		<>
			<Drawer variant='permanent' menuState={{menuOpen, setMenuOpen}} classes={{paper: classes.paper}}>
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
