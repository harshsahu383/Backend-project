import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt"
const userShema = new Schema({
  avatar: {
    type: {
      url: String,
      localPath: String,
    },
    default: {
      url: `https://placehold.co/200x200`,
      localPath: "",
    },
  },
  username: {
    type: String,
    required: [true, "Username Should Be Unique"],
    unique: true,
    trim: true,
    lowercase: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  fullName:{
    type:String,
    trim:true,
  },
  password:{
    type:String,
    required:[true, "Password is Required"],
  },
  isEmailVerified:{
    type: Boolean,
    default : false,
  },
  refreshToken:{
    type:String
  },
  forgotPasswordToken:{
    type:String
  },
  forgotPasswordExpiry:{
      type:Date,
    },
    emailVerificationToken:{
      type:String
    },
    emailVerificationExpiry:{
      type:Date
    }, 

}, {
    timestamps:true
},
);
userSchema.pre("save" , async function(next){
  if(!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password,10)
  next()
})

export const User = mongoose.model("user" , userSchema);