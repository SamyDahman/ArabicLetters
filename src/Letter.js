import React from "react";
import "./Letter.css";

const Letter = ({prediction}) => {

    const labels =  ['أ' ,' ب ',' ت ',' ث ',' ج ',' ح ',' خ ',' د ',' ذ ',' ر ',' ز ',' س ',
    ' ش ',' ص ',' ض ',' ط ',' ظ ',' ع ',' غ ', 'ف ',' ق ',' ك ',' ل',' م ',' ن ',' ه ',' و ',' ي ']
    const names =  ['alif', 'baa', 'taa', 'thaa', 'jim', 'haa', 'khaa', 'daal', 'dhaal', 'raa', 'zay',
  'siin', 'shiin', 'saad', 'daad', "Ta", "Dha", "ain", "ghain", "feh", "qaf", "kaf", "lam", "mim",
  "nun", "heh", "wa", "yeh"]
    let max_val = 1
    if (prediction != null) {
    max_val = prediction.indexOf(Math.max(...prediction));
    }
    return (
        <div className = "card">
            <h1 className = "result">{labels[max_val]}</h1>
            <p1 className = "name">{names[max_val]}</p1>
        </div>
    )
}

export default Letter;
