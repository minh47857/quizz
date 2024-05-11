import { deleteUser } from "../../../services/apiService";
import { IoIosClose } from "react-icons/io";
import { toast } from "react-toastify";

const ModalDeleteUser = ({ isOpenDeleteModal, setIsOpenDeleteModal, deletingUser, fetchListUser }) => {
	const handleSubmit = async () => {
		let data = await deleteUser(deletingUser.id);
		if(data && data.EC === 0) {
			toast.success(data.EM)
			setIsOpenDeleteModal(false);
			await fetchListUser();
		}
		if(data && data.EC) {
			toast.error(data.EM);
		}
	}
	
	return (	
		isOpenDeleteModal && 
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 shadow-md">
				<div className="w-full max-w-[25rem] max-h-full rounded-lg bg-white shadow">
					<div className="flex p-5 border-b">
						<p className="text-lg font-semibold">Confirm Delete User</p>
						<IoIosClose
							className="ml-auto text-3xl text-gray-400 cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded"
							onClick={() => setIsOpenDeleteModal(false)}
						/>
					</div>
					<div className="flex p-5">
						<p className="">Are you sure to delete <b>{deletingUser.email}</b> </p>
					</div>
					<div className="flex justify-end p-5 border-t">
						<button className="w-[6rem] px-5 py-2.5 rounded-lg border bg-slate-400 hover:bg-slate-500 text-white	font-medium" onClick={() => setIsOpenDeleteModal(false)}> Cancel </button>
						<button className="ml-2 w-[6rem] px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800	text-white font-medium" onClick={handleSubmit}> Save </button>
					</div>
				</div>
			</div>
	);
}
 
export default ModalDeleteUser;