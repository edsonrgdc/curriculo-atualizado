import React from 'react'

function Importante({ dataDeNascimento, telefone, cidade, email }) {
    return <>
        {dataDeNascimento}
        {telefone}
        {cidade}
        {email}
    </>
}

export default Importante