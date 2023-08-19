import React, { useState } from "react";

const FormSimple = () => {
  const [inputs, setInputs] = useState({});
  const [inputCheck, setInputCheck] = useState([]);
  const [file, setFile] = useState([])

  const handleChange = (e) => {
    // console.log("event: ", e);
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e) => {
    const name = e.target.name;
    let prev = inputCheck; // making clone
    if (e.target.checked) {
      prev = [...inputCheck, e.target.value];
    } else {
      prev.splice(inputCheck.indexOf(e.target.value), 1);
    }
    setInputCheck(prev);
    setInputs((inputs) => ({ ...inputs, [name]: prev.toString() }));
    // console.log(inputCheck);
  };

  const handleSelect = (e) => {
    const object = e.target.selectedOptions;
    // console.log(object);
    const value = Array.from(object, (option) => option.value);
    // console.log(value.toString());
    const name = e.target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value.toString() }));
  };

  const handleFile = (e) => {
    console.log(e.target.files);
    const files = e.target.files ;
    const arr = [...file, ...Array.from(files)]
    const fileNames = [...file, ...Array.from(files , (file)=> file.name)]
    console.log("arr " , arr);
    console.log("fileNames " , fileNames);

    // setFile(arr)
    // console.log(file);
    setInputs((inputs) => ({ ...inputs, 'files': fileNames.toString() }));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <form action="#" method="get" onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handleChange} />
        </p>

        <p>
          <label htmlFor="contact">Contact you </label>
          <input
            type="radio"
            name="contact"
            id="Email"
            value={"email"}
            onChange={handleChange}
          />
          <label htmlFor="Email">Email</label>
          <input
            type="radio"
            name="contact"
            id="Mobile"
            value={"mobile"}
            onChange={handleChange}
          />
          <label htmlFor="Mobile">Mobile</label>
        </p>
        <p>
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            name="mobile"
            id="mobile"
            onChange={handleChange}
          />
        </p>

        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </p>
        <p>
          <label htmlFor="gender">Gender</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value={"male"}
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="Female"
            value="female"
            onChange={handleChange}
          />
          <label htmlFor="Female">Female</label>
          <input
            type="radio"
            name="gender"
            id="Other"
            onChange={handleChange}
          />
          <label htmlFor="Other">Other</label>
        </p>
        <p>
          <label htmlFor="Course">Course</label>
          <input
            type="checkbox"
            name="Course"
            id="Javascript"
            value={"Javascript"}
            onChange={handleCheckbox}
          />
          <label htmlFor="Javascript">Javascript</label>
          <input
            type="checkbox"
            name="Course"
            id="React_Js"
            value="React_Js"
            onChange={handleCheckbox}
          />
          <label htmlFor="React_Js">React_Js</label>
          <input
            type="checkbox"
            name="Course"
            id="Node_Js"
            value="Node_Js"
            onChange={handleCheckbox}
          />
          <label htmlFor="Node_Js">Node_Js</label>
        </p>
        <p>
          <label htmlFor="Address">Address</label>
          <textarea name="address" id="Address" cols={15} rows={3}></textarea>
        </p>
        <p>
          <label htmlFor="dob">Dob</label>
          <input
            type="date"
            name="dob"
            id="dob"
            max={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
          />
        </p>

        <p>
          <label htmlFor="batchMode">batchMode</label>
          <select name="batchMode" id="batchMode" onChange={handleChange}>
            <option value={-1}>Select one choice</option>
            <option value={"Weekdays"}>Weekdays</option>
            <option value={"Weedend"}>Weekend</option>
          </select>
        </p>

        <p>
          <label htmlFor="batchTime">batchTime</label>
          <select
            name="batchTime"
            id="batchTime"
            multiple
            size={4}
            onChange={handleSelect}
          >
            <optgroup label="Morning Time">
              <option value={"9-11"}>9-11</option>
              <option value={"11-1"}>11-1</option>
            </optgroup>
            <optgroup label="After Lunch">
              <option value={"2-4"}>2-4</option>
              <option value={"4-6"}>4-6</option>
            </optgroup>
          </select>
        </p>

        <p>
          <label htmlFor="resume">Resume</label>
          <input
            type="file"
            name="resume"
            id="resume"
            onChange={handleFile}
          />
        </p>

        <p>
          <label htmlFor="docs">Documents</label>
          <input type="file" name="docs" id="docs" multiple onChange={handleFile} />
        </p>

        <p>
          <input type="submit" name="submit" value={"Submit"} />
        </p>
      </form>
    </>
  );
};

export default FormSimple;
