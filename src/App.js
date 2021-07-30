import React from "react";
import {Canvas} from "./Canvas"
import Nav from "./Nav";
import './App.css';
import "./main.css"

const App = () => {

  return(
    <div className= "App">
      <Nav />
      <Canvas />
      <div className= "description">
        <p1 className="description-text">This site uses a convolutional neural network to perform image recognition on 
          drawings of the arabic letters with around 91.16% accuracy. The orginal dataset comes from a study and research paper out 
          of Egypt. The libraries and frameworks used in its contruction were React JS, Tensorflow JS, and Tensorflow.
          The process for creating the model started with a python script run using Google Colab in order to train a convolutional
          neural net that was constructed using the Tensorflow library. From there, the model was exported. You can find that script
          at this <a href="https://github.com/SamyDahman/ArabicLettersTrainingScript">repository</a> on my Github account.
        </p1>
        <p1 className="description-text">Citation for Data: A. El-Sawy, M. Loey, and H. EL-Bakry, “Arabic handwritten characters recognition using convolutional
           neural network,” WSEAS Transactions on Computer Research, vol. 5, pp. 11–19, 2017. 
        </p1>
        <p1 className="description-text"></p1>
      </div>
    </div>
  );
}

export default App;
