import prisma from '../../db/prisma'; 

export const getAllDilemmas = async () => {
  return await prisma.dilemma.findMany({
    include: { options: true }
  });
};