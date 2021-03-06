import React from 'react';
import PropTypes from 'prop-types';

const Appointment = ({ appointment, handleRemoveAppointment }) => (
  <div className="cita">
    <p>Mascota: <span>{appointment.pet}</span></p>
    <p>Dueño: <span>{appointment.owner}</span></p>
    <p>Fecha: <span>{appointment.date_appointment}</span></p>
    <p>Hora: <span>{appointment.time_appointment}</span></p>
    <p>Síntomas: <span>{appointment.symptoms}</span></p>
    <button type="button" className="button eliminar u-full-width" onClick={() => handleRemoveAppointment(appointment)}>Eliminar</button>
  </div>
);

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  handleRemoveAppointment: PropTypes.func.isRequired
};

export default Appointment;
