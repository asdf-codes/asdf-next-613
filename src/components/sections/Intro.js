import React from 'react'
import Newsletter from '../newsletter'

export const Intro = () => {
    return(
        <>

        <div className="center">
            <div className="items">
                <div className="text">
                <h1 className="dysplay">Ottawa in a <br></br><h1 className="dysplay-bold">Weekly Newsletter</h1> </h1>
                </div>
                <Newsletter/>
                <div className="flex">
                <p >For Those Who 💌 Ottawa And Want to Make It A Better Place For 👥 </p>
                {/* <p>People  ✔ </p><p>Places   ✔ </p><p>News  ✔ </p>  */}
                </div>
            </div>
        </div>
            
        
        <style jsx>{`

            .text {
                padding-bottom: 2rem;
            }

            

            
            .flex{
                display:flex;
                justify-content: center;
            }

            .flex p {
                padding: 0.5rem 0;
                font-size: 25px;
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
                font-family: "Recoleta", EB Garamond, Serif;;
                font-weight: normal;
                font-size: min(20vw, 72px);
                line-height: 90%;
                display: inline;
                /* or 74px */
                text-align: center;
                letter-spacing: -0.02em;
                margin: 0;


            }
            .dysplay-bold {
                display:inline-block;
                font-weight: 600;
                font-family: Recoleta, EB Garamond, Serif;
                margin: 0;
                font-size: min(40vw, 100px);
                line-height: 90.5%;
                display:inline;
                /* or 74px */
                text-align: right;
                letter-spacing: ;
            }   

            
        `}</style>
        </>
    )
}