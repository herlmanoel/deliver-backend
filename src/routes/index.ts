import { Router } from 'express';

import { ordersRouter } from './order.routes';
import { productsRouter } from './product.routes';

const router = Router();

router.use('/orders', ordersRouter);
router.use('/products', productsRouter);

export { router };
