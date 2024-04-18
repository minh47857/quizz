import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const TableUser = ({ listUsers, openUpdateModal, setUpdatingUser, setIsOpenDeleteModal, setDeletingUser }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const usersPerPage = 6;
  const endOffset = itemOffset + usersPerPage;
  const currentListUsers = listUsers.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(listUsers.length / usersPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * usersPerPage) % listUsers.length;
    setItemOffset(newOffset);
  }

  const handleUpdate = (user) => {
    openUpdateModal();
    setUpdatingUser(user);  
  }

  const handleDelete = (user) => {
    setIsOpenDeleteModal(true);
    setDeletingUser(user);
  }
  
  return (
    <div className="">
      <table className="overflow-x-auto w-full text-left border">
        <thead className="bg-gray-200 uppercase">
          <tr className="border"> 
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentListUsers && currentListUsers.length > 0 &&
            currentListUsers.map((item, index) => {
              return (
                <tr key={`table-users-${index}`} className="bg-white border-b hover:bg-gray-50">
                  <th scope="row" className=" px-6 py-4 font-medium">
                    {item.id}
                  </th>
                  <td className="px-6 py-4 border">
                    {item.username}
                  </td>
                  <td className="px-6 py-4 border">
                    {item.email}
                  </td>
                  <td className="px-6 py-4 border">
                    {item.role}
                  </td>
                  <td className="px-6 py- border">
                    <button className="ml-2 text-white px-5 py-2.5 rounded-lg bg-yellow-300" onClick={() => handleUpdate(item)}> Update </button>
                    <button className="ml-2 text-white px-5 py-2.5 rounded-lg bg-red-400" onClick={() => handleDelete(item)}> Delete </button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
      <ReactPaginate  
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}  
        className="flex space-x-4 items-center justify-center mt-4"
      />
    </div>
  );
}

export default TableUser;