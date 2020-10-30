import React from 'react';

const Appointment = ({ appointment, handleRemoveAppointment }) => (
  <div className="cita">
    <p>Mascota: <span>{appointment.pet}</span></p>
    <p>Dueño: <span>{appointment.owner}</span></p>
    <p>Fecha: <span>{appointment.date_appointment}</span></p>
    <p>Hora: <span>{appointment.time_appointment}</span></p>
    <p>Síntomas: <span>{appointment.symptoms}</span></p>
    <button type="butto" className="button eliminar u-full-width" onClick={() => handleRemoveAppointment(appointment)}>Eliminar</button>
  </div>
);

export default Appointment;
