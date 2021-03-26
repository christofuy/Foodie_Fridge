import ButtonBase from '@material-ui/core/ButtonBase'
import {makeStyles} from '@material-ui/core/styles'


const Button = ({variant, className, bold, dense, rounded, color, children, ...props}) => {
	const classes = useStyles()
	const variants = {
		outlined: classes.outlined,
		contained: classes.contained,
	}

	return (
		<ButtonBase
			className={`
				${classes.base}
				${variants[variant]}
				${className}
				${dense && 'btn-dense'}
				${color && `btn-${color}`}
				${bold && 'btn-bold'}
				${rounded && 'btn-rounded'}
			`}
			{...props}
		>{children} </ButtonBase>
	)
}

const useStyles = makeStyles(theme => ({
	base: {
		fontSize: 'clamp(0.8rem, 2vw, 1rem)',
		fontWeight: 500,
		padding: '0.8em 2em',
		borderRadius: 5,
		transition: 'background 0.25s ease-in-out',
		'&.btn-dense': {
			padding: '0.55em 1.5em'
		},
		'&.btn-rounded': {
			borderRadius: 50
		}
	},
	outlined: {
		padding: '0.675em 2.375em',
		'&.btn-primary': {
			border: `1px solid ${theme.palette.primary.main}`,
			color: theme.palette.primary.main
		},
		'&.btn-secondary': {
			color: theme.palette.secondary.main,
			border: `1px solid ${theme.palette.secondary.main}`
		},
		'&:hover': {
			backgroundColor: 'rgba(0,0,0,0.15)'
		}
	},
	contained: {
		'&.btn-primary': {
			backgroundColor: theme.palette.primary.main,
			color: 'white',
			'&:hover': {
				backgroundColor: theme.palette.primary.dark
			}
		},
		'&.btn-secondary': {
			backgroundColor: theme.palette.secondary.main,
			color: 'white',
			'&:hover': {
				backgroundColor: theme.palette.secondary.dark
			}
		},
	}
}))


export default Button
