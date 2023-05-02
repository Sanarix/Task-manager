import { useState } from 'react';

export default function useModal() {
	const [modalOpen, setModalOpen] = useState(false);
	const [modalType, setModalType] = useState('');

	function modalTypeHandler(value) {
		if(value==='new' || value==='edit') {
			setModalType(value)
		}else {
			throw new Error('The parameter value for setModalType is incorrect. Available values for this parameter: ["new", "edit"]')
		}
	}

	return {modalOpen, setModalOpen, modalType, modalTypeHandler};
}
