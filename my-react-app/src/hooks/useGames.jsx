import { useState, useEffect } from 'react';
import { gameService } from '../services/api';

export function useGames(params = {}) {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const loadGames = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await gameService.fetchGames(params);

                if (isMounted) {
                    setGames(data.results || []);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        loadGames();

        return () => {
            isMounted = false;
        };
    }, [params.page, params.pageSize]);

    return { games, loading, error };
}