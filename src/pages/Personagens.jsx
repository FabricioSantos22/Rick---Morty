import axios from 'axios';
import { useState, useEffect } from "react";
import './Personagens.css';
import { Link } from 'react-router-dom';

export default function Personagens() {
    const [pesquisa, setPesquisa] = useState([]);
    const [listaPersonagem, setPersonagem] = useState([]);
    const [status, setStatus] = useState("Alive");
    useEffect(() => {
        const buscarPersonagem = async () => {
            try {
                const API =  "https://rickandmortyapi.com/api/character/?status=alive";
                const res = await axios.get(API);
                const dados = (res.data.results);
                setPersonagem(dados);
            } catch (error) {
                console.error('Error', error);
            }
        }
        buscarPersonagem();
        console.log(listaPersonagem)
    }, []);

    const pesquisar = (e) => {
        setPesquisa(e.target.value);
    }
    const mudarNome = (nome) => {
        const ENDPOINT = `https://rickandmortyapi.com/api/character/?name=${nome}&status=${status}`
        axios.get(`${ENDPOINT}`)
            .then(response => {
                setPersonagem(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching API URLs:', error);
            });
    }
    const mudarStatus = (event) => {
        setStatus(event.target.value);
        const ENDPOINT = `https://rickandmortyapi.com/api/character/?status=${event.target.value}`
        axios.get(`${ENDPOINT}`)
            .then(response => {
                setPersonagem(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching API URLs:', error);
            });
    };

    return (
        <div>
            <h3>Lista de Personagens</h3>
            <div className='pesquisa'>
            <input value={pesquisa}onChange={pesquisar} />
            <button class="botao-pesquisar" onClick={() => mudarNome(pesquisa)}>Pesquisar</button>
            <select value={status} onChange={mudarStatus} ><option value="Alive">Vivo</option>
                <option value="Dead">Morto</option>
                <option value="Unknown">Desconhecido</option>
            </select>
            </div>
            {listaPersonagem && listaPersonagem.map((personagem, index) => (
                <Link className='link' key={index} to={`/personagem/${personagem.id}`}>
                    <div className='container'>
                        <img className='foto' src={personagem.image} />
                        <div className='status'>
                            <p className='nome'>{personagem.name}-{personagem.status}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}