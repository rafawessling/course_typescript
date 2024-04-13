import { Router } from 'express';
import { updateCar, registerCar, deleteCar, getCarDetails, getCars } from './controllers/cars';

const routes = Router();

routes.get('/cars', getCars);
routes.get('/cars/:id', getCarDetails);
routes.post('/cars', registerCar);
routes.put('/cars/:id', updateCar);
routes.delete('/cars/:id', deleteCar);

export default routes;
