import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Contact from './components/Contact';
import Error from './components/Error';
import About from './components/About';
import Body from './components/Body';
import RestaurentMenu from './components/RestaurentMenu';

import './App.css';
import Header from'./components/Header';
// import Body from './components/Body';
import {Provider} from "react-redux";
import appStore from './utils/appStore';

import Cart from './components/Cart';
function App() {
  return ( 


<Provider store={appStore}>
    <div className="app">
      <Header/>
      <Outlet/>
      {/* <Body/> */}

    </div>
</Provider>
  
  );
}

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element:<App/>,
      children:[
        {
          path: "/",
          element:<Body/>,
        },
        {
          path: "/about",
          element:<About/>,
        },
        {
          path: "/contact",
          element:<Contact/>,
        }, 
        {
          path: "restaurents/:resId",
          element: <RestaurentMenu/>
        } ,
        {
          path: "/cart",
          element: <Cart/>
        } 
        

      ],
      errorElement:<Error/>
    },
    
   

  ]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {
      <RouterProvider router={appRouter}/>
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
