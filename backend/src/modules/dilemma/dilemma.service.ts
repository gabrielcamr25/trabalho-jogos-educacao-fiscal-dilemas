import prisma from '../../db/prisma'; 

type DilemmaWithOptions = Awaited<ReturnType<typeof getAllDilemmas>>[number];

export const getAllDilemmas = async () => {
  return await prisma.dilemma.findMany({
    include: { options: true }
  });
};

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const getGameDeck = async (deckSize: number = 48) => {
  const allDilemmas = await getAllDilemmas();
  

  const backupPool = [...allDilemmas];
  shuffleArray(backupPool);

  const easyDilemmas = allDilemmas.filter(d => {
    const diff = String((d as any).difficulty || '').toUpperCase();
    return diff === 'EASY' || diff === 'FACIL';
  });

  const mediumDilemmas = allDilemmas.filter(d => {
    const diff = String((d as any).difficulty || '').toUpperCase();
    return diff === 'MEDIUM' || diff === 'MEDIO';
  });

  const hardDilemmas = allDilemmas.filter(d => {
    const diff = String((d as any).difficulty || '').toUpperCase();
    return diff === 'HARD' || diff === 'DIFICIL';
  });

  shuffleArray(easyDilemmas);
  shuffleArray(mediumDilemmas);
  shuffleArray(hardDilemmas);

  const finalDeck: DilemmaWithOptions[] = [];
  const totalRoundsNeeded = Math.ceil(deckSize / 4);

  for (let r = 0; r < totalRoundsNeeded; r++) {

    const easyCard = easyDilemmas.pop() || backupPool.pop();
    if (easyCard) finalDeck.push(easyCard);


    for (let m = 0; m < 2; m++) {
      const mediumCard = mediumDilemmas.pop() || backupPool.pop();
      if (mediumCard) finalDeck.push(mediumCard);
    }


    const hardCard = hardDilemmas.pop() || backupPool.pop();
    if (hardCard) finalDeck.push(hardCard);
  }


  while (finalDeck.length < deckSize && backupPool.length > 0) {
    const extraCard = backupPool.pop();
    if (extraCard) finalDeck.push(extraCard);
  }

  return finalDeck.slice(0, deckSize);
};