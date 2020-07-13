import React, {useState, useRef} from 'react'

export const Faq = (props) => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px")
    const [setRotate, setRotateState] = useState("accordion_icon")

    const content = useRef(null)

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight + 25}px`);
    }

    return(
        <>
        <div>
            <div className="item">
                <button className={`accordion ${setActive}`} onClick={toggleAccordion}> 
                    <p className="accordion__title">{props.question}</p>
                </button>
                <div onClick={toggleAccordion} ref={content} style={{ maxHeight: `${setHeight}`}} className="accordion__content" >
                    <div className="accordion__text" dangerouslySetInnerHTML={{__html: props.answer}}  />
                </div>
            </div>
        </div>
        <style jsx>{`
            .item {
                margin: 0.5rem 0;
                
            }

            .accordion {
                width: 100%;
                height: 4vh;
                background: none;
                border: none;
                display: flex;
                align-items: center;
                justify-content: left;
                border-radius: 10px;
                transition: 0.3s;
                cursor: pointer;
            }


            .accordion:hover,
            .active {
                background: #F0F0F0;
            }

            .accordion__title {
                font-family: "arial";
                font-weight: normal;
                font-size: 20px;
                color: black;
                
                
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
                font-family: sans-serif;
                font-size: 20px;
                color: black;
                max-width: 45rem;
                text-align: left;
                padding: 1rem 0 3rem 1rem;
                
            }

            `}</style>
        </>
    )
}