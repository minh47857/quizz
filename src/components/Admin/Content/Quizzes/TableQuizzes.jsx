import { useState, useEffect } from "react";
import { getAdminQuizzes } from "../../../../services/apiService";

const TableQuizzes = () => {
    const [quizzesAdminList, setQuizzesAdminList] = useState([]);

    useEffect(() => {
        fetchAdminQuizzes();
    })

    const fetchAdminQuizzes = async () => {
        const res = await getAdminQuizzes();
        if (res && res.EC === 0) {
            setQuizzesAdminList(res.DT);
        }
    }

    const handleUpdate = () => {

    }

    const handleDelete = () => {

    }

    return (
        <div>
            <table className="overflow-x-auto w-full text-left border">
                <thead className="bg-gray-200 uppercase">
                    <tr className="border">
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {quizzesAdminList && quizzesAdminList.length > 0 &&
                        quizzesAdminList.map((item, index) => {
                            return (
                                <tr key={`table-users-${index}`} className="bg-white border-b hover:bg-gray-50">
                                    <th scope="row" className=" px-6 py-4 font-medium">
                                        {item.id}
                                    </th>
                                    <td className="px-6 py-4 border">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 border">
                                        {item.description}
                                    </td>
                                    <td className="px-6 py-4 border">
                                        {item.difficulty}
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
        </div>
    );
}

export default TableQuizzes;