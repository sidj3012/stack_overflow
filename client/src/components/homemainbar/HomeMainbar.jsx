import React from 'react'
import './HomeMainbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import QuestionList from './QuestionList'
function HomeMainbar() {
  const user = useSelector((state)=>state.currentuserreducer)
  const location = useLocation();
  const navigate = useNavigate();
  const questionlist = useSelector((state)=>state.questionreducer)
  // console.log(questionlist)
  const checkauth = () => {
    if (user === null) {
      alert("Login or signup to ask a question")
      navigate("/Auth")
    } else {
      navigate("/AskQuestion") 
    }
  }
  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Question</h1>
        ) : (
          <h1>All Question</h1>
        )}
        <button className="ask-btn" onClick={checkauth}>Ask Questions</button>
      </div>
      <div>
        {questionlist.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionlist.data.length} questions</p>
            <QuestionList questionlist={questionlist.data} />
          </>
        )
        }</div>
    </div>
  )
}

export default HomeMainbar