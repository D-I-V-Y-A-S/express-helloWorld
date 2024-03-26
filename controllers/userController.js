const userData = require('../data/data')

// const getAllUsers=(request,response) => {

//     response.status(200).send({message:"Hello World"})
// }

const getAllUsers=(request,response) => {

    response.status(200).send(userData)
}

module.exports={getAllUsers}
