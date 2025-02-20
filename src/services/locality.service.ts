import db from "../database/models";

const { Locality } = db;

export const getAllLocalities = async () => {
    return await Locality.findAll();
}

export const getLocalityById = async (id: number) => {
    const locality = await Locality.findByPk(id);
    if (!locality) {
        throw { message: 'Locality not found with the provided id', status: 404 };
    }
    return locality;
}

