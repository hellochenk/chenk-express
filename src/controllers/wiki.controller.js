const db = require('../db/index')

// controller ...
const index = async (req, res) => {
	let result = await db.models.users.findOne({
		where: {title: 'chenk'}
	})
	res.send(`维基主页${JSON.stringify(result)}`);
}

const about = async (req, res) => {
	res.send(`about 维基主页`);
}

module.exports = {
    index,
    about
}