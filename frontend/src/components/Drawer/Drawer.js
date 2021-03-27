
import {useState, createContext, useContext} from 'react'
import {useHistory} from 'react-router-dom'
//MUI Components
import MuiDrawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListSubheader from '@material-ui/core/ListSubheader'
import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import {makeStyles} from '@material-ui/core/styles'
//MUI Icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
	drawerItemIcon: {
		minWidth: 0,
		marginRight: '0.75rem',
		'& svg': {
			color: theme.palette.grey[400]
		}
	},
}))



const MenuContext = createContext()

export const Drawer = ({children, menuState, ...props}) => {
	const {menuOpen, setMenuOpen} = menuState
	const toggleDrawer = (menuState) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.type === 'Shift')) return
		setMenuOpen(menuState)
	}


	return (
		<MenuContext.Provider value={menuState}>
			<MuiDrawer {...props} open={menuOpen} onClose={toggleDrawer(false)}>
				{children}
			</MuiDrawer>
		</MenuContext.Provider>
	)

}

export const DrawerItemGroup = ({divider, children, ...rest}) => {
	return (
		<>
			{divider && <Divider />}
			<List component='nav' {...rest}>
				{children}
			</List>
		</>
	)
}


export const DrawerGroupSubheader = ({children}) => {
	return <ListSubheader><h4 style={{color: '#6D6D6D'}}>{children}</h4></ListSubheader>
}


export const DrawerItem = ({icon, title, to, action, children, listItemProps, listIconProps, listSubProps, listTextProps}) => {
	const [open, setOpen] = useState(false)
	const {setMenuOpen} = useContext(MenuContext)
	const history = useHistory()
	const classes = useStyles()
	//TODO: Need to add flexibility to listitemtext styling
	const onClick = () => {
		setMenuOpen(false)
		if (to) history.push(to)
		if (action) action()
	}
	const toggleMenu = () => setOpen(!open)

	return (
		<>
			<ListItem
				button
				style={{borderTop:'1px solid rgba(0,0,0,0.1)'}}
				onClick={children ? toggleMenu : onClick}
				{...listItemProps}
			>
				<ListItemIcon className={classes.drawerItemIcon}>{icon}</ListItemIcon>
				<ListItemText disableTypography {...listTextProps}>
					<span>{title}</span>
				</ListItemText>
				{children && <ExpandMoreIcon />}
			</ListItem>
			{children && (
				<Collapse in={open} timeout='auto' unmountOnExit>
					<List component='div' disablePadding {...listSubProps}>
						{children}
					</List>
				</Collapse>
			)}
		</>
	)
}


export const DrawerSubItem = ({to, text}) => {
	const history = useHistory()
	const {setMenuOpen} = useContext(MenuContext)
	return (
		<ListItem
			button
			onClick={() => {setMenuOpen(false); history.push(to)}}
		>
			<span>{text}</span>
		</ListItem>
	)
}
