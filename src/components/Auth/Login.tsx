import React, { useState } from 'react';
import './Auth.css';

interface LoginProps {
  onSwitchToRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitchToRegister }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log('Login:', email, password);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <div className="auth-options">
      <button onClick={onSwitchToRegister}>Registrar</button> 
        <span>Esqueceu sua senha?</span>
      </div>
    </div>
  );
};

export default Login;
