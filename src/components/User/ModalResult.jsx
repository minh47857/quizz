import { IoIosClose } from "react-icons/io";

const ModalResult = ({ isOpenResult, setIsOpenResult, result }) => {

  return (  
    isOpenResult && 
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 shadow-md">
        <div className="w-full max-w-[25rem] max-h-full rounded-lg bg-white shadow">
          <div className="flex p-5 border-b">
            <p className="text-2xl font-semibold">Your Result</p>
            <IoIosClose
              className="ml-auto text-3xl text-gray-400 cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded"
              onClick={() => setIsOpenResult(false)}
            />
          </div>
          <div className="flex flex-col p-5">
            <div className="">Total Correct Answers: <b>{result.countCorrect}</b></div>
            <div className="">Total Questions: <b>{result.countTotal}</b></div>
          </div>
          <div className="flex justify-end p-5 border-t">
            {/* <button className="w-[6rem] px-5 py-2.5 rounded-lg border bg-slate-400 hover:bg-slate-500 text-white  font-medium" onClick={() => setIsOpenResult(false)}> Cancel </button> */}
            <button className="ml-2 w-[6rem] px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800  text-white font-medium" onClick={() => setIsOpenResult(false)}> Close </button>
          </div>
        </div>
      </div>
  );
}
 
export default ModalResult;