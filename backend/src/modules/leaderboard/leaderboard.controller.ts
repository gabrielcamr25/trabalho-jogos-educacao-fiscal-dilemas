import { Request, Response } from 'express';
import * as LeaderboardService from './leaderboard.service';


export const createScore = async (req: Request, res: Response) => {
  try {
   
    const { playerName, monthsSurvived, finalBudget, finalApproval } = req.body;
    
    const newEntry = await LeaderboardService.saveScore(
      playerName, 
      monthsSurvived, 
      finalBudget, 
      finalApproval
    );
    
    res.status(201).json(newEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao salvar pontuação no banco." });
  }
};


export const listTopScores = async (req: Request, res: Response) => {
  try {
    const topScores = await LeaderboardService.getTopScores();
    res.json(topScores);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar o ranking." });
  }
};