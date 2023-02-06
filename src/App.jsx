import React from "react";
import "./style.scss";
import star from "./assets/star.svg";

function App() {
  return (
    <div class="card">
      <div class="top">
        <img
          src="https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/0f/90/cc/0f90ccce-c3c3-93f8-4776-422566d47557/191018104702.jpg/1200x1200bf-60.jpg"
          alt="Rozes"
        />
        <div class="title">
          <h1>ROZES</h1>
          <h2>
            Under the grave <br /> (2016)
          </h2>
        </div>
      </div>
      <div class="bottom">
        <div>
          <h2>Rate this album</h2>
        </div>
        <div class="stars">
          <img class="star" src={star} alt="star" />
          <img class="star" src={star} alt="star" />
          <img class="star" src={star} alt="star" />
          <img class="star" src={star} alt="star" />
          <img class="star" src={star} alt="star" />
        </div>
      </div>
    </div>
  );
}

export default App;
