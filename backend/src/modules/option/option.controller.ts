import { Request, Response } from 'express';
import * as OptionService from './option.service';

export const createOption = async (req: Request, res: Response) => {
  try {
    const { text, budgetImpact, approvalImpact, dilemmaId } = req.body;
    
    const newOption = await OptionService.createOption(
      text, 
      budgetImpact, 
      approvalImpact, 
      dilemmaId
    );
    
    res.status(201).json(newOption);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar a opção no banco." });
  }
};

export const listOptions = async (req: Request, res: Response) => {
  try {
    const options = await OptionService.getOptions();
    res.json(options);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar as opções." });
  }
};