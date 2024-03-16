const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptPassword  = (password) => {


    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    //console.log(hashedPassword)
    return hashedPassword

}

const comparePassword = (password,hash)=>{


    const flag = bcrypt.compareSync(password, hash);
//    console.log(flag)

    return flag
}
//encryptPassword("123456")
///comparePassword("12345kiuiou6","$2b$10$oqaGgSq0ABUd8ib8O65N7eEUgp1J8IXZKNPM627ZJz3HkfsP2j4eO")
module.exports = {encryptPassword,comparePassword}
