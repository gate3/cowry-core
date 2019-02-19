const bcrypt = require('bcrypt-nodejs');

const signupController = ({userModel}) => ({phone, first_name, last_name, password}) => {
    try{
        const user = new userModel();
        user.first_name = first_name;
        user.last_name = last_name;
        user.phone = phone;
        const pass = bcrypt.hashSync(password);
        user.password = pass;
        return user.save();
    }catch(e){
        return Promise.reject(e)
    }
}

module.exports = signupController;