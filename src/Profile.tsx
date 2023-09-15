import "./styles/Profile.css";

function Profile() {
  return (
    <div id="profile" className="container-fluid bg-black ">
      <div className="row pb-5">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <h1 className="Intro-Heading pt-5">
            Hi, I am{" "}
            <span style={{ color: "rgb(43, 46, 234" }}>Ruwan Udayanga</span>
          </h1>
          <h4 className="Intro-Heading pb-5">
            Computer Science & Engineering Undergraduate.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;
