const db = require('../db/index')

// controller ...
const index = async (req, res) => {
	let result = await db.models.users.findOne({
		where: {title: 'chenk'}
	})
	res.send(`test home ${JSON.stringify(result)}`);
}

const about = async (req, res) => {
	res.send(`about test home`);
}

module.exports = {
    index,
    about
}