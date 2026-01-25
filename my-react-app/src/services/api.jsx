const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = 'https://api.rawg.io/api';

export const gameService = {
  // Fetch games with optional filters
  async fetchGames(params = {}) {
    try {
      const queryParams = new URLSearchParams({
        key: API_KEY,
        page_size: params.pageSize || 20,
        page: params.page || 1,
        ...params
      });

      const response = await fetch(`${BASE_URL}/games?${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch games');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching games:', error);
      throw error;
    }
  },

  // Fetch single game details
  async fetchGameDetails(id) {
    try {
      const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch game details');
      }
      
      return response.json();
    } catch (error) {
      console.error('Error fetching game details:', error);
      throw error;
    }
  },

  // Search games
  async searchGames(query) {
    try {
      const queryParams = new URLSearchParams({
        key: API_KEY,
        search: query,
        page_size: 20
      });

      const response = await fetch(`${BASE_URL}/games?${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Failed to search games');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching games:', error);
      throw error;
    }
  }
};