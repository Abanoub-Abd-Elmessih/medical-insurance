/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent({ title, children, show, close }) {
  return (
    <Modal centered show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          اغلق
        </Button>
        <Button variant="primary" onClick={close}>
          الذهاب الي صفحة {title}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
