import { SignIn } from "../services/authService";
import "./Homepage.css";
import "./App.css";
export default function Homepage() {
  return (
    <div className="Homepage">
      <nav className="homepageNav">Sign in to view articles!</nav>
      <article>
        <div className="title">
          <div className="images">
            <img
              className="titleImage"
              src="https://www.illumination.com/wp-content/uploads/2020/02/stuart-1.png"
              alt="minion"
            />
            <img
              className="titleImage"
              src="https://www.illumination.com/wp-content/uploads/2020/02/kevin-1.png"
              alt="kevin"
            />
            <img
              className="titleImage"
              src="https://www.illumination.com/wp-content/uploads/2020/02/M2_Bob-1.png"
              alt="bob"
            />
          </div>
          <h1>Minion Madness</h1>
          <SignIn />
          <div className="images">
            <img
              className="titleImage"
              src="https://freepngimg.com/thumb/minions/110967-group-minions-hq-image-free.png"
              alt="minion"
            />

            <img
              className="titleImage"
              src="https://www.universalbeijingresort.com/sites/default/files/active/minion/chara-minions.png"
              alt="minion"
            />
            <img
              className="titleImage"
              src="https://www.pngmart.com/files/12/Group-Minions-PNG-Transparent.png"
              alt="minion group"
            />
          </div>
        </div>
      </article>
    </div>
  );
}
