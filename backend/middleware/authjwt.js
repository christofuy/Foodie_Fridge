const jwt = require('jsonwebtoken')


const verifyToken = (req, res, next) => {
	const token = req.header('x-auth-token')
	if (!token) return next()

	try {
		const decoded = jwt.verify(token, 'secretkey')
		console.log('================checkpoint1')
		req.uid = decoded.user._id
	}
	catch (err) {
		res.status(400).json({msg: 'Invalid Token'})
	}
	next()
}


module.exports = verifyToken
