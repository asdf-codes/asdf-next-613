import React from 'react'
import Newsletter from '../newsletter'

export const Intro = () => {
    return(
        <>

        <div className="center">
            <div className="items">
                <h1 className="dysplay">Ottawa in a <br></br><h1 className="dysplay-bold">Weekely Newsletter</h1> </h1>
                <Newsletter/>
                <div className="flex">
                <p>People  ✔ </p><p>Places   ✔ </p><p>News  ✔ </p> 
                </div>
            </div>
        </div>
            
        
        <style jsx>{`
            
            .flex{
                display:flex;
                justify-content: center;
            }

            .flex p {
                padding: 0.5rem 2rem;
                font-size: 20px;
            }


            
            .items{
                display:flex;
                flex-direction: column;

            }
            

            .center {
                display: grid;
                align-items: center;
                height: 70%;
            }

            .dysplay {
                font-family: EB Garamond;
                font-style: italic;
                font-weight: normal;
                font-size: 68.8184px;
                line-height: 107.5%;
                display: inline;
                /* or 74px */
                text-align: center;
                letter-spacing: -0.02em;
                margin: 0;


            }
            .dysplay-bold {
                display:inline-block;
                font-weight: bold;
                font-family: EB Garamond;
                font-style: italic;
                margin: 0;
                font-size: 68.8184px;
                line-height: 107.5%;
                display:inline;
                /* or 74px */
                text-align: center;
                letter-spacing: -0.02em;
            }   

            
        `}</style>
        </>
    )
}