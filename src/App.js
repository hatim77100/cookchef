// import Content from "./components/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import styles from "./App.module.scss";
import Content from "./components/content/Content";

function App() {
  return (
    <div className = {`${styles.appContainer} d-flex flex-column`}>
     <Header/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
