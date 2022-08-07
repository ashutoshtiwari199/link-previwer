import React, { Fragment, useContext } from 'react'

import { UserContext } from '../App';


const Incardpreview=()=> {

    const {jsonData, setJsondata} =useContext(UserContext);
  return (
    <div className='down-card-preview' >
            <div className="left">
                <img src={jsonData.image}  alt="" />
            </div>
            <div className="right">
                <h6 className="titl">{jsonData.title}</h6>
                <p className="card-bottom-descriptio">{jsonData.description}</p>
            </div>
    </div>
  )
}

export default Incardpreview