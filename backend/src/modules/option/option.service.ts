import prisma from '../../db/prisma';


export const createOption = async (
  text: string, 
  budgetImpact: number, 
  approvalImpact: number, 
  dilemmaId: string
) => {
  return await prisma.option.create({
    data: {
      text,
      budgetImpact,
      approvalImpact,
      dilemmaId 
    }
  });
};


export const getOptions = async () => {
  return await prisma.option.findMany();
};