import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// env var refer to .env
const cqtapi = process.env.REACT_APP_CQTAPI;
const userAddr = "0xa79E63e78Eec28741e711f89A672A4C40876Ebf3";
const apiUrl = "https://api.covalenthq.com/";
const chainId = "1"
// receive userAddr's historical txs 
const url = apiUrl+"v1/"+chainId+"/address/"+userAddr+"/transactions_v2/?key="+cqtapi;

async function getapi(url) {
  const response = await fetch(url);
  var responseJSON = await response.json();
  return responseJSON.data;
}

var fetched = getapi(url)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div>
      {console.log(fetched)}
    </div>
    <div>
      {'Address:' + JSON.stringify(fetched)}
    </div>
    <div> 
      VizTxz under development by chienj1 
    </div>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
