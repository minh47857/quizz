import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getQuestionByQuizId, submitAnswer } from "../../services/apiService";
import _ from "lodash";
import Question from "./Question";
import ModalResult from "./ModalResult";

const DetailQuizz = () => {
  const params = useParams();
  const location = useLocation();
  const quizTitle = location.state.quizTitle;
  const quizId = params.id;
  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [isOpenResult, setIsOpenResult] = useState(false);
  const [result, setResult] = useState();

  const handleCheckBox = (aId, qId, isSelected) => {
    let cloneDataQuiz = _.cloneDeep(dataQuiz);
    cloneDataQuiz.filter((question) => {
      if(+question.questionId === +qId) {
        question.answers.filter((answer) => {
          if(+answer.id === +aId) {
            answer.isSelected = isSelected;
          }
          return answer;
        })
      }
      return question;
    })
    setDataQuiz(cloneDataQuiz);
  }

  const handleSubmitAnswer = async () => {
    let payload = {
      quizId: +quizId,
      answers: []
    }
    let answers = [];
    dataQuiz.forEach((question) => {
      let userAnswerId = [];
      question.answers.forEach(answer => {
        if(answer.isSelected)
          userAnswerId.push(answer.id)
      })
      answers.push({
        questionId: +question.questionId,
        userAnswerId
      })
    })
    payload.answers = answers;
    const res = await submitAnswer(payload);
    if(res && res.EC === 0) {
      setResult(res.DT);
      setIsOpenResult(true);
    }
  }

  const fetchQuestion = async () => {
    const res = await getQuestionByQuizId(quizId);
    const raw = res.DT;
    const data = _.chain(raw)
                  .groupBy("id")
                  .map((value, key) => {
                    let answers = [], questionDescription = null, image = null;
                    value.forEach((item, index) => {
                      if(index === 0) {
                        questionDescription = item.description;
                        image = item.image;
                      }
                      let newItem = item.answers;
                      newItem.isSelected = false;
                      answers.push(item.answers);
                    })
                    return {
                      questionId: key,
                      answers,
                      questionDescription,
                      image
                    }
                  })
                  .value();
    setDataQuiz(data);
  }

  useEffect(() => {
    fetchQuestion();
  }, [quizId])
  
  console.log(dataQuiz);

  return (  
    <>
      <div className="flex m-10 gap-8">
        <div className="flex flex-col w-[70%] border rounded">
          <div className="font-bold text-3xl p-4"> Quiz {quizId}: { quizTitle } </div>
          <hr/>
          <Question
            index={index}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
            handleCheckBox={handleCheckBox}
          />
          <div className="flex justify-center items-center gap-2 p-4">
            <button 
              disabled={index === 0}
              className="w-16 px-3 py-2 border bg-slate-500 rounded-lg text-white font-medium hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 disabled:opacity-30 disabled:cursor-not-allowed"
              onClick={() => setIndex(index - 1)}
            > 
              Prev 
            </button>
            <button 
              disabled={index + 1 === dataQuiz.length}  
              className="w-16 px-3 py-2 border bg-blue-700 rounded-lg text-white font-medium hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:opacity-30 disabled:cursor-not-allowed"
              onClick={() => setIndex(index + 1)}
            >  
              Next 
            </button>
            <button 
              className="w-16 px-3 py-2 border bg-red-500 rounded-lg text-white font-medium hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300"
              onClick={handleSubmitAnswer}
            >  
              Finish 
            </button>
          </div>
        </div>
        <div className="flex flex-col grow border p-4 rounded"></div>
      </div>
      <ModalResult
        isOpenResult={isOpenResult}
        setIsOpenResult={setIsOpenResult}
        result={result}
      />
    </>
  );
}
 
export default DetailQuizz;