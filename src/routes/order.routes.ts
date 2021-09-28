import { Router } from 'express';

const ordersRouter = Router();

ordersRouter.get('/', (request, response) => response.json());
ordersRouter.post('/', (request, response) => response.json());
ordersRouter.put('/', (request, response) => response.json());
ordersRouter.delete('/', (request, response) => response.json());

export { ordersRouter };
