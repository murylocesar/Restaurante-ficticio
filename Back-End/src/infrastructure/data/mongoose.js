const mongoose = require('mongoose');
require('dotenv').config();



mongoose.connect('mongodb+srv://teste:'+process.env.MONGODB_USER+'@cluster0-jrfun.mongodb.net/'+process.env.MONGODB_SENHA+'?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopogy: true,
});
module.exports = mongoose;
