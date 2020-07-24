import React from 'react'


export const News = () => {
    return(
        <>
        <div className="center">
                <div className="items">
                    <div className="title">
                        <h2> Stay in the  </h2> <h2 className="emoji"> ➰</h2>
                    </div>
                    <div className="center">
                        <img src="/New.png" />
                    </div>
                    <div className="width">
                        <h3> Ottawa getting ahead of Toronto in the Post-Pandemic reopening race 2020 </h3>
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
                font-family: EB Garamond;                
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
            }

            h3 {
                font-family: EB Garamond;
                font-style: normal;
                font-weight: 500;
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