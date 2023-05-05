import { createContext, useContext } from "react";
import useModal from "../hooks/useModal";

const ModalContext = createContext();
const ModalToggleContext = createContext();

export function useOpenModal() {
	return useContext(ModalContext);
}

export function useOpenModalToggle() {
	return useContext(ModalToggleContext);
}

export function ModalProvider({children}) {
	const {modalOpen, setModalOpen} = useModal({isOpen: false, modalType:''});

	return (
		<ModalContext.Provider value={modalOpen}>
			<ModalToggleContext.Provider value={setModalOpen}>
				{children}
			</ModalToggleContext.Provider>
		</ModalContext.Provider>
	)
}
