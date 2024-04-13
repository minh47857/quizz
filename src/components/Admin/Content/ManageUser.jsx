import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";


const ManageUser = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (  
    <>
      <div className="title">
        Manage User
      </div>

      <div className="user-content">
        <div className="">
          <button onClick={() => setIsOpenModal(true)}> Add new Users </button>
          <ModalCreateUser isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
        </div>
      </div>
    </>
  );
}
 
export default ManageUser;