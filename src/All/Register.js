import React,{useState} from 'react'
import backgroundImage from './Assets/image1.jpg';
import Feed from './Feed';

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
  marginLeft: '5%'
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

function Register(props) {
  const [inputs, setInputs] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [showOptions, setShowOptions] = useState({});

  const tableData = [
    { id: 'genre', name: 'Genre', options: ['Thriller', 'Romcom', 'Fantasy','Periodic', 'Sci-fi', 'SuperNatural', 'Melodrama', 'Crime', 'Comedy', 'Acton', 'Others'] },
    { id: 'interests', name: 'More interested in', options: ['Reading', 'Writing'] },
    { id: 'language', name: 'Language', options: ['English', 'Hindi', 'French', 'Spanish', 'Korean', 'Japanese', 'Others'] },
    // Add more data as needed
  ];
  

  const [selectedCategory, setSelectedCategory] = useState({});

  const handleCategoryChange = (itemId, selectedValue) => {
    // Update the selected category for the corresponding item
    setSelectedCategory((prevSelected) => ({ ...prevSelected, [itemId]: selectedValue }));
  };
  
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
    setIsLoggedIn(true);
  }

  return (
      <>
      {isLoggedIn ? <Feed /> : (
        <div style={backgroundStyle}>
        <form onSubmit={handleSubmit} style={formStyle}>
      <label style={labelStyle}>First Name:</label>
        <input
          type="text"
          name="firstname"
          value={inputs.firstname || ''}
          onChange={handleChange}
          placeholder="first name..."
          style={inputStyle}
        />

      <label style={labelStyle}>Last Name:</label>
        <input
          type="text"
          name="lastname"
          value={inputs.lastname || ''}
          onChange={handleChange}
          placeholder="last name..."
          style={inputStyle}
        />

      <label style={labelStyle}>UserName:</label>
        <input
          type="text"
          name="username"
          value={inputs.username || ''}
          onChange={handleChange}
          placeholder="username..."
          style={inputStyle}
        />

        <label style={labelStyle}>Email:</label>
        <input
          type="email"
          name="email"
          value={inputs.email || ''}
          onChange={handleChange}
          placeholder="email address..."
          style={inputStyle}
        />

        <label style={labelStyle}>Password:</label>
        <input
          type="password"
          name="password"
          value={inputs.password || ''}
          onChange={handleChange}
          placeholder="password..."
          style={inputStyle}
        />

        <input
          type="submit"
          value="Submit"
          style={{ ...submitButtonStyle, ...submitButtonHoverStyle }}
        />
        <h3>Already have an account</h3>
        <button onClick={handleLoginClick}>Login</button>
      </form>

      <table style={{marginLeft: '10%'}}>
      <thead>
        <tr>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {tableData.map((item) => (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>
          <Dropdown
            itemId={item.id}
            options={item.options}
            value={selectedCategory[item.id] || ''}
            onChange={handleCategoryChange}
          />
        </td>
      </tr>
    ))}

      </tbody>
    </table>
         </div>
      )}
   </>
  )
}

const Dropdown = ({ itemId, options, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(itemId, e.target.value)} style={{ cursor: 'pointer', padding: '6px' , borderRadius:'4px'}}>
      <option value="" style={{borderRadius:'4px'}}><h3>Select Category</h3></option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Register;

