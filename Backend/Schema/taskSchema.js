import mongoose, { mongo } from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    taskDetails:[{
        type: Schema.Types.Mixed,
        required: true
    }]
    
})
const User = mongoose.model('task', userSchema);

export default User;