
function TaskCard({ tarea, onEditar, onEliminar }) {
  return (
    <article className="task-card">
      <div className="task-top">
        <h3>{tarea.titulo}</h3>

        <span
          className={`priority priority-${tarea.prioridad.toLowerCase()}`}
        >
          {tarea.prioridad}
        </span>
      </div>

      <p>{tarea.descripcion}</p>

      <div className="task-bottom">
        <span className="task-status">
          {tarea.estado}
        </span>

        <div className="task-actions">
          <button
            type="button"
            onClick={() => onEditar(tarea)}
          >
            Editar
          </button>

          <button
            type="button"
            className="delete-btn"
            onClick={() => onEliminar(tarea.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </article>
  )
}

export default TaskCard
