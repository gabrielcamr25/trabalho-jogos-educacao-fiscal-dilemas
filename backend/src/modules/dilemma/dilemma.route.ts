import { Router } from 'express';
import * as DilemmaController from './dilemma.controller';

const router = Router();

router.get('/', DilemmaController.listDilemmas);

export default router;