import "./styles/Education.css";
import TCC_logo from "./assets/TCC.png";
import UOM_logo from "./assets/UOM.png";

function Education() {
  return (
    <div id="education" className="container-fluid bg-dark ">
      <div className="row pb-5">
        <div className="col-md-3"></div>
        <div className="col-md-8">
          <h1 className="Intro-Heading pt-5">Education</h1>
          <div className="row">
            <div className="col-md-3 content-year pt-5">2010-2019</div>
            <div className="col-md-7 content pt-5">
              <h6>
                Secondary Education:{" "}
                <a href="https://taxilappa.org/taxila-central-collage/">
                  Taxila Central College
                </a>
              </h6>
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-11">
                  <h6 className="content-details pb-4">
                    G.C.E Advanced Level Examination (2019)
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <a href="https://taxilappa.org/taxila-central-collage/">
                <img
                  src={TCC_logo}
                  className="img-fluid"
                  width="100"
                  alt="TCC Logo"
                />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 content-year pt-4">2021-Present</div>
            <div className="col-md-7 content pt-4">
              <h6>
                Higher Education:{" "}
                <a href="https://uom.lk/">University of Moratuwa</a>
              </h6>

              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-11">
                  <h6 className="content-details pb-5">
                    B Sc Engineering (Hons) Department of Computer Science and
                    Engineering
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <a href="https://uom.lk/">
                <img
                  src={UOM_logo}
                  className="img-fluid"
                  width="100"
                  alt="UOM Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Education;
