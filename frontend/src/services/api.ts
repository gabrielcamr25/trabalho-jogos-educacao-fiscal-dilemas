const API_URL = 'http://localhost:3001';

export const startGameDeck = async () => {
  try {
    
    const response = await fetch(`${API_URL}/dilemmas/start`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar os dilemas');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na API:", error);
    return [];
  }
};