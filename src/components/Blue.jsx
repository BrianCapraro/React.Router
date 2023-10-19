import "../App.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Blue() {
  let { shade } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className="blue">
        <div>
          <h1>Blue!</h1>
        </div>
        <div>
          <h3>Use Shade: {shade}</h3>
          <button onClick={() => navigate("/blue/dark-blue")}>Dark Blue</button>
          <br />
          <button onClick={() => navigate("/blue/light-blue")}>
            Light Blue
          </button>
        </div>
      </div>
    </>
  );
}

export default Blue;
