import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  address: String,
});

const User = models.Users || model("Users", userSchema);
export default User;
