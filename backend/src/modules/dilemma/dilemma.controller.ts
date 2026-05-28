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


export const startGameDeck = async (req: Request, res: Response) => {
  try {

    const deck = await DilemmaService.getGameDeck(48);
    res.json(deck);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao gerar o baralho de dilemas." });
  }
};