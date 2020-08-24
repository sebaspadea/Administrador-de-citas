import React, { Fragment, useState } from 'react';

const Formulario = () => {

  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  })

  // Funcion que se ejecuta cada vez que el usuario escribe en un input
  const handleChange = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }

  // Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Cuando el usuario presiona agregar cita
  const submitCita = e => {
    e.preventDefault();

    // Validar

    // Asignar un ID

    // Crear la cita

    // Reiniciar el form
  }

  return (
    <Fragment>
      <h2>Crear Cita</h2>
      
      <form
        onSubmit={submitCita}
      >
        <label>Nombre Mascota</label>
        <input 
          type="text"
          name='mascota'
          className='u-full-width'
          placeholder='Nombre Mascota'
          onChange={handleChange}
          value={mascota}
        />

        <label>Nombre Dueño</label>
        <input 
          type="text"
          name='propietario'
          className='u-full-width'
          placeholder='Nombre Dueño de la mascota'
          onChange={handleChange}
          value={propietario}
        />

        <label>Fecha</label>
        <input 
          type="date"
          name='fecha'
          className='u-full-width'
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input 
          type="time"
          name='hora'
          className='u-full-width'
          onChange={handleChange}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea 
          name="sintomas"
          className='u-full-width'
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button
          type='submit'
          className='u-full-width button-primary'
        >Agregar cita</button>
      </form>
    </Fragment>
   );
}
 
export default Formulario;