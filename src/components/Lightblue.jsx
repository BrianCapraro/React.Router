import "../App.css";
import { useNavigate } from "react-router-dom";

function Lightblue() {
  const navigate = useNavigate();

  return (
    <>
      <div className="lightblue">
        <h1>Light Blue!</h1>
        <br />
        <button onClick={() => navigate("/blue")}>Blue</button>
      </div>
    </>
  );
}

export default Lightblue;
