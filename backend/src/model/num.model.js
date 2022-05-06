const mongoose = require("mongoose");


const numSchema = new mongoose.Schema(
    {
1: {type:Number, required:false},
2: {type:Number, required:false},
3: {type:Number, required:false},
4: {type:Number, required:false},
5: {type:Number, required:false},
6: {type:Number, required:false},
7: {type:Number, required:false},
8: {type:Number, required:false},
9: {type:Number, required:false},
10: {type:Number, required:false},
11: {type:Number, required:false},
12: {type:Number, required:false},
13: {type:Number, required:false},
14: {type:Number, required:false},
15: {type:Number, required:false},
16: {type:Number, required:false},
17: {type:Number, required:false},
18: {type:Number, required:false},
19: {type:Number, required:false},
20: {type:Number, required:false},
21: {type:Number, required:false},
22: {type:Number, required:false},
23: {type:Number, required:false},
24: {type:Number, required:false},
25: {type:Number, required:false},
26: {type:Number, required:false},
27: {type:Number, required:false},
28: {type:Number, required:false},
29: {type:Number, required:false},
30: {type:Number, required:false},
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Num = mongoose.model("num",numSchema);

module.exports = Num;