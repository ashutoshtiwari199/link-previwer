import React, {Fragment, useState, useContext, useEffect} from 'react'
import Incardpreview from './Incardpreview';
import { UserContext } from '../App';

function Landingpage() {

    const {setJsondata,link, setLink, setIsLoading,setSearchHistory, isLoading} = useContext(UserContext);

    let apiKey= '300416e2a91ebeb6074e6a0fbaa6049c'


    const handleChange=(e)=>{
        e.preventDefault();
        setLink(e.target.value);
    }

    const previewfn= ()=>{
        setIsLoading(true)
        fetch(`http://api.linkpreview.net/?key=${apiKey}&q=${link}`)
        .then(res=> res.json())
        .then(data=>  {  
        setJsondata(data)
        let a= [];
        if(typeof window !== undefined){
          if(localStorage.getItem('historyArray')){
            a= JSON.parse(localStorage.getItem('historyArray'))
          }
        }
        a.push(data)
        localStorage.setItem('historyArray', JSON.stringify(a))
        setSearchHistory(a);
        setIsLoading(false)
        }
    )
    }
    
  return (
    <div className='form'>
            <input className='input-link' placeholder='Paste url..' onChange={(e)=>{handleChange(e)}} value={link} type="text" />
            <button onClick={previewfn} className='preview-button' >{isLoading ? 'Sending...' :'Preview  Now'}</button>
    </div>
  )
}

export default Landingpage