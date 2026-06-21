import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },

    password:{
        type:String,
        required:true,
    },

    role:{
        type:String,
        enum:["user","admin"],
        default:"user",
    },

    profileImage:{
        type:String,
        default:"",
    },

    isVerified:{
        type:Boolean,
        default:false,
    },

    subscriptionPlan:{
        type:String,
        enum:["free","pro","premium"],
        default:"free",
    },

    subscriptionStatus:{
        type:String,
        enum:["active","inactive"],
        default:"inactive",
    },
},
{
    timestamps:true,
}
);

const User = mongoose.model("User", userSchema);

export default User;