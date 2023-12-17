import React,{useState} from 'react'

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5%',
    marginTop: '5%',
  };
  
  const labelStyle = {
    textAlign: 'left',
    width: '20%',
    marginBottom: '5px',
    fontSize: '17px',
    fontWeight: 'bold',
    color: 'rgb(47, 2, 88)',
  };
  
  const inputStyle = {
    width: '10%',
    padding: '20px',
    border: '1px solid rgb(47, 2, 88);',
    borderRadius: '5px',
    fontSize: '17px',
    marginBottom: '10px',
  };
  
  const submitButtonStyle = {
    width: '20%',
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

  const login ={
    width: '5%',
  };

function Register(props) {
  const [inputs, setInputs] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  
  const handleLoginClick=()=>{
    props.setIsRegister(false);
    props.setIsLogin(true);
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
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>

      <label style={labelStyle}>First Name:</label>
        <input
          type="text"
          name="firstname"
          value={inputs.firstname || ''}
          onChange={handleChange}
          style={inputStyle}
        />

      <label style={labelStyle}>Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={inputs.lastname || ''}
          onChange={handleChange}
          style={inputStyle}
        />

      <label style={labelStyle}>UserName:</label>
        <input
          type="text"
          name="username"
          value={inputs.username || ''}
          onChange={handleChange}
          style={inputStyle}
        />

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
          value="Submit"
          style={{ ...submitButtonStyle, ...submitButtonHoverStyle }}
        />
        <h3>Already have an account</h3>
        <button style={login} onClick={handleLoginClick}>Login</button>
      </form>
    </div>
  )
}

export default Register;

