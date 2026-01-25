import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Game Discovery. Powered by RAWG API.</p>
        </footer>
    );
}

export default Footer;