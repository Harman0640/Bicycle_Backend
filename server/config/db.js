let mongoose = require('mongoose')
const dbPath = 'mongodb+srv://harmanjot1251_db_user:harman5602@cluster0.bht3ipe.mongodb.net/bicycleDb'
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(dbPath, options).then(res => {
    console.log("Db Connected")
}).catch(err => {
    console.log("Db Connect Err", err)
})
