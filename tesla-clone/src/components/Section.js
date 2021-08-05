import React from 'react'
//  import { Component } from 'react'
import './section.css'
import down from './down-arrow.svg'
import Fade from 'react-reveal/Fade';

function Section({title, bg, description, lb, rb}) {
//    var back=`./../images/${bg}`;
    return (
        <div  
         style={{backgroundImage:`url(${bg})`}}
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat'
    
         className="wrap">
             <Fade bottom>
            <div className="itemtext">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            </Fade>
            <div className="bottom">
                <Fade bottom>
            <div className="buttongroupe">
                <div className="l-button">{lb}</div>
                {rb && <div className="r-button">{rb}</div>} 
                {/* pour dire si on a pas rb on met qu'un boutton et sera centrer */}
                
            </div></Fade>
            <div className="down">
                <img src={down} />
                </div>
               </div>

                
        </div>
    )
}

export default Section

 
