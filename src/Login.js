import React,{useState} from 'react'
import styles from'./Login.css'
import Button from '@mui/material/Button';
import backgroundImage from './Assets/image1.jpg';

const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh',  
    width: '100vw',  
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    boxShadow: '0 0 10px rgb(174, 123, 221)', 
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  
  const labelStyle = {
    textAlign: 'left',
    width: '100%',
    marginBottom: '5px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'rgb(47, 2, 88)',
  };
  
  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid rgb(47, 2, 88);',
    borderRadius: '5px',
    fontSize: '20px',
    marginBottom: '10px',
  };
  
  const submitButtonStyle = {
    width: '100%',
    backgroundColor: 'rgb(47, 2, 88);',
    color: 'rgb(174, 123, 221)',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
  };
  
  const submitButtonHoverStyle = {
    backgroundColor: 'rgb(47, 2, 88);', 
  };  

function Login(props) {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  
  const handleRegisterClick=()=>{
    props.setIsRegister(true);
    props.setIsLogin(false);
  }

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    }
    
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div style={backgroundStyle}>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          name="email"
          value={inputs.email || ''}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle}>Password:</label>
        <input
          type="password"
          name="password"
          value={inputs.password || ''}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="submit"
          value="Login"
          style={{ ...submitButtonStyle, ...submitButtonHoverStyle }}
        />
        <h3>Don't have an account</h3>
        <button onClick={handleRegisterClick}>Register</button>
      </form>
    </div>
  )
}

export default Login;