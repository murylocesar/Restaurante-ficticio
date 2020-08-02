import React, { useState, useEffect} from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/perfil.png';

export default function Logon(){

    const [name, setName ] =useState('');
    const [email, setEmail ] =useState('');
    const [whatsapp, setWhatsApp] =useState('');
    const [city, setCity ] =useState('');
    const [uf, setUf ] =useState('');

    const history = useHistory();



    return (
        <div className="tipo-container">

            <section className="container">
                  <img src={logoImg} alt ="Heroes" />

                   <div className="tipo">
                    <Link className="button" to="/cliente"> 
                       Eu sou  cliente 
                    </Link> 
                    <Link className="button" to="/restaurante">                     
                       Eu sou  restaurante
                    </Link>
                </div >
                <Link className="back-link" to="/">     
                        <FiArrowLeft size ={ 16 } color="#E02041" /> 
                        Voltar
                </Link>          
            </section>
        </div>
    );
}