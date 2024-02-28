import { livros } from "./dadosUltimosLancamentos"
import styled from "styled-components"
import { Titulo } from "../Titulo"
import CardRecomenda from "../CardRecomenda"
import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamenosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamenosContainer>
            <Titulo 
                cor="#EB9B00" 
                tamanhoFonte="36px" 
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                <img src={livro.src}/>
                 ) ) }
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talves você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamenosContainer>
        
    )
}

export default UltimosLancamentos