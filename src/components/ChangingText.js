import React from 'react'

export const ChangingText = () => {
    return(
        <div className="wrapper">
            <h1><span></span></h1>
            <p className="sellingPoint"> "We send you a newsletter once a week. No spam. No advertizing. No bull💩."</p>
        <style jsx>{`
        
            .sellingPoint {
                font-style: italic;
            }

            span:before {
                content: '';
                animation: animate infinite 3s;
            }

            @keyframes animate {
                0%, 100%{
                    content: "Independent";
                }
                25%{
                    content: "Local";
                }
                75%{
                    content: "News";
                }
            }     
        `}</style>
        </div>
    )
}