import { useEffect, useState } from "react";
import ModalUser from "./ModalUser";
import TableUser from "./TableUser";
import { getAllUser } from "../../../services/apiService";
import ModalDeleteUser from "./ModalDeleteUser";

const ManageUser = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [modalMode, setModalMode] = useState("");
  const [updatingUser, setUpdatingUser] = useState("");
  const [deletingUser, setDeletingUser] = useState("");

  const fetchListUser = async () => {
   let res = await getAllUser();
   if(res.EC === 0) {
    setListUsers(res.DT);
   }
  }

  useEffect(()  => {
    fetchListUser();
  }, [])

  const openCreateModal = () => {
    setIsOpenModal(true);
    setModalMode("create");
  }

  const openUpdateModal = () => {
    setIsOpenModal(true);
    setModalMode("update");
  }

  return (  
    <div className="p-5">
      <div className="mb-4 text-2xl font-bold text-gray-900">
        Manage User
      </div>

      <div className="user-content">
        <div className="">
          <button className="mb-4 px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-medium" onClick={openCreateModal}> Add new Users </button>
          <ModalUser 
            modalMode={modalMode}
            isOpenModal={isOpenModal} 
            setIsOpenModal={setIsOpenModal}
            fetchListUser={fetchListUser}
            updatingUser={updatingUser}
            setUpdatingUser={setUpdatingUser}
          />
          <ModalDeleteUser
            deletingUser={deletingUser}
            isOpenDeleteModal={isOpenDeleteModal}
            setIsOpenDeleteModal={setIsOpenDeleteModal}
            fetchListUser={fetchListUser}
          />
        </div>
        <TableUser 
          listUsers={listUsers}
          openUpdateModal={openUpdateModal}
          setUpdatingUser={setUpdatingUser}
          setIsOpenDeleteModal={setIsOpenDeleteModal}
          setDeletingUser={setDeletingUser}
        />
      </div>
    </div>
  );
}
 
export default ManageUser;