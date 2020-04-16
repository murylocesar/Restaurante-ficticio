import React, { useState, useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Logon(){

    const [name, setName ] =useState('');
    const [email, setEmail ] =useState('');
    const [whatsapp, setWhatsApp] =useState('');
    const [city, setCity ] =useState('');
    const [uf, setUf ] =useState('');

    const history = useHistory();

    const [latitude, setLatitude] = useState('');
    const [longitude, setlongitude] = useState('');

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
            whatsapp,
            city,
            uf,
        };
       try{
            const response = await api.post('ongs',data);
        
            alert("Seu ID de acesso: "+ response.data.id);
            
            history.push('/');
            
       }catch (err){
            alert('Erro ao cadastrar, tente novamente');
       }   
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be The Hero"/>
                    
                    <h1> Cadastrar </h1>

                    <p>Faça seu cadastro, entre na plataforma e ajude a encontrarm os casos da sua ONG.</p>

                   <Link className="back-link" to="/"> 
                    
                        <FiArrowLeft size ={ 16 } color="#E02041" /> 
                        Voltar para home

                    </Link>
                </section>
                <form onSubmit={ handleRegister }>
                    <input 
                        placeholder="Nome do Restaurante" 
                        required 
                        value={ name } 
                        onChange ={ e => setName(e.target.value)}
                    />
                    <input 
                        placeholder="CNPJ" 
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
                    <div className="input-group">
						<div className="input-block">
							<label htmlFor="techs">Latitude</label>
							<input 
								type="number" 
								name="Latitude" 
								id="Latitude" 
								required 
								value = {latitude} 
								onChange={e => setLatitude(e.target.value)} 
							/>
							</div>
						<div className="input-block">
							<label htmlFor="techs">Longitude</label>
							<input type="number" name="Longitude" id="Longitude" required value = {longitude} onChange={e => setlongitude(e.target.value)} />
							</div>
					</div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}