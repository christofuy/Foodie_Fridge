import MUITextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'
import {Field, useField} from 'formik'



const TextField = ({name, ...rest}) => {
	const [field, {touched, error}] = useField(name)
	const classes = useStyles()

	return (
		<Field
			{...field}
			as={MUITextField}
			variant='outlined'
			className={classes.text}
			error={touched && !!error}
			helperText={touched && error}
			{...rest}
		/>
	)
}



const useStyles = makeStyles({
	text: {
		marginBottom: '1em'
	}
})


export default TextField
