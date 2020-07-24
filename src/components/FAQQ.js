import React, {useState, useRef} from 'react'

export const Q = (props) => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px")
    const [setRotate, setRotateState] = useState("accordion_icon")

    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight + 20}px`);
    }

    return(
        <>
        <div>
            <div className="item">
                <button className={`accordion ${setActive}`} onClick={toggleAccordion}> 
                    <p className="accordion__title">{props.icon}</p>
                    <p className="accordion__title">{props.question}</p>
                </button>
                <div onClick={toggleAccordion} ref={content} style={{ maxHeight: `${setHeight}`}} className="accordion__content" >
                    <div className="accordion__text" dangerouslySetInnerHTML={{__html: props.answer}}  />
                </div>
            </div>
        </div>
        <style jsx>{`
            p {
                line-height: 0;
            }

            .item {
                margin: 0.5rem 0;
                
            }

            .accordion {
                width: 100%;
                padding: 0.3rem;
                background: none;
                border: none;
                display: flex;
                align-items: center;
                justify-content: left;
                border-radius: 10px;
                transition: 0.3s;
                cursor: pointer;
                border: 1.4px solid #D0D0D0;
                
            }


            .accordion:hover,
            .active {
                background: #F0F0F0;
            }

            .accordion__title {
                font-family: Recoleta, EB Garamond, Serif;
                font-weight: 400;
                font-size: 22px;
                color: black;
                font-weight: ;
                padding-left: 1rem;
                
                
            }

            .accordion__content {
                background: ;
                overflow: hidden;
                transition: max-height 0.6s ease;
                max-height: 0;
                display: flex;
                justify-content: left;
                
                 
            }

            .accordion__text {
                font-family: Recoleta, EB Garamond, Serif;;
                font-size: 20px;
                color: black;
                max-width: 45rem;
                text-align: left;
                padding: 1rem 1rem 1rem 1rem;
                
            }

            `}</style>
        </>
    )
}