import { Router } from 'express';
import * as LeaderboardController from './leaderboard.controller';

const router = Router();


router.get('/', LeaderboardController.listTopScores);


router.post('/', LeaderboardController.createScore);

export default router;