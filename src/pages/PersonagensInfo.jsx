import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './PersonagensInfo.css';

export default function PersonagensInfo() {
    const [selectCharacter, setCharacter] = useState([]);
    const { idPersonagem } = useParams();

    useEffect(() => {
        const selecionarPersonagem = async () => {
            try {
                const res = await axios.get(`https://rickandmortyapi.com/api/character/${idPersonagem}`)
                setCharacter(res.data);
                console.log(selectCharacter)
            } catch (error) {
                console.error('Erro', error.res.data);
            }
        }
        selecionarPersonagem();
        console.log(selectCharacter)
    }, [])
    return (
        <div>
            {selectCharacter ? (
                <div>
                    <h3>Detalhes do Personagem</h3>
                    <div className='container'>
                        <img className='foto' src={selectCharacter.image} />
                        <div className='status'>
                            <p className='nome'>Nome:{selectCharacter.name} Status:{selectCharacter.status} Espécie:{selectCharacter.species}</p>
                        </div>
                        
                    </div>

                </div>
            ) : (<div>"Carregando"</div>)}
        </div>
    )

}