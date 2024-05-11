import { RiImageAddFill } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { BiSolidMinusCircle } from "react-icons/bi";
import { FaSquarePlus } from "react-icons/fa6";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import _
    from "lodash";
const ManageQuestion = () => {
    const [questions, setQuestions] = useState([
        {
            id: uuidv4(),
            description: "Question 1",
            imageFile: "",
            imageName: "",
            answers: [
                {
                    id: uuidv4(),
                    description: "answer 1",
                    isCorrect: false,
                },
                {
                    id: uuidv4(),
                    description: "answer 2",
                    isCorrect: false,
                },
                {
                    id: uuidv4(),
                    description: "answer 3",
                    isCorrect: false,
                }
            ]
        },
        {
            id: uuidv4(),
            description: "Question 2",
            imageFile: "",
            imageName: "",
            answers: [
                {
                    id: uuidv4(),
                    description: "answer 1",
                    isCorrect: false,
                },
                {
                    id: uuidv4(),
                    description: "answer 2",
                    isCorrect: false,
                },
                {
                    id: uuidv4(),
                    description: "answer 3",
                    isCorrect: false,
                }
            ]
        },
    ]);

    const handleOnChangeQuestion = (event, id) => {
        let cloneQuestions = _.clone(questions);
        cloneQuestions.forEach((question) => {
            if(question.id === id)
                question.description = event.target.value;
        })
        console.log(id);
        setQuestions(cloneQuestions);
    }

    const handleOnChangeAnswer = (event, qid, aid) => {
        let cloneQuestions = _.clone(questions);
        cloneQuestions.forEach(question => {
            if(question.id === qid) {
                question.answers.forEach(answer => {
                    if(answer.id === aid)
                            answer.description = event.target.value;
                })
            }
        });
        setQuestions(cloneQuestions);
    }

    const handleCheckBox = (event, qid, aid) => {
        let cloneQuestion = _.clone(questions);
        cloneQuestion.forEach(question => {
            if(question.id === qid) {
                question.answers.forEach(answer => {
                    if(answer.id === aid) 
                        answer.isCorrect = event.target.checked;
                })
            }
        })
        setQuestions(cloneQuestion);
    }

    const handleQuestion = (type, id) => {
        let cloneQuestions = _.cloneDeep(questions);
        if (type === "add") {
            const newQuestion = {
                id: uuidv4(),
                description: "",
                imageFile: "",
                imageName: "",
                answers: [
                    {
                        id: uuidv4(),
                        description: "",
                        isCorrect: false,
                    },
                ]
            }
            cloneQuestions.push(newQuestion);
            setQuestions(cloneQuestions);
        } else {
            setQuestions(cloneQuestions.filter((question) => {
                return question.id !== id;
            }))
        }
    }

    const handleAnswer = (type, questionId, answerId) => {
        let cloneQuestions = _.cloneDeep(questions);
        if (type == "add") {
            cloneQuestions.forEach((question, index) => {
                if (question.id === questionId) {
                    const newAnswer = {
                        id: uuidv4(),
                        description: ``,
                        isCorrect: false,
                    }
                    cloneQuestions[index].answers.push(newAnswer);
                }
            });
            setQuestions(cloneQuestions);
        } else {
            const questionIndex = cloneQuestions.findIndex((question) => question.id === questionId);
            if (questionIndex != -1)
                cloneQuestions[questionIndex].answers = cloneQuestions[questionIndex].answers.filter((answer) => answer.id !== answerId);
            setQuestions(cloneQuestions);
        }
    }

    return (
        <div className="p-4">
            <div className="">Add questions: </div>
            <div className="flex flex-col gap-6">
                {questions && questions.length > 0 && questions.map((question, index) => {
                    return (
                        <div key={question.id} className="flex flex-col">
                            <div className="flex items-center gap-10">
                                <input
                                    type="text"
                                    className="w-[50%] p-2.5 border border-gray-300 rounded-lg focus:border-blue-300 focus:ring focus:outline-none"
                                    placeholder={`Question ${index + 1}'s description`}
                                    value={question.description}
                                    onChange={(event) => handleOnChangeQuestion(event, question.id)}
                                />
                                <input type="file" id="img" className="hidden" />
                                <label htmlFor="img"> <RiImageAddFill className="h-full text-2xl text-blue-500 cursor-pointer" /> <span> 0 file is uploaded </span></label>
                                <div className="flex gap-2">
                                    <FaSquarePlus
                                        className="text-2xl text-blue-500 cursor-pointer"
                                        onClick={() => handleQuestion("add")}
                                    />
                                    <BiSolidMinusCircle
                                        className="text-2xl text-slate-500 cursor-pointer"
                                        onClick={() => handleQuestion("delete", question.id)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col ml-4 mt-2 gap-2">
                                {question.answers && question.answers.length > 0 && question.answers.map((answer, index) => {
                                    return (
                                        <div key={answer.id} className="flex items-center gap-4">
                                            <input
                                                type="checkbox"
                                                className="h-4 w-4	bg-red-500 cursor-pointer"
                                                checked={answer.isCorrect}
                                                onChange={(event) => handleCheckBox(event, question.id, answer.id)}
                                            />
                                            <input
                                                type="text"
                                                className="w-[50%] p-2.5 border border-gray-300 rounded-lg focus:border-blue-300 focus:ring focus:outline-none"
                                                placeholder="Answer"
                                                value={answer.description}
                                                onChange={(event) => handleOnChangeAnswer(event, question.id, answer.id)}
                                            />
                                            <div className="flex gap-2">
                                                <FaSquarePlus
                                                    className="text-2xl text-blue-500 cursor-pointer"
                                                    onClick={() => handleAnswer("add", question.id)}

                                                />
                                                <BiSolidMinusCircle
                                                    className="text-2xl text-slate-500 cursor-pointer"
                                                    onClick={() => handleAnswer("delete", question.id, answer.id)}
                                                />
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}

export default ManageQuestion;