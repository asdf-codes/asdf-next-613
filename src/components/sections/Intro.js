import React from 'react'
import Newsletter from '../newsletter'

export const Intro = () => {
    return(
        <>

        <div className="center">
            <div className="items">
                <h1 className="dysplay">Ottawa in a <br></br><h1 className="dysplay-bold">Weekly Newsletter</h1> </h1>
                <p >For Those Who 💌 Ottawa And Want to Make It A Better Place For 👥 </p>
                <Newsletter/>
                <div className="flex">
                <p>People  ✔ </p><p>Places   ✔ </p><p>News  ✔ </p> 
                </div>
            </div>
        </div>
            
        
        <style jsx>{`

            p {
            color: grey;
            font-size: 18px;
            margin: 0.5 0rem;
            font-weight: normal;
            }

            
            .flex{
                display:flex;
                justify-content: center;
            }

            .flex p {
                padding: 0.5rem 2rem;
                font-size: 20px;
                color: black;
            }


            
            .items{
                display:flex;
                flex-direction: column;

            }
            

            .center {
                display: grid;
                align-items: center;
                height: 100%%;
            }

            .dysplay {
                font-family: Recoleta;
                font-weight: normal;
                font-size: min(15vw, 72px);
                line-height: 107.5%;
                display: inline;
                /* or 74px */
                text-align: center;
                letter-spacing: -0.02em;
                margin: 0;


            }
            .dysplay-bold {
                display:inline-block;
                font-weight: 600;
                font-family: Recoleta;
                margin: 0;
                font-size: min(15vw, 72px);
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