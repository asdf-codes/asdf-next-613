import React from 'react'

export const ChangingText = () => {
    return(
        <div className="wrapper">
            <h1>this is <span></span> news</h1>
        <style jsx>{`
            span:before {
                content: '';
                animation: animate infinite 8s;
            }

            @keyframes animate {
                0%{
                    content: "Your";
                }
                60%{
                    content: "Informative";
                }
                80%{
                    content: "Independent";
                }
            }
        
        `}</style>
        </div>
    )
}