import React, { useState }  from 'react';
import { Link, useHistory} from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


import logoImg from '../../assets/perfil.png';

export default function Logon(){

    const [email, setEmail ] = useState('murylocesar2014@gmail.com');
    const [senha, setSenha ] = useState('12345');

    const history = useHistory();

    async function handleLogin(e){
    
        e.preventDefault();

        const data = { email, senha  }

       try{
            const response = await api.post('/usuario/auth', data);

            //localStorage.setItem('jwt',response.msg[]);

            console.log(response.data);
            history.push('/profile');
            
       }catch (err){
            alert(err.response.data);
       }   
    }


    return (
        <div className="logon-container">
            <section className="content">
            
                <img src={logoImg} alt ="Heroes" />
            
                <form onSubmit={handleLogin}>

                    <input  className="email"
                        type="email"
                        placeholder="Digite seu e-mail" 
                        required 
                        value={ email } 
                        onChange ={ e => setEmail(e.target.value)}
                    />
                    
                    <input className="password"
                        type="password"
                        placeholder="Digite sua senha" 
                        required 
                        value={ senha } 
                        onChange ={ e => setSenha(e.target.value)}
                    />

                    <button  className="button" type="submit">Entrar </button>
                    
                    <Link className="back-link" to="/tipo"> 
                    
                        <FiLogIn size ={ 16 } color="#E02041" /> 
                        
                        Não tenho cadastro 

                    </Link>

                </form> 
            </section>
            
        </div>
    )
}
