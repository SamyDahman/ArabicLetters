import React, { useEffect, useRef, useState } from "react";
import "./canvas.css"
import { useCanvas } from "./CanvasContext";
import Letter from "./Letter"
import * as tf from '@tensorflow/tfjs'

export function Canvas() {
  const {
    canvasRef,
    prepareCanvas,
    startDrawing,
    finishDrawing,
    draw,
    clearCanvas
  } = useCanvas();

  const [predictions,setPredictions] = useState(null)
  const modelRef = useRef(null)

  const loadModel = async () => {
    modelRef.current = await tf.loadLayersModel("https://raw.githubusercontent.com/SamyDahman/tfjs-model-arabicletters/main/model.json");
  }

  const makePrediction = (img) => {
    tf.tidy(() => {
      let tensor = tf.browser.fromPixels(img).resizeBilinear([150,150]);
      tensor = tensor.reshape([1,150,150,3]);
      tensor = tf.cast(tensor, "float32")
      if (tensor != null) {
      let classification = modelRef.current.predict(tensor);
      setPredictions(Array.from(classification.dataSync()))
      }
    });

}

  const stopDrawing = () => {
    finishDrawing()
    var img = new Image();
    img.addEventListener("load", ()=> {
      if (modelRef.current != null){
        makePrediction(img)
      }
    })
    img.src = canvasRef.current.toDataURL("image/png");
  }

  useEffect(() => {
    prepareCanvas();
    loadModel();
  }, []);


  return (
    <div className = "main">
      <div className = "canvass">
      <p1>Draw Here</p1>
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        ref={canvasRef}
        style={{
          border: '2px solid #000',
          borderColor: "lightgray",
          margin: 2,
          background: "Black"
        }}
      />
      <button className = "button button--pan" onClick={clearCanvas}><span>Clear Pad</span></button>
      </div>
      <Letter prediction = {predictions}/>
    </div>
  );
}