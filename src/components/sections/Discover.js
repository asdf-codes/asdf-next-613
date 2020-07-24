import React from 'react'

export const Discover = () => {
    return(
        <>

            
            <div className="center">
                <div className="items">
                    <h2> Discover </h2>
                    <div>
                    <img
                        src="/613.gif"
                        
                        
                        />
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

            h2 {
                line-height: 1.0;
                font-family: EB Garamond;
                font-weight: 500;
                
                font-size: 57.6795px;
                line-height: 107.5%;
                display: inline;
                /* or 74px */
                text-align: center;
                letter-spacing: -0.02em;


            }
            img {
                border-radius: 100%;
            }   

            
        `}</style>
        </>
    )
}