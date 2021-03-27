const {useState, useEffect} = require("react")



const useDB = () => {
	const [items, setItems] = useState([])

	useEffect(() => {
		fetch('http://localhost:5000/api/user/food', {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
		})
			.then(res => res.json())
			.then(data => setItems(data))
	}, [])


	return {items}
}


export default useDB
