import React from 'react'
import Question from './Question'
function QuestionList({questionlist}) {
  // console.log(questionlist)
  return (
    <>
    {questionlist.map((question)=>(
      <Question question={question} key ={question._id}/>
    ))}
    </>
  )
}

export default QuestionList