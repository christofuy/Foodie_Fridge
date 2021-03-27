import './authcard.scss'


const AuthCard = ({children}) => {
	return (
		<div className='card-auth flex ai-center jc-center'>
			<div className='container'>
				{children}
			</div>
		</div>
	)
}


export default AuthCard
