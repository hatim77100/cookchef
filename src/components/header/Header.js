import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png"

function Header() {
    return (
        <header className={`${styles.header} d-flex flex-row align-center justify-center`}>
        <i className="fa-regular fa-bars"></i>
        <div className="flex-fill">
            <img src={logo} alt="logo bonne appétit" width="100px"/>
        </div>
        <ul>
            <button className="mr-5 btn btn-reverse-primary">
            <i className="fa-regular fa-basket-shopping"></i>
                <span>panier</span></button>
            <button className="btn btn-primary">connexion</button>
        </ul>

    </header>
    )
}

export default Header;