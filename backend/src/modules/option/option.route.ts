import { Router } from 'express';
import * as OptionController from './option.controller';

const router = Router();

router.get('/', OptionController.listOptions);
router.post('/', OptionController.createOption);

export default router;