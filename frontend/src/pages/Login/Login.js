import {Redirect} from 'react-router'
import LoginForm from '../../parts/LoginForm/LoginForm'
import useAuth from '../../utils/useAuth'


const Login = () => {
	const {user} = useAuth()

	if (user) return <Redirect to='/dashboard' />
	return (
		<>
			<LoginForm />
		</>
	)
}


export default Login
