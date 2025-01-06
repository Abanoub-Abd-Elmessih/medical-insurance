import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";
import "../Sidebar/Sidebar.css";
import {
  FaBriefcaseMedical,
  FaHospital,
  FaRegUserCircle,
  FaUser,
} from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { RiUserAddFill } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import { LuFileText } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
function Sidebar() {
  return (
    <>
      <nav className="navbar Navbar">
        <div className="container-fluid">
          <div className="">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <Link to={"/"}>
              <img src={Logo} alt="Logo Image" className="logo-img" />
            </Link>
          </div>
          <Link to={"/"} className="navbar-brand">
            الديوان البطريركي بالاسكندرية
          </Link>
          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header w-100 d-flex justify-content-between align-items-center">
              <h5
                className="offcanvas-title text-main fw-bolder fs-3"
                id="offcanvasNavbarLabel"
              >
                القائمة الرئيسية
              </h5>
              <div className="center-flex">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
            </div>
            <span data-bs-toggle="offcanvas">
              <Link
                to={"/"}
                className="center-flex gap-2 text-main fs-5 border-main p-2 w-50 m-auto rounded-2 mt-2"
              >
                <FaBriefcaseMedical />
                التامين الطبي
              </Link>
            </span>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end gap-1 flex-grow-1 fw-bolder fs-5 text-main pt-2">
                <li data-bs-toggle="offcanvas">
                  <NavLink className="Nav-item" aria-current="page" to={"/"}>
                    <IoHome />
                    الصفحة الرئيسية
                  </NavLink>
                </li>
                <li data-bs-toggle="offcanvas">
                  <NavLink
                    className="Nav-item"
                    aria-current="page"
                    to={"/hospitals"}
                  >
                    <FaHospital />
                    المستشفيات
                  </NavLink>
                </li>
                <li data-bs-toggle="offcanvas">
                  <NavLink
                    className="Nav-item"
                    aria-current="page"
                    to={"/employees"}
                  >
                    <FaUser />
                    الموظفين
                  </NavLink>
                </li>
                <li data-bs-toggle="offcanvas">
                  <NavLink className="Nav-item" aria-current="page" to={"/s"}>
                    <RiUserAddFill />
                    اضافة موظف
                  </NavLink>
                </li>
                <>
                  <div
                    className="Nav-item"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <LuFileText />
                    التقارير
                    <span className="me-auto fs-4">
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <Link className="Nav-item">1</Link>
                    <Link className="Nav-item">2</Link>
                    <Link className="Nav-item">3</Link>
                  </div>
                </>
                <>
                  <div
                    className="Nav-item"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    <LuFileText />
                    الاستهلاكات
                    <span className="me-auto fs-4">
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </div>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <Link className="Nav-item">1</Link>
                    <Link className="Nav-item">2</Link>
                    <Link className="Nav-item">3</Link>
                  </div>
                </>
                <li data-bs-toggle="offcanvas">
                  <NavLink
                    className="Nav-item"
                    aria-current="page"
                    to={"/login"}
                  >
                    <PiSignOutBold />
                    تسجيل الخروج
                  </NavLink>
                </li>
              </ul>
            </div>
            <span data-bs-toggle="offcanvas">
              <Link
                to={"/"}
                className="center-flex gap-2 text-main fs-5 border-main p-2 w-50 m-auto rounded-2 mb-4"
              >
                <FaRegUserCircle /> كريستين فيكتور
              </Link>
            </span>
          </div>
        </div>
      </nav>

      <div className="secNavbar mb-3"></div>
    </>
  );
}

export default Sidebar;
