import { useState } from "react";
import axios from "axios";
import utilStyles from '../styles/utils.module.css'

export default () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };



  return (
    <div >
       <div className="notification"> 
      {state === "ERROR" && (
        <p className="notification-error">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="notification-success"><a className="link" href="mailto:"> Success ♡ Check your email ♡ Maybe in Promotions tab? </a></p>
      )}
      </div>
      <div className="inputDiv">
       
        <input
          className=""
          type="text"
          placeholder="welcome @ 613.news"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        ></input>
        <button
          className={`${
            state === "LOADING" ? "button-loading" : ""
          }`}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          Join
        </button>
        
      </div>
     
      <style jsx>{` 

        label {
          position: absolute;
          left: 1.4rem;
          font-size: 25px; 
          top: 0.5rem;
          cursor: pointer;
          color: #C0C0C0;
          transition: 0.3s;
        }

        .active{
          font-size: 15px;
          color: black
        }

        .link {
          color: #38D09A;
        }

        .button-loading {
            color: black
          }

        .notification {
          text-align: center;
          margin-top: 3rem;
          
          background-color: #white;
          font-size: 18px; 
          font-family: Courier;
          border-radius: 6px;
        }

        .notification-error {
          color: #D03838;
        }

        .notification-success {
          color: #38D09A;
        }
      
        .inputDiv {
          padding-top: 1rem;
          display: flex;
          position: relative;
          justify-content: center;
          padding: 0.4rem;
          min-width: 125px;    
          width:100%;
          font-size: max(20px);      
          text-align: center;
          border: none;
          border-radius: 15px ;  
          border: 1.4px solid #D0D0D0;  
          transition: 0.3s;
        }

        .inputDiv input{
          
          min-width: 125px;    
          width:85%;
          font-size: max(22px);      
          text-align: left;
          border: none;
          border-radius: 15px ;  
          padding-left: 1rem;
          transition: 0.3s;
        }
        .inputDiv input:focus{
          /* border: 1.4px solid #D0D0D0;
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);   
          outline: none;  */
          outline: none;
          font-size: max(22px);  
        }

        input:focus::-moz-placeholder {
              color: black;
              
              padding: 0.1rem;
          }

        .inputDiv input[type=text]{
          
        }
      
        .inputDiv button {
         
          border: none;
          
          border-radius: 15px;
          cursor: pointer;
          padding: 0.5rem;
          min-width: 125px;    
          width: max(25%, 250px);
          font-size:  22px;   
          font-weight: 400;   
          text-align: center;
          transition: 0.3s;
          background: black;
          color: white;
          border: 1.4px solid black; 
        }
      
        .inputDiv button:hover {
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
          background: white;
          color: black;
          border: 1.4px solid #D0D0D0; 
        }

      `}</style>
    </div>
  );
};