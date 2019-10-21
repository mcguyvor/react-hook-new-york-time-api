import React from 'react';
import './App.css';
import SearhForm from './component/SearchForm';
const  App =()=> {  
  return (
    <div>
        <div className='container'>
            <div ><h1 className='text-center mt-2'>BANGKOK TIME</h1></div>
            <SearhForm />
        </div>
    </div>
  );
}

export default App;
