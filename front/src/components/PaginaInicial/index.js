// src\components\BemVindo\index.js

import './styles.css';
import { useNavigate } from "react-router-dom";
// import logo from '../../assets/images/Corinthians-1916.png';
import logo1 from '../../assets/images/logo-circulo.png';
import logo2 from '../../assets/images/logo-corinthians-ancora.png';
import logo3 from '../../assets/images/SCCorinthians_Paulista.png';


function PaginaInicial() {
    const navigate = useNavigate();

    const irParaCadastro = () => {
        navigate('/cadastro');
    }

    return (
        <div className="pagina-cadastro">
            
            <div className='container-logos '>
                {/* <img src={logo} alt="Logo" className="logo" /> */}
                <img src={logo1} alt="Logo" className="logo-circulo" />
                <img src={logo2} alt="Logo" className="logo-ancora" />
                <img src={logo3} alt="Logo" className="logo-cp" />
            
            <div className='nome-time'>
                <h1>Corinthians</h1>
            </div>
            
            <div className="botoes-container">

            <button onClick={irParaCadastro} className="link-cadastrar">Cadastrar</button>
            <button onClick={() => navigate('/usuarios')} className="link-usuarios">Usuários</button>

            </div>
        </div>
    </div>
    
    );
}

export default PaginaInicial;