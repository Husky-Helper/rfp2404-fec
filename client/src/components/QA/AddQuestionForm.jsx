import React, { useState,useEffect, useRef } from 'react'
import axios from 'axios';
import { BASE_URL, API_KEY } from "../../env/config.js";

export default function AddQuestionForm(props) {
    const closeForm = props.closeForm;
    const id = props.id;
    const [questionForm, setQuestionForm] = useState({
        body: " ",
        name: " ",
        email: " "
    })
    const URL = `${BASE_URL}qa/questions`;
    const handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setQuestionForm(
            {
                ...questionForm,
                [name]: value,
            }
        )
    }
    let axiosConfig = {
        headers: {
            "Authorization": API_KEY
        }
    };
    console.log(id)
    var postData = {
        "body": questionForm.body,
        "name": questionForm.name,
        "email": questionForm.email,
        "product_id": id
    };

    const SubmitQuestion = (event) => {
        event.preventDefault();
        console.log(questionForm)
        closeForm(false); // Close the modal on successful submission
        axios.post(URL, postData, axiosConfig).then(function (response) {
            alert(response)
        }).catch(function (err) {
            alert(err);
        })

    }
    return (
        <div className="modalForm">

            <div>
                <h2>Ask Your Question</h2>
                <h3>Product Name(passing in variable from Overview)</h3>
                <form className='QuesionForm' onSubmit={SubmitQuestion} aria-required>
                    <label>Your Question</label>
                    <textarea required maxLength="1000" placeholder='Example: jackson11!' name="body" value={questionForm.question} style={{ width: '100%', minHeight: '100px' }} onChange={handleInputChange} ></textarea >
                    <label>Your Nickname</label>
                    <input required type="text" placeholder='nickname' name="name" maxLength="60" onChange={handleInputChange} ></input>
                    <p>For privacy reasons, do not use your full name or email address</p>
                    <label>Your email</label>
                    <input required type='email' placeholder='Why did you like the product or not?' onChange={handleInputChange} name='email' ></input>
                    <p>For authentication reasons, you will not be emailed</p>
                    <button type='submit'>Submit Question</button>
                </form>
            </div>

        </div>
    )
}