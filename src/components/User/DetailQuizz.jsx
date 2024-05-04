import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getQuestionByQuizId } from "../../services/apiService";
import _ from "lodash";
import Question from "./Question";

const DetailQuizz = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  const quizTitle = location.state.quizTitle;
  const quizId = params.id;
  const [dataQuiz, setDataQuiz] = useState([]);
  const [index, setIndex] = useState(0);

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

  return (  
    <>
      <div className="flex m-10 gap-8">
        <div className="flex flex-col w-[70%] border">
          <div className="font-bold text-3xl p-4"> Quiz {quizId}: { quizTitle } </div>
          <hr/>
          <Question
            index={index}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
          />
          <div className="flex justify-center items-center gap-2 p-4">
            <button 
              disabled={index === 0}
              className="w-16 px-3 py-2 border bg-slate-500 rounded-lg text-white font-medium hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 disabled:opacity-30 disabled:cursor-not-allowed"
              onClick={() => (setIndex(index - 1))}
            > 
              Pre 
            </button>
            <button 
              disabled={index + 1 === dataQuiz.length}  
              className="w-16 px-3 py-2 border bg-blue-700 rounded-lg text-white font-medium hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:opacity-30 disabled:cursor-not-allowed"
              onClick={() => (setIndex(index + 1))}
            >  
              Next 
            </button>
          </div>
        </div>
        <div className="flex flex-col grow border p-4"></div>
      </div>
    </>
  );
}
 
export default DetailQuizz;