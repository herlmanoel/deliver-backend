import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', (request, response) => response.json());
productsRouter.post('/', (request, response) => response.json());
productsRouter.put('/', (request, response) => response.json());
productsRouter.delete('/', (request, response) => response.json());

export { productsRouter };
