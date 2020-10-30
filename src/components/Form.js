import React, { Fragment, useState } from 'react';

const Form = () => {
  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date_appointment: '',
    time_appointment: '',
    symptoms: ''
  });

  const [error, setError] = useState(false);

  const { pet, owner, date_appointment, time_appointment, symptoms } = appointment;

  const handleChange = e => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (
      pet.trim() === '' ||
      owner.trim() === '' ||
      date_appointment.trim() === '' ||
      time_appointment.trim() === '' ||
      symptoms.trim() === ''
    ) {
      setError(true);

      return;
    }

    setError(false);
  }


  return (
    <>
      <h2>Crear Cita</h2>
      { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
      <form onSubmit={handleSubmit}>
        <label>Nombre de tu mascota</label>
        <input type="text" name="pet" className="u-full-width" onChange={handleChange} value={pet} />
        <label>Nombre del dueño</label>
        <input type="text" name="owner" className="u-full-width" onChange={handleChange} value={owner} />
        <label>Fecha</label>
        <input type="date" name="date_appointment" className="u-full-width" onChange={handleChange} value={date_appointment} />
        <label>Hora</label>
        <input type="time" name="time_appointment" className="u-full-width" onChange={handleChange} value={time_appointment} />
        <label>Síntomas</label>
        <textarea className="u-full-width" name="symptoms" onChange={handleChange} value={symptoms}></textarea>
        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
      </form>
    </>
  );
}

export default Form;
