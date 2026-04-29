import prisma from '../../db/prisma';

export const saveScore = async (
  playerName: string, 
  cityName: string,
  monthsSurvived: number, 
  finalBudget: number, 
  finalApproval: number
) => {
  return await prisma.leaderboard.create({
    data: {
      playerName,
      cityName,
      monthsSurvived,
      finalBudget,
      finalApproval
    }
  });
};

export const getTopScores = async () => {
  return await prisma.leaderboard.findMany({
    orderBy: [
      { monthsSurvived: 'desc' }, 
      { finalApproval: 'desc' }   
    ],
    take: 10
  });
};