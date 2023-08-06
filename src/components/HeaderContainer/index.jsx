import React from 'react';

import User from "../../assets/user2.svg";
import logo from "../../assets/Logo.png";

import style from "./style.module.scss";

const HeaderContainer = () => {
    return (
        <header>
            <div className={style.line}></div>
            <div className={style.headerDisplay}>
                <img className={style.userMand} src={User} alt="imagem ilustrativa" />
                <div className={style.bkg}>
                    <div className={style.containerHeader}>
                        <div className={style.containerLogo}>
                            <img src={logo} alt='Logo mandarin' className={style.logo} />
                        </div>
                        <div className={style.containerDescricao}>
                            <p className={style.descricaoHeader}>,NRF2020<br />  Kobe Bryant e <br /> WhatsApp Payment </p>
                            <p className={style.descricaoHeader_edicao}>edição 06</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderContainer;