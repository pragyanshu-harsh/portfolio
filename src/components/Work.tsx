import "./styles/Work.css";
import WorkImage from "./WorkImage";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-line"></div>
        <div className="work-flex">
          {[
            { title: "Login Page UI", category: "Figma", tools: "UI/UX, Color Theory, Layouts", image: "/images/login.png" },
            { title: "Digital Clock", category: "Python", tools: "Python, Tkinter", image: "/images/clock.png" },
            { title: "Tic Tac Toe", category: "Python", tools: "Python, Game Logic", image: "/images/tictactoe.png" },
            { title: "Smart Home IoT", category: "Simulation", tools: "Cisco Packet Tracer, IoT", image: "/images/smarthome.png" }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
        <div className="work-line"></div>
      </div>
    </div>
  );
};

export default Work;
