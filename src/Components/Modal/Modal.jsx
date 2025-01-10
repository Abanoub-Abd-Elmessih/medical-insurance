/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent({ title, children, show, close,size }) {
  return (
    <Modal centered show={show} onHide={close} size={size}>
      <Modal.Header closeButton>
        <Modal.Title className="text-main">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          اغلق
        </Button>
        <Button className="btn-custom rounded-2" onClick={close}>
          الذهاب الي صفحة {title}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
