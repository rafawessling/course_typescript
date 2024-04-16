"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCar = exports.registerCar = exports.getCarDetails = exports.getCars = void 0;
const conection_1 = require("../database/conection");
const getCars = async (_, res) => {
    try {
        const cars = await (0, conection_1.knex)('cars');
        return res.json(cars);
    }
    catch (_a) {
        return res.status(500).json({
            mensagem: 'Internal server error.',
        });
    }
};
exports.getCars = getCars;
const getCarDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await (0, conection_1.knex)('cars')
            .where({ id: Number(id) })
            .first();
        if (!car) {
            return res.status(404).json({ mensagem: 'Car not found.' });
        }
        return res.json(car);
    }
    catch (_a) {
        return res.status(500).json({
            mensagem: 'Internal server error.',
        });
    }
};
exports.getCarDetails = getCarDetails;
const registerCar = async (req, res) => {
    const { brand, model, color, year, price } = req.body;
    try {
        const car = await (0, conection_1.knex)('cars').insert({ brand, model, color, year, price }).returning('*');
        return res.status(201).json(car[0]);
    }
    catch (_a) {
        return res.status(500).json({
            mensagem: 'Internal server error.',
        });
    }
};
exports.registerCar = registerCar;
const updateCar = async (req, res) => {
    const { id } = req.params;
    const { brand, model, color, year, price } = req.body;
    try {
        const car = await (0, conection_1.knex)('cars')
            .where({ id: Number(id) })
            .first();
        if (!car) {
            return res.status(404).json({ mensagem: 'Car not found.' });
        }
        await (0, conection_1.knex)('cars')
            .where({ id: Number(id) })
            .update({ brand, model, color, year, price });
        return res.status(204).send();
    }
    catch (_a) {
        return res.status(500).json({
            mensagem: 'Internal server error.',
        });
    }
};
exports.updateCar = updateCar;
const deleteCar = async (req, res) => {
    const { id } = req.params;
    try {
        const car = await (0, conection_1.knex)('cars')
            .where({ id: Number(id) })
            .first();
        if (!car) {
            return res.status(404).json({ mensagem: 'Car not found.' });
        }
        await (0, conection_1.knex)('cars')
            .where({ id: Number(id) })
            .del();
        return res.status(204).send();
    }
    catch (_a) {
        return res.status(500).json({
            mensagem: 'Internal server error.',
        });
    }
};
exports.deleteCar = deleteCar;
