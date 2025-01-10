import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import Logo from "../assets/Logo.jpg";
import ModalComponent from "../Components/Modal/Modal";
import EditEmployeeForm from "../Components/EditEmployeeForm/EditEmployeeForm";

export default function Employees() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editEmployee, setEditEmployee] = useState(null);
  const [showEmployee, setShowEmployee] = useState(false);
  const [showEditEmployee, setShowEditEmployee] = useState(false);

  const handleCloseEmployee = () => setShowEmployee(false);
  const handleShowEmployee = (employee) => {
    setSelectedEmployee(employee);
    setShowEmployee(true);
  };
  const handleCloseEditEmployee = () => setShowEditEmployee(false);
  const handleShowEditEmployee = (employee) => {
    setEditEmployee(employee);
    setShowEditEmployee(true);
  };

  // Test data array
  const employees = [
    {
      id: 1,
      employeeName: "ابانوب",
      employeeCode: "001",
      employer: "TechCorp",
      phone: "123-456-7890",
      recievedCard: true,
    },
    {
      id: 2,
      employeeName: "مارك",
      employeeCode: "002",
      employer: "HealthInc",
      phone: "987-654-3210",
      recievedCard: false,
    },
    {
      id: 3,
      employeeName: "مينا",
      employeeCode: "003",
      employer: "EduWorld",
      phone: "555-666-7777",
      recievedCard: true,
    },
  ];

  return (
    <>
      <div className="overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-warning">
              <tr>
                <th className="text-nowrap border-end px-3" scope="col">
                  صورة الموظف
                </th>
                <th className="text-nowrap border-end px-3" scope="col">
                  اسم الموظف
                </th>
                <th className="text-nowrap border-end px-3" scope="col">
                  رقم الهاتف
                </th>
                <th className="text-nowrap border-end px-3" scope="col">
                  جهة العمل
                </th>
                <th className="text-nowrap border-end px-3" scope="col">
                  استلام كارنيه
                </th>
                <th className="text-nowrap border-end px-3" scope="col">
                  تعديلات
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="cursor-pointer">
                  <td>
                    <img src={Logo} alt="Logo Image" className="logo-img" />
                  </td>
                  <td
                    className="align-middle"
                    onClick={() => handleShowEmployee(employee)}
                  >
                    {employee.employeeName}
                  </td>
                  <td className="align-middle">{employee.phone}</td>
                  <td className="align-middle">{employee.employer}</td>
                  <td className="align-middle">
                    {employee.recievedCard ? "نعم" : "لا"}
                  </td>
                  <td className="align-middle">
                    <div className="d-flex gap-3">
                      <FaRegTrashAlt className="cursor-pointer" />
                      <IoShareSocialOutline className="cursor-pointer" />
                      <FiEdit
                        className="cursor-pointer"
                        onClick={() => handleShowEditEmployee(employee)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

            {selectedEmployee && (
              <ModalComponent
                close={handleCloseEmployee}
                show={showEmployee}
                title={selectedEmployee.employeeName}
              >
                <h1>{selectedEmployee.employeeCode}</h1>
              </ModalComponent>
            )}
            {editEmployee && (
              <EditEmployeeForm
                close={handleCloseEditEmployee}
                employee={editEmployee}
                isOpen={showEditEmployee}
              />
            )}
          </table>
        </div>
      </div>
    </>
  );
}
