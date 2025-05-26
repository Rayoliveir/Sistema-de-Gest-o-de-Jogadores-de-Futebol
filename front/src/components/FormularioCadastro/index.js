// src\components\FormularioCadastro\index.js

import { useState } from "react";
import './styles.css'
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem'
import MensagemFeedback from '../MensagemFeedback'
import logo from '../../assets/images/logo-circulo.png'
import axios from 'axios'

function FormularioCadastro() {
    const [nome, setNome] = useState('')
    const [sexo, setSexo] = useState('')
    const [idade, setIdade] = useState('')
    const [altura, setAltura] = useState('')
    const [peso, setPeso] = useState('')
    const [posicao, setPosicao] = useState('')
    const [numeroDaCamisa, setNumeroDaCamisa] = useState('')
    const navigate = useNavigate()
    const { exibirMensagem , mensagem, tipoMensagem, visivel, fecharMensagem } = useMensagem()

    const cadastrarUsuario = async () => {
        try {
            const response = await axios.post('http://localhost:8080/usuarios', {nome, sexo, idade, altura, peso, posicao, numeroDaCamisa})
            exibirMensagem(response.data.mensagem || 'Usuário cadastrado com sucesso!', 'sucesso')
            setNome('')
            setSexo('')
            setIdade('')
            setAltura('')
            setPeso('')
            setPosicao('')
            setNumeroDaCamisa('')
        } catch (error) {
            let erroMsg = 'Erro ao conectar ao servidor.'
            if (error.response && error.response.data) {
                erroMsg = error.response.data.mensagem
                if (error.response.data.erros) {
                    erroMsg += ' ' + Object.values(error.response.data.erros).join(', ')
                }
            }
            exibirMensagem(erroMsg, 'erro')
        }
    }

    return (
        <>
        
        <div className="container">
            <img src={logo} alt="Logo da empresa" />
            
            <h2>Cadastro de jogadores</h2>

            <form onSubmit={(e) => {e.preventDefault(); cadastrarUsuario()}}>
                <input type="text" id="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                <select id="genero" class="select-sex" value={sexo} onChange={(e) => setSexo(e.target.value)} required>
                <option value="" disabled>Selecione o gênero</option>
                    <option value="MASCULINO">Masculino</option>
                    <option value="FEMININO">Feminino</option>
                    <option value="OUTRO">Outro</option>
                </select> 
                <input type="text" id="idade" placeholder="Idade" value={idade} onChange={(e) => setIdade(e.target.value)} required />
                <input type="text" id="altura" placeholder="Altura" value={altura} onChange={(e) => setAltura(e.target.value)} required />
                <input type="text" id="peso" placeholder="Peso" value={peso} onChange={(e) => setPeso(e.target.value)} required />
                <input type="text" id="numeroDaCamisa" placeholder="Número da camisa" value={numeroDaCamisa} onChange={(e) => setNumeroDaCamisa(e.target.value)} required />


                <select
                    type= "posicao" 
                    id="posicao"
                    placeholder="Posição"
                    value={posicao}
                    onChange={(e) => setPosicao(e.target.value)}
                    required>
                    <option value="" disabled>Selecione a posição</option>
                    <option value="GOLEIRO">Goleiro</option>
                    <option value="ZAGUEIRO">Zagueiro</option>
                    <option value="LATERAL_ESQUERDO">Lateral esquerdo</option>
                    <option value="LATERAL_DIREITO">Lateral direto</option>
                    <option value="VOLANTE">Volante</option>
                    <option value="ALA_ESQUERDO">Ala esquerdo</option>
                    <option value="ALA_DIREITO">Ala direito</option>
                    <option value="MEIO_CAMPO_ESQUERDO">Meio campo esquerdo</option>
                    <option value="MEIO_CAMPO_DIREITO">Meio campo direito</option>
                    <option value="MEIA_CENTRAL">Meia central</option>
                    <option value="MEIA_LATERAL">Meia lateral</option>
                    <option value="MEIA_ATACANTE">Meia atacante</option>
                    <option value="PONTA">Ponta</option>
                    <option value="ATACANTE">Atacante</option>
                </select>       


                <button type="submit">Cadastrar</button>

                <button onClick={() => navigate('/usuarios')} >
                    Ver usuários cadastrados
                </button>

            </form>

            <button onClick={() => navigate('/')} >
                Pagina inicial
            </button>

            <MensagemFeedback mensagem={mensagem} tipo={tipoMensagem} visivel={visivel} onclose={fecharMensagem}/>
        </div>
        </>
    )
    
}

export default FormularioCadastro