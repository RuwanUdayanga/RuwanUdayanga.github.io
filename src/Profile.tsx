// import "./styles/Profile.css";

// function Profile() {
//   return (
//     <div id="profile" className="container-fluid bg-black bg-profile">
//       <div className="row pb-5">
//         <div className="col-md-3"></div>
//         <div className="col-md-9 intro">
//           <h1 className="Intro-Heading pt-5">
//             <span style={{ fontSize: 200 }}>Hi</span>, I am{" "}
//             <span
//               style={{
//                 color: "rgb(43, 46, 234",
//                 fontSize: 50,
//                 fontWeight: 500,
//                 fontFamily: "sans-serif",
//               }}
//             >
//               Ruwan Udayanga
//             </span>
//           </h1>
//           <h4 className="Intro-Heading pb-5">
//             Computer Science & Engineering Undergraduate.
//           </h4>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import "./styles/Profile.css";

function Profile() {
  return (
    <div id="profile" className="container-fluid bg-black bg-profile">
      <div className="row pb-5">
        <div className="col-md-3"></div>
        <div className="col-md-9 col-sm-12 intro">
          <h1 className="Intro-Heading pt-2">
            <span style={{ fontSize: "8rem" }}>Hi</span>, I am{" "}
            <span
              style={{
                color: "rgb(43, 46, 234)",
                fontSize: "2rem",
                fontWeight: 500,
                fontFamily: "sans-serif",
              }}
            >
              Ruwan Udayanga
            </span>
          </h1>
          <h4 className="Intro-Heading pb-5" style={{ fontSize: "1.5rem" }}>
            Computer Science & Engineering Undergraduate.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Profile;
