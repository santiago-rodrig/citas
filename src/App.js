import React, { Fragment, useState } from 'react';
import Form from './components/Form';

function App() {
  const [appointments, setAppointments] = useState([]);

  const handleAddAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ]);
  }

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form handleAddAppointment={handleAddAppointment} />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
