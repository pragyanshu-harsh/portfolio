import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>InternBee</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed responsive web pages using HTML, CSS, and JavaScript. Assisted in debugging code and improving website performance. Integrated basic SQL database components. Worked in an Agile development environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics Intern</h4>
                <h5>Skin Glogeous Pvt. Ltd.</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Analyzed marketing data using Excel and basic analytics techniques. Assisted in digital campaign optimization and performance tracking. Supported social media and online branding strategies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE</h4>
                <h5>Katihar Engineering College</h5>
              </div>
              <h3>2022 - Present</h3>
            </div>
            <p>
              CGPA: 6.99. Core Subjects: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Object-Oriented Programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
