


const DayCard = ({title, items}) => {
	return (
		<div
			className='dayCard'
			style={{
				backgroundColor: 'white',
				boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
				padding: '1em',
				borderRadius: 10,
				width: '100%',
				margin: '0 1em'
			}}
		>
			<h5 style={{
				textAlign: 'center'
			}}>{title}</h5>
			<div className='divider'
				style={{
					height: 1,
					width: '100%',
					backgroundColor: '#E2E2E2',
					margin: '0.3em 0 0.5em 0'
				}}
			> </div>
			<div className='expiry-items flex flex-column'>
				{items.length
					? (items.map((item, index) => (
						<li key={index}
							style={{
								listStyleType: 'none',
								textAlign: 'center',
								color: '#6D6D6D'
							}}
						>{item}</li>
					)))
					: <li style={{listStyleType: 'none', textAlign: 'center', color: '#6D6D6D'}}> None </li>
				}
			</div>
		</div>
	)
}


export default DayCard
