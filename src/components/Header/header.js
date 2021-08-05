
import logo from "../../assets/images/logo.png";
import './header.css'
import City from'../../Utils/Img/Logos/logo-citi-foundation.png';
import Global from'../../Utils/Img/Logos/global.png';
import Futuro from'../../Utils/Img/Logos/futuro.png';
import Kuepa from'../../Utils/Img/Logos/kuepa.png';


function Header() {
  return (

   <div className="cajaheader">
    <div className="logo">
    <img id="img2" src={City} alt="Esta es la img2" />
    <img id="img2" src={Global} alt="Esta es la img2" />
    <img id="img2" src={Futuro} alt="Esta es la img2" />
    <img id="img2" src={Kuepa} alt="Esta es la img2" />
    </div>
    </div>
  );
}


export default Header;

