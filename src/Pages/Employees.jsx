import { useQuery } from "@tanstack/react-query";
import Modal from "../Components/Modal/Modal";
import { useEmployees } from "../hooks/useEmployees";
import { Link } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import Spinner from "../Components/Spinner/Spinner";

export default function Employees() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const { data, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: useEmployees,
  });

  const handleRowClick = (employee) => {
    setSelectedEmployee(employee);
  };
  return (
    <>
      {isLoading ? (
        <Spinner/>
      ) : (
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
                {data?.map((employee) => (
                  <tr
                    key={employee.employeeCode}
                    className="cursor-pointer"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => handleRowClick(employee)}
                  >
                    <td>{employee.employeeName}</td>
                    <th scope="row">{employee.employeeName}</th>
                    <td>{employee.employeeCode}</td>
                    <td>{employee.employer}</td>
                    <td>{employee.recievedCard ? "نعم" : "لا"}</td>
                    <td>
                      <div className="d-flex gap-3">
                        <Link to={`/employeeDetails/${employee.employeeCode}`}>
                          <HiDotsVertical className="cursor-pointer" />
                        </Link>
                        <FaRegTrashAlt className="cursor-pointer" />
                        <IoShareSocialOutline className="cursor-pointer" />
                        <FiEdit className="cursor-pointer" />
                      </div>
                    </td>
                    <td>@HIIIIIIIII</td>
                  </tr>
                ))}
              </tbody>
              <Modal title={selectedEmployee.employeeName}>
                <h1>{selectedEmployee.employeeCode}</h1>
              </Modal>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
