import {useState} from 'react'
import {Drawer, DrawerItem, DrawerItemGroup} from '../../components/Drawer/Drawer'
import MenuIcon from '@material-ui/icons/Menu'


const SideMenu = () => {
	const [menuOpen, setMenuOpen] = useState(false)

	const openMenu=()=>setMenuOpen(true)

	return (
		<>
			<MenuIcon fontSize='large' onClick={openMenu}/>
			<Drawer menuState={{menuOpen, setMenuOpen}}>
				<DrawerItemGroup>
					<DrawerItem to='/' title='Home' />
				</DrawerItemGroup>
			</Drawer>
		</>
	)
}


export default SideMenu
