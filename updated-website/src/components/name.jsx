import React from 'react'
import Lottie from "lottie-react"
import Typewriter from "typewriter-effect";
import animationData from "../assets/animation_ll6sohn8.json"

export default function name(){
    return(
        <div>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Hi!")
                        .pauseFor(500)
                        .typeString("My name is Ashley Zhao")
                        .start();
                }}
            />
        </div>   
    )
}
