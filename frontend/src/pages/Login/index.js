import React, {useState} from 'react';
import api from '../../services/api';

const Login = () => {
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/sessions', {email});

    const {_id} = response.data;
    localStorage.setItem('user', _id);
  }

  return (
    <div className="content">
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input 
          id="email"
          type="email"
          placeholder="Se melhor e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button className="btn" type="submit">Entrar</button>
      </form>
    </div>    
  )
};

export default Login;
