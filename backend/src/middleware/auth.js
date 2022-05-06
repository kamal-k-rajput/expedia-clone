require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken=(token)=>{
    return  jwt.verify(token, process.env.JWT_SECRET_KEY);
}

module.exports =async (req,res,next)=>{
    if(!req.headers.authorization){
        res.send({status:"key not provided or valid"})
    }

    if(!req.headers.authorization.startsWith("Bearer ")){
        res.send({status:"key not provided or valid"})
    }

    const token = req.headers.authorization.split(" ")[1];
    let user
try{
    user =  await verifyToken(token);
    // res.send(user.user)
}catch{
   return res.send({status:"key not provided or valid"})
}

req.user = user.user;
return res.send({status:"fine"})

next();
}