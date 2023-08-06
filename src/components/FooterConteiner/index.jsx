import React from 'react';

import Assinatura from "../../assets/assinatura.png"

import style from "./style.module.scss";

const FooterContainer = () => {
    return (
        <footer>
            <div className={style.containerFooter}>
                <img src={Assinatura} alt="assinatura " />
            </div>
            <div className={style.direitos}>
                <p>Copyright ® Mandarin. Todos os direitos reservados.<br/>
                    Caso não deseje mais receber nossos e-mails, por favor <span>clique aqui.</span></p>
            </div>
        </footer>
    );
};

export default FooterContainer;