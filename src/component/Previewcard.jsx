import React, {useState, useContext, useEffect} from 'react'
import { UserContext } from '../App'

const Previewcard=()=> {

    const {searchHistory, setSearchHistory} = useContext(UserContext);

    useEffect(()=>{
      if(typeof window !== undefined){
        if(localStorage.getItem('historyArray')){
          setSearchHistory(JSON.parse(localStorage.getItem('historyArray')))
        }
      }      
      console.log(searchHistory.reverse().map(i=>console.log(i)))
    },[])

  return (
    <div className='card-body' > 
       {searchHistory && [...searchHistory].reverse().map((item,index)=>{
        return( <div className="card" key={index+item}>
         <h3 className="card-header" key={index+item} >{item.title.substring(0,20)} <span><a key={index} href={item.url}>Go to the link</a></span> </h3>
             <img src={item.image} className='card-image' alt="thumbnail" />
             <p className="description">{item.description.substring(0,124)}...</p>
         </div>)
       })}        
    </div>
  )
}

export default Previewcard