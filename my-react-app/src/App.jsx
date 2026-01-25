import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import GameGrid from './components/features/GameGrid/GameGrid';
import { useGames } from './hooks/useGames';
import './styles/index.css';

function App() {
  const { games, loading, error } = useGames({ pageSize: 20 });

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <GameGrid games={games} loading={loading} error={error} />
      </main>
      <Footer />
    </div>
  );
}

export default App;