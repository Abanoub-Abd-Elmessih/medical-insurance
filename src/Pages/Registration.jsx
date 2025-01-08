import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.jpg";
import Header from "../Components/Header/Header";
import Input from "../Components/Input/Input";

export default function Registration() {
  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    navigate('/')
  }
  return (
    <>
      <Header />
      <div className="container d-flex flex-column gap-5 justify-content-center align-items-center">
        <div className="text-center">
          <img src={Logo} alt="Logo Image" className="w-75 rounded-5" />
        </div>
        <form onSubmit={handleSubmit} className="text-center bg-white shadow-lg py-5 px-4 p-lg-5 mb-5 mb-md-0 rounded-4 w-100">
          <div className="row">
            <div className="col-12 col-md-6">
              <Input id={"userName"} label={"اسم المستخدم"} type={"text"} />
            </div>
            <div className="col-12 col-md-6">
              <Input id={"workPlace"} label={"جهة العمل"} type={"text"} />
            </div>
            <div className="col-12 col-md-6">
              <Input
                id={"email"}
                label={"البريد الالكتروني"}
                type={"email"}
              />
            </div>
            <div className="col-12 col-md-6">
              <Input id={"password"} label={"كلمة السر"} type={"password"} />
            </div>
            <div className="col-12 col-md-6">
              <Input id={"Phone"} label={"رقم الهاتف"} type={"tel"} />
            </div>
            <div className="col-12 col-md-6">
              <Input
                id={"confirmPassword"}
                label={"تاكيد كلمة السر"}
                type={"password"}
              />
            </div>
            <div className="col-12 col-md-6">
              <Input id={"nationalId"} label={"الرقم القومي"} type={"number"} />
            </div>
            <div className="col-12 col-md-6">
              <button className="btn btn-lg btn-custom w-100" type="submit">
                تسجيل الدخول
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
