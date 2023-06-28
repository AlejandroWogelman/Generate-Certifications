import React, { useEffect, useState } from "react";

export const Form = () => {
  const [inputs, seitInputs] = useState({
    type: "",
    place: "",
    name: "",
    career_type: "",
    career_name: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    seitInputs({ ...inputs, [name]: value });
  };
  useEffect(() => {
    const inputs = [...document.querySelectorAll("label input")];
    inputs.forEach((e) => {
      let width = Number(e.placeholder.length + 1) + "ch";

      if (e.value.length > 0) {
        width = Number(e.value.length + 1) + "ch";
        return (e.style.width = width);
      }
      e.style.width = width;
    });
  }, [inputs]);
  return (
    <form className="content">
      <label>
        Certificado de
        <input
          value={inputs.type}
          onChange={handleChange}
          className="input"
          placeholder="conclusion"
          name="type"
        />
      </label>

      <label>
        <input
          name="place"
          type="text"
          placeholder="Selectivo 09"
          value={inputs.place}
          onChange={handleChange}
        />
      </label>
      <div className="inputs">
        <label>
          Certificamos qué{" "}
          <input
            type="text"
            placeholder="Alejandro W"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <span>culminó</span>
        <label>
          <input
            name="career_type"
            type="text"
            placeholder="la carrera"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            name="career_name"
            type="text"
            placeholder="Programacion web"
            onChange={handleChange}
          />
        </label>
      </div>
    </form>
  );
};
