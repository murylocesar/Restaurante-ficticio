const bcrypt =  require('bcrypt');

async function encryption(password) {
    return await bcrypt.hashSync(password, 10);
}

async function comparePassword(password_digitado, password) {
    return await bcrypt.compareSync(password_digitado, password);    
}

module.exports = {encryption, comparePassword };