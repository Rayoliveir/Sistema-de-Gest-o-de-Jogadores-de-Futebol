// src\components\BemVindo\index.js

import './styles.css';
import { useNavigate } from "react";
import logo from '../../assets/images/logo.png';

function BemVindo() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <img src={logo} alt="Logo da empresa" />

            <h2>Bem-vindo ao sistema de cadastro de jogadores!</h2>
            
            <button onClick={() => navigate('/cadastro')} className='cadastrar'>Cadastrar Jogador</button>
            <button onClick={() => navigate('/usuarios')} className='usuarios'>Listar Jogadores</button>
        </div>
    );
}

export default BemVindo;