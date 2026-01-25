import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import styles from './GameCard.module.css';

function GameCard({ game }) {
    const handleViewDetails = () => {
        window.open(`https://rawg.io/games/${game.slug}`, '_blank');
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={game.background_image || 'https://via.placeholder.com/300x200?text=No+Image'}
                    alt={game.name}
                    className={styles.cardImage}
                    loading="lazy"
                />
                {game.rating && (
                    <div className={styles.rating}>
                        ⭐ {game.rating.toFixed(1)}
                    </div>
                )}
            </div>

            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{game.name}</h2>

                <div className={styles.metadata}>
                    <span className={styles.releaseDate}>
                        Released: {game.released || 'TBA'}
                    </span>
                    {game.genres && game.genres.length > 0 && (
                        <div className={styles.genres}>
                            {game.genres.slice(0, 2).map(genre => (
                                <span key={genre.id} className={styles.genre}>
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className={styles.platforms}>
                    {game.platforms?.slice(0, 4).map(({ platform }) => (
                        <span key={platform.id} className={styles.platform}>
                            {platform.name}
                        </span>
                    ))}
                </div>
            </div>

            <div className={styles.cardButton}>
                <Button onClick={handleViewDetails}>
                    View Details
                </Button>
            </div>
        </div>
    );
}

GameCard.propTypes = {
    game: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        background_image: PropTypes.string,
        rating: PropTypes.number,
        released: PropTypes.string,
        genres: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
            })
        ),
        platforms: PropTypes.arrayOf(
            PropTypes.shape({
                platform: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                }),
            })
        ),
    }).isRequired,
};

export default GameCard;