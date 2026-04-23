import { Request, Response } from 'express';
import * as DilemmaService from './dilemma.service';

export const listDilemmas = async (req: Request, res: Response) => {
  try {
    const dilemmas = await DilemmaService.getAllDilemmas();
    res.json(dilemmas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar dilemas." });
  }
};