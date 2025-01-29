import db from "../database/models";

const { User } = db;

export const getAllUsers = async () => {
    return await User.findAll();
}

export const getUserById = async (id: number) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw { message: 'User not found with the provided id', status: 404 };
    }
    return user;
}

export const createUser = async (data: { name: string, email: string, number: string, password: string }) => {
    const existingUser = await User.findOne({ where: { email: data.email } });

    if (existingUser) {
        throw { message: 'User already exists', status: 400 };
    }
    return await User.create(data);
}

export const updateUser = async (data: { name: string, email: string, number: string, password: string }, id: number) => {
    const user = await User.findByPk(id);

    if (!user) {
        throw { message: 'User not found with the provided id', status: 404 };
    }
    return await user.update(data);
}

export const deleteUser = async (id: number) => {
    const user = await User.findByPk(id);

    if (!user) {
        throw { message: 'User not found with the provided id', status: 404 };
    }
    return await user.destroy();
}