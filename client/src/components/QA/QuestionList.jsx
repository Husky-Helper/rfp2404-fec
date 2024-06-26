import React, { useEffect, useState, useRef } from 'react';
import { BASE_URL, API_KEY } from "../../env/config.js";
import axios from 'axios';
import Answer from './Answer.jsx';
import Search from './Search.jsx';
import Question from './Question.jsx';
import AddQuestionModal from './AddQuestionModal.jsx';
const QuestionList = function ({productId}) {
    const [questionLists, setQuestionLists] = useState([]);
    const [searchKey, setsearchKey] = useState('');
    const [showAll, setshowAll] = useState(false);

    const URL = `${BASE_URL}qa/questions/`
    console.log("this is in questionlist", productId)
    useEffect(() => {
        axios.get(URL, {
            headers: { "Authorization": API_KEY },
            params: {
                product_id: productId
            }
        })
            .then(function (response) {
                setQuestionLists(response.data.results);
            })
            .catch(function (err) {
                console.log(err);
            })
    }, [productId]);
    console.log(questionLists)

    const filterQuestion = (searchKey && searchKey.length>= 3) ? questionLists.filter(question => question.question_body.toLowerCase().includes(searchKey.toLowerCase())) : questionLists

    return (
        <div>
            <h3 className='QA_title'>QUESTION & ANSWERS</h3>
            <Search setsearchKey = {setsearchKey} />
            <div className='Question_Body'>
                {filterQuestion.slice(0, showAll ? questionLists.length : 2).map((questionList, id) => (

                    <div key = {id}>
                        <Question  data-testid="test-question" question={questionList.question_body} helpfulness = {questionList.question_helpfulness} id = {questionList.question_id}
                        />
                        <Answer data-testid = "test-answer" id = {questionList.question_id}/>
                    </div>

                )
                )}
            </div>
            <div className='button_layout'>
            {questionLists.length > 2 ? <button className='button1' data-testid="test-button" onClick={()=>{setshowAll(!showAll)}}> {showAll ? 'Collapse answers' : 'MORE ANSWERED QUESTION' }</button> : <></>}
           <AddQuestionModal id={productId}/>
            </div>
        </div>
    )

}

export default QuestionList;