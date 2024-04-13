// import { useEffect, useRef } from "react";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

const ModalCreateUser = ({ isOpenModal, setIsOpenModal }) => {
  // const modalRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       setIsOpenModal(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [setIsOpenModal]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("User");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const handleUpLoadImage = (event) => {
    if(event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    isOpenModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 shadow-md">
        <div className="w-full max-w-5xl max-h-full rounded-lg shadow bg-white">
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
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg p-2.5 w-full" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="" required=""/>
            </div>
            <div className="col-span-1">
              <label htmlFor="password" className="block mb-2 font-medium text-gray-900"> Password </label>
              <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg p-2.5 w-full" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="" required=""/>
            </div>
            <div className="col-span-1">
              <label htmlFor="user-name" className="block mb-2 font-medium text-gray-900"> Username </label>
              <input type="text" id="user-name" className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg p-2.5 w-full" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="" required=""/>
            </div>
            <div className="col-span-1">
              <label htmlFor="role" className="block mb-2 font-medium text-gray-900"> Role </label>
              <select id="role" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 w-full" value={role} onChange={(event) => setRole(event.target.value)}>
                <option value="User"> User </option>
                <option value="Admin"> Admin </option>
              </select>
            </div>
            <div className="col-span-1">
              <label htmlFor="image-upload" className="block mb-2 font-medium text-gray-900"> Image </label>
              <input id="image-upload" type="file" hidden onChange={handleUpLoadImage}/>
            </div>
            <div className="col-span-2 h-[150px] border border-dashed border-gray-500 flex justify-center items-center text-slate-400">
              { !previewImage 
                ?(<span> Preview Image </span>)
                :(<img src={previewImage} alt="" className="max-w-full max-h-full" />)
              }
            </div>
          </div>
          <div className="flex justify-end p-5 border-t">
            <button className="w-[6rem] px-5 py-2.5 rounded-lg border bg-slate-400 hover:bg-slate-500 text-white  font-medium" onClick={() => setIsOpenModal(false)}>Cancel</button>
            <button className="ml-2 w-[6rem] px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800  text-white font-medium"> Save </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalCreateUser;