import React from 'react';
import Pdf from "react-to-pdf";
const Barcode = require('react-barcode');

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.title}</h1>
        <Barcode  value={props.barcode}/>
        <p>{props.content}</p>
      </div>
      <Pdf targetRef={ref} filename="new.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;
