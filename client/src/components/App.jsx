import React from "react";
import ProductView from './Overview/ProductView.jsx';
import QuestionList from "./QA/QuestionList.jsx";
import Reviews from "./Reviews/Reviews.jsx";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


const App =() =>{
    return <>
    <ProductView/>
    <QuestionList/>
    <Reviews/>
    </>
}


export default App;