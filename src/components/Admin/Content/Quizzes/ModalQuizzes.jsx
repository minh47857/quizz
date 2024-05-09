import { useState } from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { postCreateNewQuiz } from '../../../../services/apiService';
import { IoIosClose } from 'react-icons/io';

const ModalQuizzes = ({isOpenModal, setIsOpenModal}) => {
  const options = [
    { value: 'EASY', label: 'EASY' },
    { value: 'MEDIUM', label: 'MEDIUM' },
    { value: 'DIFFICULT', label: 'DIFFICULT' },
  ];
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState({});
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    if (!name || !description)
      toast.error("Name/Description is required");
    const res = await postCreateNewQuiz(name, description, type?.value, image);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      handleClose();
    }
    else {
      toast.error(res.EM);
    }
  }

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0])
      setImage(event.target.files[0]);
  }

  const handleClose = () => {
    setName("");
    setDescription("");
    setType({});
    setImage(null);
    setIsOpenModal(false);
  }

  return ( isOpenModal &&
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 shadow-md">
      <div className="overflow-auto w-full max-w-5xl max-h-full rounded-lg shadow bg-white">
        <div className="p-4">
          <div className="flex p-4 border-b">
            <p className="text-lg text-gray-900 font-semibold"> Add New Quiz </p>
            <IoIosClose
              className="ml-auto text-3xl text-gray-400 cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded"
              onClick={handleClose}
            />
          </div>
          <div className="p-4">
            <fieldset className="flex flex-col gap-4 border p-4">
              <legend className="text-lg"> Add new Quiz </legend>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 p-2.5 rounded-md focus:border-blue-300 focus:ring focus:outline-none" placeholder="Name" />
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="border border-gray-300 p-2.5 rounded-md focus:border-blue-300 focus:ring focus:outline-none" placeholder="Description" />
              <Select
                Value={type}
                onChange={setType}
                options={options}
                placeholder="Quiz Type"
                className="bg-gray-50"
              />
              <div className="flex flex-col gap-1">
                <label>Upload Image</label>
                <input className="border" type="file" onChange={handleUploadImage} />
              </div>
              <button
                className="ml-auto w-[4rem] border py-2 px-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring focus:outline-none focus:ring-blue-300"
                onClick={handleSubmit}
              >
                Save
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalQuizzes;