import db from "../database/models";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const { User } = db;

export const loginUser = async (email: string, password: string) => {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
        throw { message: 'Invalid credentials', status: 404 };
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw { message: 'Invalid credentials', status: 404 };
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return { user, token };
};


export const signUpUser = async (name: string, email: string, number: string, password: string) => {
    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
        throw { message: 'User already exists', status: 400 };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;

    const newUser = await User.create({ name, email, number, password, role: 'user' });

    const token = jwt.sign({ id: newUser.id, email: newUser.email, role: newUser.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return { user: newUser, token };

}