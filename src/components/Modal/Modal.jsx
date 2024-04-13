import { useEffect, useRef } from "react";
import { IoIosClose } from "react-icons/io";

const Modal = ({ isOpenModal, setIsOpenModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpenModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpenModal]);

  return (
    isOpenModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 shadow-md">
        <div className="w-full max-w-5xl max-h-full rounded-lg shadow bg-white" ref={modalRef}>
          <div className="flex p-5 border-b">
            <p className="text-lg text-gray-900 font-semibold">Add New User</p>
            <IoIosClose
              className="ml-auto text-3xl text-gray-400 cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded"
              onClick={() => setIsOpenModal(false)}
            />
          </div>
          <div className="p-5 grid gap-4 grid-cols-2">
            <div className="col-span-1">
              <label htmlFor="email" className="block mb-2 font-medium text-gray-900"> Email </label>
              <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg p-2.5 w-full " placeholder="" required=""/>
            </div>
            <div className="col-span-1">
              <label htmlFor="password" className="block mb-2 font-medium text-gray-900"> Password </label>
              <input type="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg p-2.5 w-full " placeholder="" required=""/>
            </div>
            <div className="col-span-1">
              <label htmlFor="user-name" className="block mb-2 font-medium text-gray-900"> Username </label>
              <input type="text" name="user-name" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg p-2.5 w-full " placeholder="" required=""/>
            </div>
            <div className="col-span-1">
              <label htmlFor="role" className="block mb-2 font-medium text-gray-900"> Role </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg p-2.5 w-full">
                <option selected value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="col-span-1">
              <lable htmlFor="avatar" className="block mb-2 font-medium text-gray-900"> Image </lable>
              <input type="file"/>
            </div>
          </div>
          <div className="flex justify-end p-5 border-t">
            <button className="w-[6rem] px-5 py-2.5 rounded-lg border bg-slate-400 hover:bg-slate-500 text-white  font-medium">Cancel</button>
            <button className="ml-2 w-[6rem] px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800  text-white font-medium">Save </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;