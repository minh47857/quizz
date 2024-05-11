import { useEffect } from "react";
import { useState } from "react";
import { getQuizzByParticipant } from "../../services/apiService";
import { useNavigate } from "react-router-dom";

const ListQuizz = () => {
    const [arrQuizz, setArrQuizz] = useState([]);
    const navigate = useNavigate();

    const getArrQuizz = async () => {
        const res = await getQuizzByParticipant();
        if (res && res.EC === 0) {
            setArrQuizz(res.DT);
        }
    }

    useEffect(() => {
        getArrQuizz();
    }, [])
    console.log(arrQuizz);
    return (
        <>
            <div className="flex gap-8 px-20">
                {arrQuizz && arrQuizz.length > 0 ?
                    arrQuizz.map((quizz, index) => {
                        return (
                            <div key={`${index}-quizz`} className="w-64 flex flex-col border bg-white border-gray-200 rounded-lg shadow">
                                <img src={`data:image/png;base64,${quizz.image}`} alt="" />
                                <div className="p-5">
                                    <p className="font-bold text-xl"> Quizz {quizz.id} </p>
                                    <p className="my-2"> {quizz.description} </p>
                                    <button
                                        className="px-3 py-2 border bg-blue-700 rounded-lg text-white font-medium hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                                        onClick={() => { navigate(`/quiz/${quizz.id}`, { state: { quizTitle: quizz.description } }) }}
                                    >
                                        Start Now
                                    </button>
                                </div>
                            </div>
                        )
                    })
                    : <p>You don't have any Quizz</p>
                }
            </div>
        </>
    );
}

export default ListQuizz;