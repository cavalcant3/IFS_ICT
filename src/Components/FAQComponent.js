import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import './FAQComponent.css';


const data = {
    title: "FAQ",
    rows: [
        {
            title: "Os comprovantes de experiência em programação e em I.A são obrigatórios?",
            content: `Os comprovantes de expriência em programação e em I.A não são obrigatórios para o envio.`,
        },
        {
            title: "O transporte será fornecido pelo Instituto Federal de Sergipe?",
            content: `O Instituto Federal de Sergipe não disponibilizará transporte.`,
        },
        {
            title: "Histórico escolar serve como comprovação?",
            content: `Sim! Caso não tenha posse do certificado de conclusão o histórico serve como comprovante.`,
        }
    ]
}
const styles = {
    // bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: '#7A7A7A',
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

export default function FAQComponent() {

    return (
        <div className="ContainerFAQ">
            <div className="faqComponent" style={{}}>
                <Faq
                    data={data}
                    styles={styles}

                />
            </div>
        </div>
    );
}