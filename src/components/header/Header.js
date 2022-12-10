import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png"
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {

    const [showMenu, setShowMenu] = useState(false);



    return (
        <header className={`${styles.header} d-flex flex-row align-center justify-center`}>
        <div className="flex-fill">
            <img src={logo} alt="logo bonne appétit" width="100px"/>
        </div>
        <ul className={styles.headerlist}>
            <button className="mr-5 btn btn-reverse-primary">
            <i className="fa-regular fa-heart mr-5"></i>
                <span>Wishlist</span></button>
            <button className="btn btn-primary">connexion</button>
        </ul>

        <i onClick={() => setShowMenu(true)} className={`fa-regular fa-bars ${styles.headerXs}`}></i>
       { showMenu && 
       <>
       <div onClick={() => setShowMenu(false)} className="calc"></div>
        <HeaderMenu/>
       </>
        }
    </header>
    )
}

export default Header;