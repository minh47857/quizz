import { useState } from 'react';
import ModalQuizzes from './ModalQuizzes';
import TableQuizzes from './TableQuizzes';


const ManageQuizzes = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="p-4">
      <button 
        className="mb-2 p-2.5 bg-blue-600 rounded-lg text-white font-bold hover:bg-blue-700"
        onClick={() => setIsOpenModal(true)}
      >
        Add new Quiz
      </button>
      <ModalQuizzes
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <TableQuizzes />
    </div>
  );
}

export default ManageQuizzes;