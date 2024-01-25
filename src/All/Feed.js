import React,{useState} from 'react'
import './Feed.css'
import LHS from '../Components/LHS';
import Middle from '../Components/Middle';
import RHS from '../Components/RHS';

const backgroundStyle = { 
    backgroundImage: 'none',
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    margin: 'auto',
    
  };

function Feed(props){
    return (
        <div style={backgroundStyle}>
            <div style={{flex:'1',flexGrow: 0.05,padding: '8%'}}>
                <LHS />
            </div>
            <div style={{flex:'1',flexGrow: 9.9,padding: '8%'}}>
               <Middle />
            </div>
            <div style={{flex:'1',flexGrow: 0.05,padding: '8%'}}>
               <RHS />
            </div>
        </div>
    );
}

export default Feed;