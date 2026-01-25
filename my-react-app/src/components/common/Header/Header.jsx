import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1 className={styles.title}>Game Discovery</h1>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#games">Games</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;