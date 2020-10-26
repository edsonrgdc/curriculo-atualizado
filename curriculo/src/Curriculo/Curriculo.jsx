import React, { useState } from 'react'
import Principal from '../Curriculo/Principal'
import Caracteristicas from '../Curriculo/Caracteristicas'
import Importante from '../Curriculo/Importante'
import RedesSociais from '../Curriculo/RedesSociais'
import Rodape from '../Curriculo/Rodape'


function Curriculo() {
    const [curriculo, setCurriculo] = useState({

        titulo: 'Curriculo virtual',
        nome: 'Édson Ruan Goulart da Costa',
        imagem: <img src="https://lh3.googleusercontent.com/IwgRjkAi2Dm6C7lYRxd726kWxRcTSKy_BeFYVMaLG67mJxD_2K9tuqTswvYwywz2ZJdwphc=s85" alt="Foto do Ruan" />,

        dataDeNascimento: '22/01/2002',
        telefone: '(51) 9 8065-6492',
        cidade: 'São leopoldo',
        email: 'edsonrgdc@gmail.com',


    redesSociais: [
        {
            url: 'https://github.com/edsonrgdc', 
            nomeDaRede: 'Facebook'
        },
        {
            url: 'https://www.facebook.com/ruan.costa.35513800/', 
            nomeDaRede: 'GitHub'
        }
    ],

    formacao: [
        {
            anoCursando: 'Cursando o 3° ano do Ensino Médio.',
            nomeDaEscola: 'Escola Estadual de Ensino Médio Professora Helena Câmara',
            processo: 'Em andamento'
        }
    ],

    CursosEmAndamento: [
        {
            cursando1: 'Cursando - Front End - Tecno Start',
            cursando2: 'Cursando - Eletroeletrônica de manutençaõ industrial - SENAI - São Leopoldo.'
        }
    ],

    CursosConcluidos: [
        {
            concluido1: 'Montagem e manutençao de notebooks, celulares, computadores e redes - PreparaCursos São Leopoldo.',
            concluido2: 'Mecanico de manutenção industrial - SENAI - São Leopoldo.'
        }
    ],

    abaixo: 'Desenvolvido por Édson Ruan Goulart da Costa.'
})

    return( 
        <>
            <Principal titulo={curriculo.titulo} nome={curriculo.nome} imagem={curriculo.imagem} />
            <Importante dataDeNascimento={curriculo.dataDeNascimento} telefone={curriculo.telefone} cidade={curriculo.cidade} email={curriculo.email} />
            <Caracteristicas Caracteristicas={curriculo.Caracteristicas} />
            <RedesSociais Redes={curriculo.redesSociais} />
            <Rodape abaixo={curriculo.abaixo} />

        </>
    )
} 

export default Curriculo