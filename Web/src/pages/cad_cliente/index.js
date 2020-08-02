import React, { useState, useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Logon(){

    const [name, setName ] =useState('');
    const [email, setEmail ] =useState('');
    const [senha, setSenha] =useState('');

    const history = useHistory();


    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            senha
        };
       try{
            const response = await api.post('/usuario',data);
        
            alert("Usuário cadastrado com sucesso");
            
            history.push('/');
            
       }catch (err){
           alert(err.response.data);
       }   
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be The Hero"/>
                    
                    <h1>Prezados</h1>

                    <p>Faça seu cadastro, para ter acesso ao cardápio exclusivo das pizzarias cadastrada no sistema.</p>

                   <Link className="back-link" to="/tipo"> 
                    
                        <FiArrowLeft size ={ 16 } color="#E02041" /> 
                        Voltar

                    </Link>
                </section>
                <form onSubmit={ handleRegister }>
                    <input 
                        placeholder="Nome" 
                        required 
                        value={ name } 
                        onChange ={ e => setName(e.target.value)}
                    />
                    <input 
                        type="email" placeholder="E-mail"
                        required 
                        value={ email } 
                        onChange ={ e => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" placeholder="Senha"
                        required 
                        value={ senha } 
                        onChange ={ e => setSenha(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}