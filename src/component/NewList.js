import React from 'react';
const NewList = ({resource}) =>{
    const nytUrl= 'https://www.nytimes.com/';
    const renderList =(resource)=>{
            resource.map( (idx)=>{
            if(idx.multimedia.length>0){// check for emty multimedia array to prevent underfine
                const img =  idx.multimedia[1].url;
                console.log('test',idx.multimedia,'pass',img)
             return(
                <div className='card bg-light border-light col-4' style={{width:'18rem'}}>
                        <img  class="card-img-top mt-3"  src={`${nytUrl}${img}`} alt={idx.headline.main}/>
                        <div className='card-body'>
                            <h5 className='title'>{idx.headline.main}</h5>
                        </div>
                       
                </div>
             );
            }
            else
            {
                return null;
            }   
        })
    };
    const test=()=>{
       const text = 'text test';
        return <div>{text}</div>
    }
    return(
        <div className ='row mt-3'>
            {resource.map( (idx)=>{
            if(idx.multimedia.length>0){// check for emty multimedia array to prevent underfine
                const img =  idx.multimedia[1].url;
             return(
                <div key={idx._id} className='card bg-light border-light col-4 m-1' style={{width:'18rem'}}>
                    <img  className="card-img-top mt-3"  src={`${nytUrl}${img}`} alt={idx.headline.main}/>
                    <div className='card-body'>
                        <h5 className='title'>{idx.headline.main}</h5>
                    </div>
                    <h1>test</h1>
                </div>
             );       
            }
            })
            }
        </div>
    )
}
export default NewList;
/**
 *  {resource.length>10 && resource.map(idx=> 

                { 
                if(idx.multimedia[1].url!==undefined){
                    return(
                    <div className='card bg-light border-light col-4' style={{width:'18rem'}}>
                        <img  class="card-img-top mt-3"  src={idx.multimedia[1].url!==undefined?`${nytUrl}${idx.multimedia[1].url}`:null} alt={idx.headline.main}/>
                        <div className='card-body'>
                            <h5 className='title'>{idx.headline.main}</h5>
                        </div>
                    </div>
                )}else{
                    return null;
                }
            })}
 */
//<img  class="card-img-top mt-3"  src={img===undefined? null:`${nytUrl}${img}`} alt={idx.headline.main}/>
