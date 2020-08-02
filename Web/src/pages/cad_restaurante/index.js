import React, { useState, useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import InputMask from 'react-input-mask';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Logon(){

    const [name, setName ] =useState('teste');
    const [email, setEmail ] =useState('teste@com');
    const [cnpj, setCnpj] =useState('1111');
    const [senha, setSenha ] =useState('1');

    const [latitude, setLatitude] = useState('');
    const [longitude, setlongitude] = useState('');

    const history = useHistory();

	useEffect(()=>{
		navigator.geolocation.getCurrentPosition(
		(position)=>{

			const { latitude, longitude}= position.coords;
			setLatitude(latitude);
			setlongitude(longitude);
		},(err)=>{

		},
		{
			timeout:30000,
		}
		);
	},[]);


    async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            cnpj,
            senha,
            longitude,
            latitude

        };
       try{
            const response = await api.post('restaurantes',data);
        
            alert("Restaurantes criado com sucesso");
            
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
                    
                    <h1> Cadastrar </h1>

                    <p>Faça seu cadastro, entre na plataforma e ajude a encontrarm os casos da sua ONG.</p>

                   <Link className="back-link" to="/tipo"> 
                    
                        <FiArrowLeft size ={ 16 } color="#E02041" /> 
                        Voltar

                    </Link>
                </section>
                <form onSubmit={ handleRegister }>
                    <input 
                        maxLength='25'
                        placeholder="Nome do Restaurante" 
                        required 
                        value={ name } 
                        onChange ={ e => setName(e.target.value)}
                    />
                    <InputMask 
                        mask="99.999.999/9999-99"
                        placeholder="CNPJ" 
                        required 
                        value={ cnpj } 
                        onChange ={ e => setCnpj(e.target.value)}
                    />
                    <input
                        maxLength='50'
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
                    <div className="input-group">
							<input 
                                title="Latitude"
								type="number" 
								name="Latitude" 
								id="Latitude" 
								required 
								value = {latitude} 
								onChange={e => setLatitude(e.target.value)} 
							/>
							<input 
                                title="Longitude" 
                                type="number" 
                                name="Longitude" 
                                id="Longitude" 
                                required 
                                value = {longitude}
                                onChange={e => setlongitude(e.target.value)} 
                            />
						
					</div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}