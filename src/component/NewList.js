import React from 'react';
import '../style/NewList.css';
const NewList = ({resource,isLoading}) =>{
    const nytUrl= 'https://www.nytimes.com/';
    const loaderImg1 = 'https://miro.medium.com/max/742/0*b5dmvyf1uHAeNvvm.gif';
    const loaderImg2 = 'https://loading.io/spinners/azure/lg.azure-round-loader.gif';
    const loaderImg3 = 'https://file.mockplus.com/image/2018/04/d938fa8c-09d3-4093-8145-7bb890cf8a76.gif'
    /*const renderList =(resource)=>{
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
    };*/
    

    return(
        <div>
            {isLoading? 
        <div className ='card-columns mt-4'>
            {resource.map( (idx)=>{
            if(idx.multimedia.length>1){// check for emty multimedia array to prevent underfine
                const img =  idx.multimedia[2].url;
                const publishDate= new Date(idx.pub_date);
                const formatted_date = publishDate.getFullYear() + "-" + (publishDate.getMonth() + 1) + "-" + publishDate.getDate();

             return(
                
                <div key={idx._id} className='card bg-light border-light  rounded newsListShadow mb-3' >
                    <a href={idx.web_url} target='_blank'><img  className="card-img-top  rounded"  src={`${nytUrl}${img}`} alt={idx.headline.main}/></a>
                    <div className='card-body'>
                        <h5 className='title'>{idx.headline.main}</h5>
                        <p className='card-text'>{idx.abstract}</p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                            <cite title="Source Title">{idx.byline.original!==null ? idx.byline.original:'No author'}</cite>
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
        :
        <div className='d-flex justify-content-center mt-5 '> 
               <img src={loaderImg3}/>       
        </div> 
        
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
