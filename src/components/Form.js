import React, { Fragment, useState } from 'react';

const Form = () => {
  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date_appointment: '',
    time_appointment: '',
    symptoms: ''
  });

  const handleChange = e => {
    setAppointment({ ...appointment, pet: e.target.value });
  }

  return (
    <>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre de tu mascota</label>
        <input type="text" name="pet" className="u-full-width" onChange={handleChange} />
        <label>Nombre del dueño</label>
        <input type="text" name="owner" className="u-full-width" onChange={handleChange} />
        <label>Fecha</label>
        <input type="date" name="date_appointment" className="u-full-width" onChange={handleChange} />
        <label>Hora</label>
        <input type="time" name="time_appointment" className="u-full-width" onChange={handleChange} />
        <label>Síntomas</label>
        <textarea className="u-full-width" name="symptoms" onChange={handleChange}></textarea>
        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
    </>
  );
}

export default Form;
