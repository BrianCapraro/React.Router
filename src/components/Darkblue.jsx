import "../App.css";
import { useNavigate } from "react-router-dom";

function Darkblue() {
  const navigate = useNavigate();

  return (
    <>
      <div className="darkblue">
        <h1>Dark Blue!</h1>
        <br />
        <button onClick={() => navigate("/blue")}>Blue</button>
      </div>
    </>
  );
}

export default Darkblue;
