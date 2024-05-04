const Question = ({ data, index }) => {
  console.log(data);
  return (
    <div className="p-4">
      <h1 className="font-medium text-xl"> Question {index + 1}: {data.questionDescription} </h1>
      <form >
        {data.answers && data.answers.length > 0 &&
          data.answers.map((answer, index) => {
            return (
              <div key={`answer-${index}`}>
                <input type="checkbox" id="ques"/>
                <label htmlFor="ques"> {answer.description} </label>
              </div>
            )
          })
        }
      </form>
    </div>
  );
}

export default Question;