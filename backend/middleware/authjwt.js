const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {
	const token = req.header('x-auth-token')
	if (!token) return next()

	try {
		const decoded = jwt.verify(token, 'secretkey')
		req.uid = decoded.uid
	}
	catch (err) {
		res.status(400).json({msg: 'Invalid Token'})
		throw err
	}
	next()
}


module.exports = verifyToken
