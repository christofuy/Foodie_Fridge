const {useState, useEffect} = require("react")



const useDB = (endpoint, method, body) => {
	const [payload, setPayload] = useState([])

	useEffect(() => {
		const config = {
			method,
			credentials: 'include',
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body
		}

		fetch(`http://localhost:5000/api/${endpoint}`, config)
			.then(res => res.json())
			.then(data => setPayload(data))
	}, [])


	return {payload}
}


export default useDB
