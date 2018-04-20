import React from "react";

const Modal = ({ mode, onClose, product }) => (
	<section className={`modal__outer modal__outer--${mode}`}>
		<div className="modal">
			<span className="modal__closeButton" onClick={onClose}>Close ×</span>
			{product.name}
		</div>
	</section>
);

export default Modal;