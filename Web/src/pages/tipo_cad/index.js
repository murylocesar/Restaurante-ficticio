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



    return (
        <div className="tipo-container">
        
            <div className="content">
            
                <div className="input-block">
                    <label className="text">Quem eu sou ?</label>
                    
                    <Link className="back-link" to="/register"> 
                        
                        Cliente 

                    </Link> 
                    
                    <Link className="back-link" to="/register"> 
                    
                        
                        Restaurante

                    </Link>
                </div>
            </div>
        </div>
    );
}