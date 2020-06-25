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
    <div className="flex flex-col items-center w-full p-8 border-gray-500 border-solid border rounded-sm mt-8">
       <div className="notification"> 
      {state === "ERROR" && (
        <p className="notification-error">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="notification-success">Success ♡ Check your email ♡ Maybe in Promotions tab?</p>
      )}
      </div>
      <div className="inputDiv">
        <input
          className=""
          type="text"
          placeholder="welcome @ 613.news"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        <p className={utilStyles.pp}>For those who ♡ Ottawa and want to make it a better place for everyone</p>
      </div>
     
      <style jsx>{` 

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
          flex-direction: column;
          justify-content: center;
        }

        .inputDiv input{
          padding: 0.5rem;
          min-width: 125px;    
          width:100%;
          font-size: max(22px);      
          text-align: center;
          border: none;
          border-radius: 6px;  
          border: 2.1px solid #D0D0D0;      
        }
        .inputDiv input:focus{
          
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);    
        }

        .inputDiv input:focus{
          outline: none;
          
         
        }

        .inputDiv input[type=text]{
          
        }
      
        .inputDiv button {
          margin-top: 1rem;
          border: none;
          
          border-radius: 6px;
          cursor: pointer;
          padding: 0.5rem;
          min-width: 125px;    
          width: max(100%, 250px);
          font-size:  22px;   
          font-weight: 400;   
          text-align: center;
          transition: 0.3s;
        }
      
        .inputDiv button:hover {
          box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
          color: black;
        }

      `}</style>
    </div>
  );
};