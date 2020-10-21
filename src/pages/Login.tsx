import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import '../styles/pages/login.css';

function Login() {
  return (
    <div id="login-page">
      <h1>SIS</h1>
      <div className="box-form">
        <h2>Sistema de Gestão</h2>
        <div className="form-login">
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="email" />
          <label htmlFor="password">Senha</label>
          <input type="password" name="" id="password" />
          <Link to="/dashboard">
            Fazer Login <FiLogIn size={20} color="#fff" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
