import { useState } from 'react';
import styles from './App.css';
import backgroundImage from './Assets/image3.jpg';
import Login from './Login';
import RegisterPage from './RegisterPage';


function App() {

  const [isLogin,setIsLogin]=useState(false)
  const [isRegister,setIsRegister]=useState(false)

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '100vh',  
    width: '100vw',  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const handleLoginClick=()=>{
    setIsLogin(true);
  }

  const handleRegisterClick=()=>{
    setIsRegister(true);
  }


  return (
    <div className={styles.App} style={backgroundStyle}>
      {!isLogin && !isRegister &&
        <><h1>
        Fantasia Tales!
      </h1>
      <h2>
      <span>Welcome</span> <span>to</span> <span>our</span> <span>creative</span> <span>heaven,</span> <span>a</span> <span>sanctuary</span> <span>for</span> <span>imaginative</span> <span>and</span> <span>passionate</span> <span>writers.</span> <span>Here,</span> <span>we</span> <span>invite</span> <span>you</span> <span>to</span> <span>pour</span> <span>your</span> <span>hearts</span> <span>onto</span> <span>the</span> <span>pages,</span> <span>to</span> <span>weave</span> <span>tales</span> <span>that</span> <span>transcend</span> <span>the</span> <span>ordinary</span> <span>and</span> <span>spark</span> <span>the</span> <span>extraordinary.</span>
      <span>But</span> <span>we're</span> <span>more</span> <span>than</span> <span>just</span> <span>a</span> <span>platform</span> <span>for</span> <span>original</span> <span>stories</span> <span>and</span> <span>comics.</span> <span>We're</span> <span>also</span> <span>guardians</span> <span>of</span> <span>the</span> <span>past,</span> <span>dedicated</span> <span>to</span> <span>breathing</span> <span>life</span> <span>back</span> <span>into</span> <span>the</span> <span>legends</span> <span>and</span> <span>folktales</span> <span>that</span> <span>have</span> <span>been</span> <span>forgotten</span> <span>by</span> <span>time.</span> <span>Join</span> <span>us</span> <span>in</span> <span>the</span> <span>noble</span> <span>endeavor</span> <span>of</span> <span>sharing</span> <span>these</span> <span>timeless</span> <span>narratives</span> <span>with</span> <span>others,</span> <span>keeping</span> <span>them</span>
      <span>alive</span> <span>alongside</span> <span>your</span> <span>own</span> <span>creative</span> <span>masterpieces.</span>

      </h2>
      <button onClick={handleLoginClick}>Login</button>?<button onClick={handleRegisterClick}>Register</button></>
      }
      
      {isLogin && <Login isLogin={isLogin} isRegister={isRegister} setIsLogin={setIsLogin} setIsRegister={setIsRegister} />}
      {isRegister && <RegisterPage isLogin={isLogin} isRegister={isRegister} setIsLogin={setIsLogin} setIsRegister={setIsRegister} />}
      
    </div>
  );
}

export default App;
