import prisma from '../../db/prisma'; 

export const getAllDilemmas = async () => {
  return await prisma.dilemma.findMany({
    include: { options: true }
  });
};


export const getGameDeck = async (deckSize: number = 8) => {

  const allDilemmas = await getAllDilemmas();


  for (let i = allDilemmas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allDilemmas[i], allDilemmas[j]] = [allDilemmas[j], allDilemmas[i]];
  }


  return allDilemmas.slice(0, deckSize);
};