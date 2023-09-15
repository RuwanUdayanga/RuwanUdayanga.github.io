import "./styles/Education.css";

function Education() {
  return (
    <div id="education" className="container-fluid bg-dark ">
      <div className="row pb-5">
        <div className="col-3"></div>
        <div className="col-6">
          <h1 className="Intro-Heading pt-5">Education</h1>
          <div className="row">
            <div className="col-3 content-year pt-4">2010-2019</div>
            <div className="col-8 content pt-4">
              <h6>
                Secondary Education:{" "}
                <a href="https://taxilappa.org/taxila-central-collage/">
                  Taxila Central College
                </a>
              </h6>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-11">
                  <h6 className="content-details pb-4">
                    G.C.E Advanced Level Examination (2019)
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-1">
              <a href="https://uom.lk/">
                <img src="../src/assets/TCC1.png" width="100" alt="" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-3 content-year pt-4">2021-Present</div>
            <div className="col-8 content pt-4">
              <h6>
                Higher Education:{" "}
                <a href="https://uom.lk/">University of Moratuwa</a>
              </h6>

              <div className="row">
                <div className="col-1"></div>
                <div className="col-11">
                  <h6 className="content-details pb-5">
                    B Sc Engineering (Hons) Department of Computer Science and
                    Engineering
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-1">
              <a href="https://uom.lk/">
                <img src="../src/assets/UOM.png" width="100" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Education;
