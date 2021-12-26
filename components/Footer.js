//import "./footer.css";
// import { Image } from "react-bootstrap";
//import  Link  from "next/link";

function Footer() {
  return (
      <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />
    <footer className="footer bg-footer">
        <div className="container">
            <div className="row" style={{marginTop:"20px"}}>
                <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                    
                </div>
    
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h4 className="text-light footer-head">My Teacher</h4>
                    <ul className="list-unstyled footer-list mt-4">
                        <li><a href="javascript:void(0)" className="text-foot"><i className="mdi mdi-chevron-right mr-1"></i> Teachers</a></li>
                        <li><a href="javascript:void(0)" className="text-foot"><i className="mdi mdi-chevron-right mr-1"></i> Profile</a></li>
                        <li><a href="javascript:void(0)" className="text-foot"><i className="mdi mdi-chevron-right mr-1"></i> Home</a></li>
                         </ul>
                </div>
    
                <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h4 className="text-light footer-head">About</h4>
                    <ul className="list-unstyled footer-list mt-4">
                        <li><a href="javascript:void(0)" className="text-foot"><i className="mdi mdi-chevron-right mr-1"></i> About us</a></li>
                        <li><a href="javascript:void(0)" className="text-foot"><i className="mdi mdi-chevron-right mr-1"></i> Team</a></li>
                        <li><a href="javascript:void(0)" className="text-foot"><i className="mdi mdi-chevron-right mr-1"></i> Login</a></li>
                    </ul>
                </div>
    
                <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <h4 className="text-light footer-head">Locations</h4>
                    <ul className="list-unstyled footer-list mt-4">
                        <li><a href="#" className="text-foot"><i className="mdi mdi-chevron-right mr-1"></i>Saudi Arabia</a></li>
                        <li><a href="#" className="text-foot"><i className="mdi mdi-chevron-right mr-1"></i> Najran</a></li>
                        <li><a href="#" className="text-foot"><i className="mdi mdi-chevron-right mr-1"></i>Jubail</a></li>
                        <li><a href="#" className="text-foot"><i className="mdi mdi-chevron-right mr-1"></i> Jeddah</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <footer className="footer bg-footer footer-bar">
        <div className="container text-center">
            <div className="row align-items-center">
                <div className="col-sm-6">
                    <div className="text-sm-left">
                        <p className="mb-0">&copy; 2021. Design with <i className="mdi mdi-heart text-danger"></i></p>
                    </div>
                </div>
    
                <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <ul className="list-unstyled text-sm-right social-icon social mb-0">
                        <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-facebook" title="Facebook"></i></a></li>
                        <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-instagram" title="Instagram"></i></a></li>
                        <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter" title="Twitter"></i></a></li>
                        <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-google-plus" title="Google +"></i></a></li>
                        <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  );
}

export default Footer;
