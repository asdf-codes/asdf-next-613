import React from 'react'


export const Stat = () => {
    return(
        <>
        <div className="center">
                <div className="items">
                    <div className="title">
                        <h2> You wish you knew  </h2> 
                    </div>
                    <div className="center">
                        <img src="/hug.png" />
                    </div>
                    <div className="width">
                    `<h3> Ottawa holds the world record for the largest HUG - 10554 people</h3>`
                    </div>
                </div>    
            </div>

        <style jsx>{`
            
            .center {
                display: grid;
                align-items: center;
                height: 100%;
                justify-items: center;
            }


            .items{
                display:flex;
                flex-direction: column;
                

            }

            .title {
                padding: 2rem;
            }

            h2 {
                line-height: 1.0;
                font-family: Recoleta, EB Garamond, Serif;                
                font-weight: 500;
                font-size: 57.6795px;
                line-height: 107.5%;
                margin: 0;
                display: inline;
                /* or 74px */
                text-align: center;
                letter-spacing: -0.02em;
          }

            .width {
                max-width: 480px;
                margin: 0 auto;
            }

            h3 {
                font-family: Recoleta, EB Garamond, Serif;
                font-style: normal;
                font-weight: 400;
                font-size: 22px;
                line-height: 107.5%;

                /* or 24px */
                text-align: center;
                letter-spacing: -0.02em;
                text-transform: capitalize;

            }
            .emoji{
                display: absolute;
                top: 5px;
            }
            img {
                max-width: 480px;
                

            }   

            
        `}</style>
        </>
    )
}