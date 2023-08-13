import React from 'react'
import Typewriter from "typewriter-effect";
import "../styles/Name.css"

export default function name(){
    return(
        <div className = "page1">
            <h1>Howdy! <span className = "wave">👋</span></h1>
            <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                        .typeString(" I'm Ashley Zhao")
                        .start();
                }}
            />
        </div>   
    )
}
