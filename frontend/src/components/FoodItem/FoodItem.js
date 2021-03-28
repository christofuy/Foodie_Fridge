


export const FoodList = ({items}) => {
	return (
		<ul>
			{items.map((item, index) => (
				<FoodListItem key={index} name={item.item} expiry={item.expiry} />
			))}
		</ul>
	)
}


export const FoodListItem = ({name, expiry}) => {
	return (
		<div className='flex jc-sb'>
			<li
				style={{
					listStyleType: 'circle',
					marginLeft: '1em'
				}}
			>
				{name}
			</li>
			<li
				style={{
					color: 'rgb(136, 136, 136)'
				}}
			>
				{expiry}
			</li>
		</div>
	)
}
