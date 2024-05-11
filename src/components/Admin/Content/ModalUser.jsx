// import { useEffect, useRef } from "react";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { toast } from "react-toastify";
import { postCreateNewUser, putUpdateUser } from "../../../services/apiService";
import _ from "lodash";

const ModalUser = ({ isOpenModal, setIsOpenModal, fetchListUser, modalMode, updatingUser, setUpdatingUser }) => {
	// const modalRef = useRef(null);

	// useEffect(() => {
	//	 const handleClickOutside = (event) => {
	//		 if (modalRef.current && !modalRef.current.contains(event.target)) {
	//			 setIsOpenModal(false);
	//		 }
	//	 };

	//	 document.addEventListener("mousedown", handleClickOutside);

	//	 return () => {
	//		 document.removeEventListener("mousedown", handleClickOutside);
	//	 };
	// }, [setIsOpenModal]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [role, setRole] = useState("USER");
	const [image, setImage] = useState("")
	const [previewImage, setPreviewImage] = useState("");

	useEffect(() => {
		if(modalMode === "create" || _.isEmpty(updatingUser)) return;
		setEmail(updatingUser.email);
		setUsername(updatingUser.username);
		setRole(updatingUser.role);
		setImage(updatingUser.image);
		if(updatingUser.image) {
			setPreviewImage(`data:image/png;base64,${updatingUser.image}`);
		}
	}, [updatingUser])

	const handleClose = () => {
		setIsOpenModal(false);
		setEmail("");
		setPassword("");
		setUsername("");
		setRole("USER");
		setImage("");
		setPreviewImage("");
		setUpdatingUser("");
	}

	const handleUpLoadImage = (event) => {
		if(event.target && event.target.files && event.target.files[0]) {
			setPreviewImage(URL.createObjectURL(event.target.files[0]));
			setImage(event.target.files[0]);
		}
	}

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const handleSubmit = async () => {
		let data;
		if(modalMode === "create") {
			const isValidEmail = validateEmail(email);
			if(!isValidEmail) {
				toast.error("Invalid Email");
				return;
			}
			if(!password) {
				toast.error("Invalid Password");
				return;
			}
			data = await postCreateNewUser(email, password, username, role, image);
		} else {
			data = await putUpdateUser(updatingUser.id, username, role, image);
		}
		
		if(data && data.EC === 0) {
			toast.success(data.EM)
			handleClose();
			await fetchListUser();
		}
		if(data && data.EC) {
			toast.error(data.EM);
		}
	}

	return (
		isOpenModal && (
			<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50 shadow-md">
				<div className="overflow-auto w-full max-w-5xl max-h-full rounded-lg shadow bg-white">
					<div className="flex p-5 border-b">
						<p className="text-lg text-gray-900 font-semibold">{modalMode === "create" ? 'Add New User' : 'Update User'}</p>
						<IoIosClose
							className="ml-auto text-3xl text-gray-400 cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded"
							onClick={handleClose}
						/>
					</div>
					<div className="p-5 grid gap-4 grid-cols-2">
						<div className="col-span-1">
							<label htmlFor="email" className="block mb-2 font-medium text-gray-900"> Email </label>
							<input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900	rounded-lg p-2.5 w-full" disabled={modalMode === "update"} value={email} onChange={(event) => setEmail(event.target.value)} placeholder="" required=""/>
						</div>
						<div className="col-span-1">
							<label htmlFor="password" className="block mb-2 font-medium text-gray-900"> Password </label>
							<input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900	rounded-lg p-2.5 w-full" disabled={modalMode === "update"} value={password} onChange={(event) => setPassword(event.target.value)} placeholder="" required=""/>
						</div>
						<div className="col-span-1">
							<label htmlFor="user-name" className="block mb-2 font-medium text-gray-900"> Username </label>
							<input type="text" id="user-name" className="bg-gray-50 border border-gray-300 text-gray-900	rounded-lg p-2.5 w-full" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="" required=""/>
						</div>
						<div className="col-span-1">
							<label htmlFor="role" className="block mb-2 font-medium text-gray-900"> Role </label>
							<select id="role" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5 w-full" value={role} onChange={(event) => setRole(event.target.value)}>
								<option value="USER"> USER </option>
								<option value="ADMIN"> ADMIN </option>
							</select>
						</div>
						<div className="col-span-1">
							<label htmlFor="image-upload" className="block mb-2 font-medium text-gray-900"> Image </label>
							<input id="image-upload" type="file" hidden onChange={handleUpLoadImage}/>
						</div>
						<div className="col-span-2 h-[150px] border border-dashed border-gray-500 flex justify-center items-center text-slate-400">
							{ previewImage 
								?(<img src={previewImage} alt="" className="max-w-full max-h-full" />)
								:(<span> Preview Image </span>)
							}
						</div>
					</div>
					<div className="flex justify-end p-5 border-t">
						<button className="w-[6rem] px-5 py-2.5 rounded-lg border bg-slate-400 hover:bg-slate-500 text-white	font-medium" onClick={handleClose}> Cancel </button>
						<button className="ml-2 w-[6rem] px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800	text-white font-medium" onClick={handleSubmit}> Save </button>
					</div>
				</div>
			</div>
		)
	);
};

export default ModalUser;