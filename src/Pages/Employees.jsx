import { useState } from "react";
import Modal from "../Components/Modal/Modal";
// import { Link } from "react-router-dom";
// import { HiDotsVertical } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import Logo from "../assets/Logo.jpg";

export default function Employees() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

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

  const handleRowClick = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <>
        <div className="px-md-5 px-2 overflow-hidden">
          <div className="table-responsive">
            <table className="table">
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
                  <tr
                    key={employee.id}
                    className="cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleRowClick(employee)}
                  >
                    <td><img src={Logo} alt="Logo Image" className="logo-img" /></td>
                    <td>{employee.employeeName}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.employer}</td>
                    <td>{employee.recievedCard ? "نعم" : "لا"}</td>
                    <td>
                      <div className="d-flex gap-3">
                        {/* <Link to={`/employeeDetails/${employee.employeeCode}`}>
                          <HiDotsVertical className="cursor-pointer" />
                        </Link> */}
                        <FaRegTrashAlt className="cursor-pointer" />
                        <IoShareSocialOutline className="cursor-pointer" />
                        <FiEdit className="cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              {selectedEmployee && (
                <Modal title={selectedEmployee.employeeName}>
                  <h1>{selectedEmployee.employeeCode}</h1>
                </Modal>
              )}
            </table>
          </div>
        </div>
    </>
  );
}
