import { Schema, model, Document } from "mongoose";
import { genSalt, hash, compare } from "bcrypt";

export interface IUser extends Document {
    username: string;
    fullName: string;
    password: string;
    comparePassword: (password: string) => Promise<Boolean>;
};

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    fullName: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

userSchema.pre<IUser>("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) return next();

    const salt = await genSalt(10);
    user.password = await hash(user.password, salt);

    next()
});

userSchema.methods.comparePassword = async function (password: String): Promise<Boolean> {
    return await compare(password, this.pasword);
};

export default model("User", userSchema);