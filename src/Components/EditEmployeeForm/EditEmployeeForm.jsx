/* eslint-disable react/prop-types */
import { FloatingLabel, Form } from "react-bootstrap";
import ModalComponent from "../Modal/Modal";
import Input from "../Input/Input";

export default function EditEmployeeForm({ isOpen, close, employee }) {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <ModalComponent
        close={close}
        show={isOpen}
        title={employee.employeeName}
        size={"xl"}
      >
        <form onSubmit={handleSubmit} className="border p-5 shadow rounded-4">
          <div className="w-100 bg-warning bg-opacity-25 py-2 px-3 fs-5 text-main fw-bolder rounded-2">
            اضافة موظف
          </div>
          <div className="row mt-3">
            <div className="col-12 col-md-6 col-lg-4">
              <Input
                id={"employeeFullName"}
                label={"الاسم رباعي"}
                type={"text"}
                value={employee.employeeName}
              />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Input id={"JII"} label={"الرقم القزمي"} type={"number"} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Input id={"JII"} label={"صورة الرقم القومي"} type={"file"} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Input id={"JII"} label={"رقم الهاتف"} type={"tel"} />
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <FloatingLabel controlId="floatingSelect" label="استلام الكارنيه">
                <Form.Select aria-label="Floating label select example">
                  <option value="1">لا</option>
                  <option value="2">نعم</option>
                </Form.Select>
              </FloatingLabel>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Input id={"JII"} label={"جهة العمل"} type={"text"} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Input id={"JII"} label={"سنة الدخول"} type={"date"} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <Input id={"JII"} label={"رقم العضوية"} type={"number"} />
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </div>
            <button
              className="col-12 col-md-6 col-lg-4 mt-3 mt-md-0 btn btn-custom btn-lg"
              type="submit"
            >
              تعديل الموظف
            </button>
          </div>
        </form>
      </ModalComponent>
    </>
  );
}
