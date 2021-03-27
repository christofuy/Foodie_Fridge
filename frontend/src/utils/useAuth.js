import {createContext, useContext, useEffect, useState} from "react";


const AuthContext = createContext()

const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)


	useEffect(() => {
		setLoading(true)
		console.log('User: ', user)
		console.log('Loading: ', loading)
		const token = localStorage.getItem('token')
		setUser(token)
		setLoading(false)
	}, [user, loading])


	const register = async (values, {setSubmitting}) => {
		console.log('Registration form submitted')
		setSubmitting(true)
		const {name, email, password2} = values
		try {
			const res = await fetch('http://localhost:5000/api/user', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Accept': 'application/json',
					'Content-type': 'application/json'
				},
				body: JSON.stringify({name, email, password: password2})
			})
			const payload = await res.json()
			if (payload.token) {
				localStorage.setItem('token', payload.token)
				setUser(payload.token)
			}
		} catch (err) {
			//TODO:Handle "email already in use" error
			console.log('Registration Error', err)
			setSubmitting(false)
		}
	}


	const login = async ({email, password}, {setSubmitting, resetForm}) => {
		console.log('Login form submitted')
		setSubmitting(true)
		try {
			const res = await fetch('http://localhost:5000/api/auth/login', {
				method: 'POST',
				credentials: 'include',
				headers: {
					'Accept': 'application/json',
					'Content-type': 'application/json'
				},
				body: JSON.stringify({email, password})
			})
			const payload = await res.json()
			console.log('Login Payload: ', payload)
			if (payload.token) {
				localStorage.setItem('token', payload.token)
				setUser(payload.token)
			}
		} catch (err) {
			setSubmitting(false)
			resetForm() //TODO: Is this necessary?
		}
	}


	const logout = async () => {
		localStorage.removeItem('token')
		setUser(null)
	}

	const value = {user, loading, register, login, logout}

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}


export default useAuth
