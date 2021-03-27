import './dashcard.scss'


const DashCard = ({children, className}) => {
	return (
		<div className={`dashCard ${className}`}>
			{children}
		</div>
	)
}


export default DashCard
