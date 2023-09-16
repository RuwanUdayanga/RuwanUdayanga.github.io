import "./styles/About.css";
function About() {
  return (
    <div id="about" className="container-fluid bg-dark bg-about">
      <div className="row pb-5">
        <div className="col-md-3"></div>
        <div className="col-md-6 col-sm-12 about">
          <h1 className="heading-about pt-5 pb-3">About Me</h1>
          <p
            className="about-content pt-3 pb-5"
            style={{ textAlign: "center" }}
          >
            Adaptable Computer Science and Data Science undergraduate known for
            fast learning, a passion for innovation, and a relentless focus on
            results. Experienced in effective teamwork and leadership,
            consistently delivering impactful outcomes through collaboration.
            Eager contributor to groundbreaking tech projects, dedicated to
            harnessing technology to solve complex challenges in the ever
            expanding tech universe.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
