import mongoose from "mongoose";
import UserSchema from "../schema/userSchema";

const UserModels = mongoose.model("User", UserSchema);

export default UserModels;