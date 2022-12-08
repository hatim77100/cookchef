import styles from "./Footer.module.scss"


function Footer() {
    return (
    <footer className={`${styles.footer}`}> 
    <p>Copyright &copy; Bonne Appetit.</p>
    </footer>
    )
}

export default Footer;