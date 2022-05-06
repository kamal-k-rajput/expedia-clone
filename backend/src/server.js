const app = require("./index");
const connect = require("./config/db");
var server_host =  '0.0.0.0';
app.listen(process.env.PORT || 5000,server_host, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error.message);
    }
    console.log("listening on ")
});