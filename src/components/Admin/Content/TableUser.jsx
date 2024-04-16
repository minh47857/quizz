import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";

const TableUser = () => {
  const [listUsers, setListUsers] = useState([])
  const fetchListUser = async () => {
   let res = await getAllUser();
   console.log(res);
   if(res.EC === 0) {
    setListUsers(res.DT);
   }
  }
  useEffect(()  => {
    fetchListUser();
  }, [])

  return (
    <div className="">
      <table className="overflow-x-auto w-full text-left">
        <thead className="bg-gray-200 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
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
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-users-${index}`} className="bg-white border-b hover:bg-gray-50">
                  <th scope="row" className=" px-6 py-4 font-medium">
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">
                    {item.username}
                  </td>
                  <td className="px-6 py-4">
                    {item.email}
                  </td>
                  <td className="px-6 py-4">
                    {item.role}
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
    </div>
  );
}

export default TableUser;