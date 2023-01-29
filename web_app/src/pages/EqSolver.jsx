import React, { Component, useEffect, useState } from 'react';

export default function EqSolver() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  state = {
    mathString: '2x + 4 + 5x + 4'
  };

  onMathStringChange = (_, newValue) => {
    this.setState({
      mathString: newValue
    });
  }

  const [ocr, setOcr] = useState("");
  const [imageData, setImageData] = useState(null);
  const worker = createWorker({
    logger: (m) => {
      console.log(m);
    },
  });
  const convertImageToText = async () => {
    if (!imageData) return;
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const {
      data: { text },
    } = await worker.recognize(imageData);
    setOcr(text);
  };

  useEffect(() => {
    convertImageToText();
  }, [imageData]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      console.log({ imageDataUri });
      setImageData(imageDataUri);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div>
      <div className='text-5xl my-4 font-bold text-white text-center'>Equation Solver</div>

      <div className='grid place-items-center'>
        <div className='mt-4'>
          <label for="files" className="bg-primary text-white text-2xl px-6 py-4 rounded-md cursor-pointer">Select Image</label>
          <input id="files" className='hidden' type="file" onChange={handleChange} />
        </div>
        <img src={file} className="w-96 p-8" />
      </div>

      <div className='grid place-items-center'>
        <div>
          <p>Choose an Image</p>
          <input
            type="file"
            name=""
            id=""
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
        <div className="display-flex">
          <img src={imageData} alt="" srcset="" />
          <p>{ocr}</p>
        </div>

        <div className='input'>
          <span className='yourInput'>
            Your input
          </span>
          <textarea
            name='mathString'
            value={this.state.mathString}
            onChange={this.onMathStringChange}
            underlineFocusStyle={{ borderColor: '#1d84ff' }}
          />
        </div>
        <div className="stepsTitle">Steps</div>
      </div>
    </div>
  )
}
