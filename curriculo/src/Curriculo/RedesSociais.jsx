import React from 'react'

function RedesSociais({ Redes }) {
    return <>
        <section id="sessao-redes-sociais">
            <h2>Redes Sociais</h2>
            <ul>
                {Redes.map((rede, index) => (
                    <li key={index}><a href={rede.url}>{rede.nomeDaRede}</a></li>
                ))}
            </ul>
        </section>
    </>

}
export default RedesSociais 