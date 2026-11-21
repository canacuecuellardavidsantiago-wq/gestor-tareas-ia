
function TaskForm({
  formulario,
  idEditando,
  cambiarCampo,
  guardarTarea,
  cancelarEdicion,
}) {
  const editando = idEditando !== null

  return (
    <aside className="panel form-panel">
      <div className="panel-header">
        <div>
          <h2>
            {editando ? 'Editar tarea' : 'Nueva tarea'}
          </h2>

          <p>
            {editando
              ? 'Modifica la información de tu actividad.'
              : 'Completa la información de tu actividad.'}
          </p>
        </div>
      </div>

      <form onSubmit={guardarTarea}>
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          name="titulo"
          type="text"
          placeholder="Ej. Estudiar React"
          value={formulario.titulo}
          onChange={cambiarCampo}
          required
        />

        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          rows="4"
          placeholder="Describe la tarea..."
          value={formulario.descripcion}
          onChange={cambiarCampo}
          required
        />

        <label htmlFor="prioridad">Prioridad</label>
        <select
          id="prioridad"
          name="prioridad"
          value={formulario.prioridad}
          onChange={cambiarCampo}
        >
          <option>Alta</option>
          <option>Media</option>
          <option>Baja</option>
        </select>

        <label htmlFor="estado">Estado</label>
        <select
          id="estado"
          name="estado"
          value={formulario.estado}
          onChange={cambiarCampo}
        >
          <option>Pendiente</option>
          <option>En progreso</option>
          <option>Completada</option>
        </select>

        <button className="primary-btn" type="submit">
          {editando ? 'Guardar cambios' : '+ Crear tarea'}
        </button>

        {editando && (
          <button
            className="cancel-btn"
            type="button"
            onClick={cancelarEdicion}
          >
            Cancelar edición
          </button>
        )}
      </form>
    </aside>
  )
}

export default TaskForm
