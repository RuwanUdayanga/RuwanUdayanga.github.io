import "./styles/Contacts.css";
import {
  Github,
  Linkedin,
  Envelope,
  Twitter,
  Facebook,
  Instagram,
} from "react-bootstrap-icons";

function Contacts() {
  return (
    <div
      id="contacts"
      className="container-fluid bg-black "
      style={{ marginBottom: 0 }}
    >
      <div className="row pb-5">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <h3 className="heading-contact pt-5 pb-5">Find Me On</h3>
          <div className="row pb-3">
            <div className="col-md-3">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/ruwan-ranasinghe-29007b21b/"
              >
                <div className="contact">
                  <Linkedin color="royalblue" size={25} />
                  <h6 className="Contact-name ml-3">linkedin</h6>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a className="nav-link" href="https://github.com/RuwanUdayanga">
                <div className="contact">
                  <Github color="royalblue" size={25} />
                  <h6 className="Contact-name ml-3">Github</h6>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a className="nav-link" href="mailto:ruwan.20@cse.mrt.ac.lk">
                <div className="contact">
                  <Envelope color="royalblue" size={25} />
                  <h6 className="Contact-name ml-3">Mail</h6>
                </div>
              </a>
            </div>
          </div>
          <div className="row pb-5">
            <div className="col-md-3">
              <a className="nav-link" href="https://twitter.com/Ruwanudayanga1">
                <div className="contact">
                  <Twitter color="royalblue" size={25} />
                  <h6 className="Contact-name ml-3">Twitter</h6>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="nav-link"
                href="https://www.facebook.com/ruwan.udayanga.507"
              >
                <div className="contact">
                  <Facebook color="royalblue" size={25} />
                  <h6 className="Contact-name ml-3">facebook</h6>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a
                className="nav-link"
                href="https://www.instagram.com/ruwan.udayanga.507/"
              >
                <div className="contact">
                  <Instagram color="royalblue" size={25} />
                  <h6 className="Contact-name ml-3">Instagram</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contacts;
