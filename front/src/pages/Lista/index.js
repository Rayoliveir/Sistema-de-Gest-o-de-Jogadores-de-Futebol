// src\pages\Lista\index.js

import ListaDeUsuarios from '../../components/ListaDeUsuarios'
import { useNavigate } from 'react-router-dom'
import './styles.css'
import logo from '../../assets/images/SCCorinthians_Paulista.png'

function PaginaListaUsuarios() {
    const navigate = useNavigate()
    
return (
        <div className='pagina-lista-usuarios'>
            <div className='container'>
            <img src={logo} alt="Logo" />
                <h2>Lista de jogadores</h2>
                <ListaDeUsuarios />
                <button onClick={() => navigate('/cadastro')} className='link-voltar'>
                    Cadastrar usuários
                </button>

                <button onClick={() => navigate('/')} >
                    Pagina inicial
                </button>
            </div>
        </div>
    )
}

export default PaginaListaUsuarios