import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  const [appointments, setAppointments] = useState(() => {
    if (localStorage.getItem('appointments') !== null) {
      return JSON.parse(localStorage.getItem('appointments'));
    } else {
      return [];
    }
  });

  const handleAddAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ]);
  }

  const handleRemoveAppointment = appointment => {
    setAppointments(appointments.filter(a => a.id !== appointment.id));
  }

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form handleAddAppointment={handleAddAppointment} />
          </div>
          <div className="one-half column">
            <h2>{appointments.length === 0 ? 'No hay citas' : 'Administra tus citas'}</h2>
            {appointments.map(appointment => <Appointment appointment={appointment} key={appointment.id} handleRemoveAppointment={handleRemoveAppointment}/>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
