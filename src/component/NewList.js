import React from 'react';
import '../style/NewList.css';
const NewList = ({resource}) =>{
    const nytUrl= 'https://www.nytimes.com/';
    const renderList =(resource)=>{
            resource.map( (idx)=>{
            if(idx.multimedia.length>0){// check for emty multimedia array to prevent underfine
                const img =  idx.multimedia[3].url;
                console.log('test',idx.multimedia,'pass',img)
             return(
                <div className='card bg-light border-light col-4' style={{width:'18rem'}}>
                        <img  class="card-img-top mt-3"  src={`${nytUrl}${img}`} alt={idx.headline.main}/>
                        <div className='card-body'>
                            <h5 className='title'>{idx.headline.main}</h5>
                            <p className='card-text' style={{fontStyle:'italic'}}>{idx.abstract}</p>
                            <p>test</p>
                        </div>
                       
                </div>
             );
            }
            else
            {
                return <h1>Data not support</h1>;
            }   
        })
    };
    const test=()=>{
       const text = 'text test';
        return <div>{text}</div>
    }
    return(
        <div className ='card-columns mt-4'>
            {resource.map( (idx)=>{
            if(idx.multimedia.length>0){// check for emty multimedia array to prevent underfine
                const img =  idx.multimedia[1].url;
                const publishDate= new Date(idx.pub_date);
                const formatted_date = publishDate.getFullYear() + "-" + (publishDate.getMonth() + 1) + "-" + publishDate.getDate();

             return(
                
                <div key={idx._id} className='card bg-light border-light  rounded newsListShadow' style={{width:'100%'}}>
                    <img  className="card-img-top  rounded"  src={`${nytUrl}${img}`} alt={idx.headline.main}/>
                    <div className='card-body'>
                        <h5 className='title'>{idx.headline.main}</h5>
                        <p className='card-text'>{idx.abstract}</p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            <cite title="Source Title">{idx.byline.original}</cite>
                            </small>
                        </footer>
                        <p className="card-text"><small class="text-muted">Last updated {formatted_date}</small></p>
                        <a href={idx.web_url} target='_blank' className="btn btn-primary buttonShadow">Go to full article</a>
                    </div>
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
