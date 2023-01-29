import React, { useState } from 'react'

export default function EqSolver() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <div className='text-5xl my-4 font-bold text-white text-center'>Equation Solver</div>


    </div>
  )
}
