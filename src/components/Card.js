import React from "react";
import "./css/card.css";
function Card() {
  return (
    <>
    
      <div class="card">
        <svg
          viewBox="0 0 784.37 1277.39"
          clip-rule="evenodd"
          fill-rule="evenodd"
          image-rendering="optimizeQuality"
          text-rendering="geometricPrecision"
          shape-rendering="geometricPrecision"
          version="1.1"
          height="100%"
          width="100%"
          xmlSpace="preserve"
          class="img"
        >
          <g id="Layer_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer"></metadata>
            <g id="_1421394342400">
              <g>
                <polygon
                  points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"
                  fill-rule="nonzero"
                  fill="#343434"
                ></polygon>
                <polygon
                  points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"
                  fill-rule="nonzero"
                  fill="#8C8C8C"
                ></polygon>
                <polygon
                  points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"
                  fill-rule="nonzero"
                  fill="#3C3C3B"
                ></polygon>
                <polygon
                  points="392.07,1277.38 392.07,956.52 -0,724.89"
                  fill-rule="nonzero"
                  fill="#8C8C8C"
                ></polygon>
                <polygon
                  points="392.07,882.29 784.13,650.54 392.07,472.33"
                  fill-rule="nonzero"
                  fill="#141414"
                ></polygon>
                <polygon
                  points="0,650.54 392.07,882.29 392.07,472.33"
                  fill-rule="nonzero"
                  fill="#393939"
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
        <div class="textBox">
          <p class="text head">Ethereum</p>
          <span>Cryptocurrency</span>
          <p class="text price">1.654,34€</p>
        </div>
      </div>
    </>
  );
}

export default Card;
