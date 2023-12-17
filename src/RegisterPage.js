import React from 'react';
import Register from './Register';
import RegisterDropDown from './RegisterDropDown';
import backgroundImage from './Assets/image1.jpg';

const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh',  
    width: '100vw',  
    display: 'flex',
    flexDirection: 'column',
    flexFlow: 'column-wrap',
    alignContent: 'flex-start',
    margin: 'auto',
    boxShadow: '0 0 10px rgb(174, 123, 221)', 
  };

const RegisterPage = (props) => {
  return (
    <div style={backgroundStyle}>
        <Register style={{flex:3 , marginLeft:'5%'}}
          isLogin={props.isLogin}
          isRegister={props.isRegister}
          setIsLogin={props.setIsLogin}
          setIsRegister={props.setIsRegister}
        />
        <RegisterDropDown style={{flex:3}} />
    </div>
  );
};

export default RegisterPage;
