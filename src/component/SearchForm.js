import React from'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import NewList from './NewList';
const SearchForm =()=>{
    const KEY= 'gMMYJjqghQ0KjohYefgicK0XVgL7ySsL';
    const [month,setMonth]= useState(new Date().getMonth()+1); 
    const [year,setYear]= useState(new Date().getFullYear()); 
    const [resource,setResource] = useState([])
    const handleMonthSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.value);
        setMonth(e.target.value);
    }

    const handleYearSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.value);
        setYear(e.target.value);
    }
    let yearArr = [];
    const currentYear = new Date().getFullYear();
    //push year to yearArray
    const yearSet =()=>{ 
        for(let i = currentYear-1;i>1851;i--){// currentYear -1 for currentyear as selected default
            yearArr.push(i);
         //   console.log(yearArr);
        }
    }
    yearSet();// call yearset for creating year list
    useEffect(()=>{
        async function fetchData(){
            const responce =  await axios.get(`https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${KEY}`);            
            setResource(responce.data.response.docs.splice(0,10));// slice api response lists to 10 lists
            console.log(resource);
            } 
        fetchData();
      },[month,year])
    
    return(
            <div>
                <div className=' form-inline d-flex justify-content-center bg-light mt-2 rounded-left rounded-right' >
                    <label className='mr-2'><h4 className='titles'>Select month and year</h4></label>
                    <form onChange={handleMonthSubmit} onSubmit={(e)=>e.preventDefault()}>
                        <select  title ='month'className="custom-select my-1 mr-sm-2 " id="monthselect">
                            <option defaultValue>{month}</option>
                            <option key={1}value="1">1</option>
                            <option key={2}value="2">2</option>
                            <option key={3}value="3">3</option>
                            <option key={4}value="4">4</option>
                            <option key={5}value="5">5</option>
                            <option key={6}value="6">6</option>
                            <option key={7}value="7">7</option>
                            <option key={8}value="8">8</option>
                            <option key={9}value="9">9</option>
                            <option key={10}value="10">10</option>
                            <option key={11}value="11">11</option>
                            <option key={12}value="12">12</option>
                        </select>
                   </form>
                   <form onChange={handleYearSubmit} onSubmit={(e)=>e.preventDefault()}> 
                    <select  title ='year'className="custom-select my-1 mr-sm-2" id="yearselect">
                        <option defaultValue="selected" key={currentYear} value={currentYear}>{currentYear}</option>
                        {yearArr.map((idx)=><option  key={idx}value={idx}>{idx}</option>)}
                    </select>
                    <button className='btn btn-primary' type='submit' >Filter</button>
                   </form>
                  </div>
                <NewList resource={resource}/>
                </div>
                 
        
    );
}
export default SearchForm;