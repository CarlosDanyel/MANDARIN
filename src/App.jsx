import HeaderContainer from "./components/HeaderContainer";
import ImgHome from "./assets/img_home.png";

import CardNoticias from "./components/CardNoticias";
import FooterContainer from "./components/FooterConteiner";

import style from "./style/globals.module.scss";

function App() {

  return (
    <>
      <HeaderContainer />
      <main>
        <section className={style.home}>
          <div className={style.containerHome}>
            <img src={ImgHome} alt="Entrevista NRF 2020" />
            <div className={style.bannerText}>
              <h1>NRF 2020: conheça os top 5 assuntos do evento.</h1>
              <p className={style.descricao}>O maior evento sobre varejo do mundo mostrando as tendências, oportunidades e inovações para o setor.</p>
              <p className={style.fonte}>Fonte: CMO ADOBE</p>
            </div>
          </div>
          <CardNoticias/>
        </section>
      </main >
      <FooterContainer/>
    </>
  )
}

export default App
