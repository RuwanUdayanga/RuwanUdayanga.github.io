import "./styles/work.css";
import chatbot from "./assets/Chatbot.png";
import HR from "./assets/HR.png";
import expence_manager from "./assets/expence-manager.png";
import { Github } from "react-bootstrap-icons";
function Work() {
  return (
    <div id="work" className="container-fluid bg-black bg-work">
      <div className="row pb-5">
        <div className="col-md-4">
          <h1 className="heading-work pt-5 pb-3">Projects</h1>
        </div>
        <div className="col-md-6"></div>
      </div>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <h3 className="project-heading pb-5">
            Hospital Customer Care Chatbot
          </h3>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-md-6 chatbot-img">
          <img src={chatbot} className="img-fluid" width="400" alt="chatbot" />
        </div>
        <div className="col-md-5 d-flex flex-column align-items-center">
          <p className="project-content">
            Project aimed to revolutionize healthcare support services by
            developing an intelligent chatbot system proficient in Sinhala
            language. Chatbot served as a virtual assistant, streamlining
            appointment scheduling and sending reminders, providing personalized
            patient support while ensuring data privacy compliance. The
            project's accomplishments include enhancing patient care, optimizing
            resource allocation, and alleviating staff workloads, reflecting a
            commitment to leveraging technology for patient-centric healthcare
            solutions.
          </p>
          <a
            className="nav-link"
            href="https://github.com/RuwanUdayanga/Chatbot3.0"
          >
            <div>
              <Github
                className="git github-link mt-5"
                color="white"
                size={40}
              />
            </div>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3 className="project-heading pb-5">
            Human Resource Management System
          </h3>
        </div>
        <div className="col-md-6"></div>
      </div>
      <div className="row pb-5">
        <div className="col-md-1"></div>
        <div className="col-md-5 d-flex flex-column align-items-center">
          <p className="project-content">
            A robust and scalable Human Resource Management system meticulously
            designed to cater to the specific organizational needs of employer,
            offering personal information management and absence management
            capabilities. It encompasses the storage of extensive employee data,
            including personal and organizational details, and allows for the
            flexible definition of custom employee attributes. The system
            features fine-grained authorization, ensuring role-based access to
            modules and sub-modules, and includes a reporting module for
            generating comprehensive reports, facilitating streamlined HR
            processes, and serving as the foundation for future adaptability and
            scalability across organizations.
          </p>
        </div>
        <div className="col-md-6 HR-img">
          <img
            src={HR}
            className="img-fluid "
            width="400"
            alt="HR Management"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <h3 className="project-heading pb-5"> Expense Management System </h3>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-md-6">
          <img
            src={expence_manager}
            className="img-fluid exp-img"
            alt="Expence Manager"
          />
        </div>
        <div className="col-md-5">
          <p className="project-content">
            Enhance the functionality of an existing Android application by
            implementing a persistent storage solution using an embedded
            database, such as SQLite, for storing account information and
            transactions. The current implementation of the application relies
            on in-memory storage, which results in data loss once the
            application is closed. To address this, the task involves
            implementing methods and functionality required for interacting with
            the embedded database.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Work;
