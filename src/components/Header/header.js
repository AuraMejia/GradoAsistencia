
import logo from "../../assets/images/logo.png";
import './header.css'
import City from'../../Utils/Img/Logos/city.png';
import Global from'../../Utils/Img/Logos/global.svg';
import Kuepa from'../../Utils/Img/Logos/kuepa.png';


function Header() {
  return (

   <div className="cajaheader">
    <div className="logo">
    <img id="imgcity" src={City} alt="Esta es la img2" />
    <img id="imgglobal" src={Global} alt="Esta es la img2" />
    <img id="imgkuepa" src={Kuepa} alt="Esta es la img2" />
    </div>
    </div>
  );
}


export default Header;

