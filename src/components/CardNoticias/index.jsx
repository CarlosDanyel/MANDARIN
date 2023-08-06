import React from 'react';

import card1 from "../../assets/card1.png"
import card2 from "../../assets/card2.png"

import style from "./style.module.scss";

const CardNoticias = () => {

    const ListaNoticias =
        [
            {
                img: card1,
                noticia: "Petição para colocar Kobe Bryant no jogo da NBA.",
                fonte: "Fonte: Daily Mail",
                alt: "Bryant no jogo da NBA.",
                class: "card1"
            },
            {
                img: card2,
                noticia: "WhatsApp terá função de pagamentos em 2020.",
                fonte: "Fonte: Proxxima",
                alt: "WhatsApp pagamentos",
                class: "card2"
            }
        ]

    return (
        <ul className={style.listaNoticia}>
            {ListaNoticias.map((item, indice) => {
                return (
                    <li key={indice}>
                        <img src={item.img} alt={item.alt} />
                        <h2>{item.noticia}</h2>
                        <p>{item.fonte}</p>
                    </li>
                )
            })}

        </ul>
    );
};

export default CardNoticias;