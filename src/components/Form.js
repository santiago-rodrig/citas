import React, { Fragment } from 'react';

const Form = () => (
  <>
    <h2>Crear Cita</h2>
    <form>
      <label>Nombre de tu mascota</label>
      <input type="text" name="pet" className="u-full-width" />
      <label>Nombre del dueño</label>
      <input type="text" name="owner" className="u-full-width" />
      <label>Fecha en la que se da de alta</label>
      <input type="date" name="date_free" className="u-full-width" />
      <label>Hora en la que se da de alta</label>
      <input type="time" name="time_free" className="u-full-width" />
      <label>Síntomas</label>
      <textarea className="u-full-width" name="sympthoms"></textarea>
      <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
    </form>
  </>
);

export default Form;
