import React from 'react'

export const Join = (props) => {
    return(
        <>

        <div className="center">
            <div className="items">
                <h2>The 613 Newsletter </h2>
                <div>
                    {props.children}
                </div>
            </div>
        </div>
            
        
        <style jsx>{`
            

            .center {
                display: grid;
                align-items: center;
                height: 100%;
            }

            .items{
                display:flex;
                flex-direction: column;
            }

            h2 {
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
            
        `}</style>
        </>
    )
}