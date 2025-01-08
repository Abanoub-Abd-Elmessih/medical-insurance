import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import Input from "../Components/Input/Input";
import Logo from "../assets/Logo.jpg";
export default function Login() {
  const navigate = useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    navigate('/')
  }
  return (
    <>
      <Header />
      <div className="container">
        <div className="row h-screen justify-content-center flex-row-reverse align-items-center gap-2 gap-md-3 gap-xl-4 gap-xxl-5">
          <div className="col-9 col-md-7 col-lg-5 col-xl-4 col-xxl-4 transition-col">
            <img src={Logo} alt="logo image" className="w-100 rounded-5" />
            <p className="fs-4 fw-bolder text-main text-center text-nowrap">
              &quot;وَأَمَّا أَنْتَ فَاصْحُ فِي كُلِّ شَيْءٍ. <br/> احْتَمِلِ
              الْمَشَقَّاتِ. اعْمَلْ عَمَلَ الْمُبَشِّرِ.<br/> تَمِّمْ
              خِدْمَتَكَ.&quot; (2 تي 4: 5).
            </p>
          </div>
          <div className="col-12 col-md-10 col-lg-10 col-xl-7 col-xxl-7 transition-col">
            <form onSubmit={handleSubmit} className="text-center bg-white shadow-lg py-5 px-4 p-lg-5 rounded-4">
              <Input id={"userName"} label={"اسم المستخدم"} type={"text"} />
              <Input id={"password"} label={"كلمة المرور"} type={"password"} />
              <button className="btn btn-lg btn-custom" type="submit">
                تسجيل الدخول
              </button>
              <div className="d-flex justify-content-between text-main mt-2">
                <Link className="text-decoration-underline" to={'registration'}>انشاء حساب جديد؟</Link>
                <Link className="text-decoration-underline" to={'forgetPassword'}>نسيت كلمة السر؟</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
