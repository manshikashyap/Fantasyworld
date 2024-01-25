import React,{useState} from 'react'
import MyCard from './Card';
function Middle(props){
    const handleSearch = (query) => {
        // Implement your search logic here
        console.log('Searching for:', query);
        // You can use the query to fetch data, update state, etc.
      };
    return (
        <div>
            <SearchBar style={{marginTop:'0px'}} onSearch={handleSearch} />
            <MyCard />
        </div>
    );
}

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSearchClick = () => {
      // Pass the search query to the parent component or perform the search logic here
      onSearch(searchQuery);
    };
  
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          style={{ padding: '5px', marginRight: '8px',marginTop:0 ,borderRadius:'4px',width:'200%',marginBottom:'100px' }}
        />
        <button onClick={handleSearchClick} style={{ padding: '10px', marginTop:0,marginBottom:'100px' }}>
          Search
        </button>
      </div>
    );
  };
export default Middle;