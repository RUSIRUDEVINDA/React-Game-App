import PropTypes from 'prop-types';
import GameCard from '../GameCard/GameCard';
import Loading from '../../common/Loading/Loading';
import styles from './GameGrid.module.css';

function GameGrid({ games, loading, error }) {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>No games found</h2>
        <p>Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

GameGrid.propTypes = {
  games: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default GameGrid;