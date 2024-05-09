const {connect} = require('mongoose')
console.log(process.env.MONGO_URL)
async function connectToDB(){
try {
    await connect(process.env.MONGO_URL)
    console.log('DB connected successfully')    
} catch (error) {
console.log(error)
}
}

module.exports= {connectToDB}