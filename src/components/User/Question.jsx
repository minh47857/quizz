const Question = ({ data, index, handleCheckBox }) => {
    return (
        <div className="p-4">
            <div className="flex h-[200px]">
                {data.image &&
                    <img src={`data:image/png;base64,${data.image}`} alt="" className="h-[200px] m-auto" />
                }
            </div>
            <h1 className="font-medium text-xl mb-2"> Question {index + 1}: {data.questionDescription} </h1>
            <form >
                {data.answers && data.answers.length > 0 &&
                    data.answers.map((answer, index) => {
                        return (
                            <div key={`answer-${index}`} className="mb-1">
                                <input
                                    type="checkbox"
                                    onChange={(e) => handleCheckBox(answer.id, data.questionId, e.target.checked)}
                                    checked={answer.isSelected}
                                    className="w-4 h-4 mr-2 cursor-pointer"
                                />
                                <label> {answer.description} </label>
                            </div>
                        )
                    })
                }
            </form>
        </div>
    );
}

export default Question;