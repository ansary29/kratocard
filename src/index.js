import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// useEffect(() => {
//   const url = "https://fakestoreapi.com/products/category/jewelery";

//   const fetchData = async () => {
//     try {
//       const response = await fetch(url);
//       const json = await response.json();
//       console.log(json.slip.jewelery);
//       setJewelery(json.slip.jewelery);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   fetchData();
// }, []);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

