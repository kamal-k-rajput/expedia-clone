const mongoose = require("mongoose");


const etcsSchema = new mongoose.Schema(
    {
1: {type:String, required:false},
2: {type:String, required:false},
3: {type:String, required:false},
4: {type:String, required:false},
5: {type:String, required:false},
6: {type:String, required:false},
7: {type:String, required:false},
8: {type:String, required:false},
9: {type:String, required:false},
10: {type:String, required:false},
11: {type:String, required:false},
12: {type:String, required:false},
13: {type:String, required:false},
14: {type:String, required:false},
15: {type:String, required:false},
16: {type:String, required:false},
17: {type:String, required:false},
18: {type:String, required:false},
19: {type:String, required:false},
20: {type:String, required:false},
21: {type:String, required:false},
22: {type:String, required:false},
23: {type:String, required:false},
24: {type:String, required:false},
25: {type:String, required:false},
26: {type:String, required:false},
27: {type:String, required:false},
28: {type:String, required:false},
29: {type:String, required:false},
30: {type:String, required:false},
    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Str = mongoose.model("str",etcsSchema);

module.exports = Str;