import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import TableUser from "./TableUser";

const ManageUser = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (  
    <div className="p-5">
      <div className="mb-4 text-2xl font-bold text-gray-900">
        Manage User
      </div>

      <div className="user-content">
        <div className="">
          <button className="px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium" onClick={() => setIsOpenModal(true)}> Add new Users </button>
          <ModalCreateUser isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
        </div>
        <TableUser/>
      </div>
    </div>
  );
}
 
export default ManageUser;