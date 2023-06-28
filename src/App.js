import { Resizable } from "re-resizable";
import { useEffect, useState } from "react";
import Model1 from "./assets/model1.jpeg";
import Model2 from "./assets/model2.jpeg";
import Model3 from "./assets/model3.jpeg";

import "./App.css";
import { ResizableComp } from "./components/resizable/Resizable";

function App() {
  const [imgFile, setImgFile] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);

  if (imgFile) {
    const reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.onload = () => {
      setImgPreview(reader.result);
    };
  }

  return (
    <div className="App">
      <input
        type="file"
        className="file"
        onChange={(e) => {
          const [files] = e.target.files;
          setImgFile(files);
        }}
      />
      <div className="options">
        <img
          src={Model1}
          alt="cerificate"
          onClick={() => {
            setImgFile(null);
            setImgPreview(Model1);
          }}
        />
        <img
          src={Model2}
          alt="certificate"
          onClick={() => {
            setImgFile(null);
            setImgPreview(Model2);
          }}
        />
        <img
          src={Model3}
          alt="certificate"
          onClick={() => {
            setImgFile(null);
            setImgPreview(Model3);
          }}
        />
      </div>
      <div className="container">
        {imgPreview && <img src={imgPreview} alt="img" className="img" />}
        <ResizableComp />
      </div>
    </div>
  );
}

export default App;
