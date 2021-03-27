import {Redirect} from 'react-router'
import RegisterForm from '../../parts/RegisterForm/RegisterForm'
import useAuth from '../../utils/useAuth'


const Register = () => {
	const {user} = useAuth()

	if (user) return <Redirect to='/dashboard' />

	return (
		<>
			<RegisterForm />
		</>
	)
}


export default Register
