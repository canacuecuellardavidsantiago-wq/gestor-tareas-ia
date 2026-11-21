
import { useState, useEffect } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'
import TaskForm from './components/TaskForm'

const tareasIniciales = [
  {
    id: 1,
    titulo: 'Preparar presentación del proyecto',
    descripcion: 'Organizar las diapositivas del seminario.',
    prioridad: 'Alta',
    estado: 'Pendiente',
  },
  {
    id: 2,
    titulo: 'Revisar documentación',
    descripcion: 'Estudiar los conceptos de CRUD y React.',
    prioridad: 'Media',
    estado: 'En progreso',
  },
  {
    id: 3,
    titulo: 'Configurar el proyecto',
    descripcion: 'Crear la aplicación con React y Vite.',
    prioridad: 'Baja',
    estado: 'Completada',
  },
]

const formularioVacio = {
  titulo: '',
  descripcion: '',
  prioridad: 'Media',
  estado: 'Pendiente',
}

function App() {
  // READ: cargar tareas guardadas en el navegador
  const [tareas, setTareas] = useState(() => {
    try {
      const guardadas = localStorage.getItem('taskflow-tareas')

      if (guardadas !== null) {
        const datos = JSON.parse(guardadas)
        return Array.isArray(datos) ? datos : tareasIniciales
      }

      return tareasIniciales
    } catch {
      return tareasIniciales
    }
  })

  const [formulario, setFormulario] = useState(formularioVacio)
  const [idEditando, setIdEditando] = useState(null)

  // Guardar automáticamente cuando cambian las tareas
  useEffect(() => {
    localStorage.setItem('taskflow-tareas', JSON.stringify(tareas))
  }, [tareas])

  // Actualizar los campos del formulario
  const cambiarCampo = (evento) => {
    const { name, value } = evento.target

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }))
  }

  // CREATE y UPDATE
  const guardarTarea = (evento) => {
    evento.preventDefault()

    if (!formulario.titulo.trim() || !formulario.descripcion.trim()) {
      alert('Completa el título y la descripción.')
      return
    }

    const datos = {
      ...formulario,
      titulo: formulario.titulo.trim(),
      descripcion: formulario.descripcion.trim(),
    }

    if (idEditando !== null) {
      // UPDATE: modificar una tarea existente
      setTareas((anteriores) =>
        anteriores.map((tarea) =>
          tarea.id === idEditando
            ? { ...tarea, ...datos }
            : tarea
        )
      )
    } else {
      // CREATE: agregar una nueva tarea
      const nuevaTarea = {
        id: crypto.randomUUID(),
        ...datos,
      }

      setTareas((anteriores) => [...anteriores, nuevaTarea])
    }

    cancelarEdicion()
  }

  // Cargar los datos de la tarea para editarla
  const editarTarea = (tarea) => {
    setFormulario({
      titulo: tarea.titulo,
      descripcion: tarea.descripcion,
      prioridad: tarea.prioridad,
      estado: tarea.estado,
    })

    setIdEditando(tarea.id)
  }

  // DELETE: eliminar una tarea
  const eliminarTarea = (id) => {
    const confirmar = window.confirm(
      '¿Estás seguro de que deseas eliminar esta tarea?'
    )

    if (!confirmar) return

    setTareas((anteriores) =>
      anteriores.filter((tarea) => tarea.id !== id)
    )

    if (idEditando === id) {
      cancelarEdicion()
    }
  }

  // Limpiar formulario
  const cancelarEdicion = () => {
    setFormulario({ ...formularioVacio })
    setIdEditando(null)
  }

  // Estadísticas calculadas automáticamente
  const total = tareas.length

  const pendientes = tareas.filter(
    (tarea) => tarea.estado === 'Pendiente'
  ).length

  const completadas = tareas.filter(
    (tarea) => tarea.estado === 'Completada'
  ).length

  return (
    <div className="app">
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <div className="logo-icon">✓</div>
            <span>TaskFlow <strong>IA</strong></span>
          </div>

          <span className="header-label">
            Gestor inteligente de tareas
          </span>
        </div>
      </header>

      <main className="container">
        <section className="welcome">
          <div>
            <span className="eyebrow">PANEL DE CONTROL</span>
            <h1>Mis tareas</h1>
            <p>
              Organiza tus actividades y mantén el control
              de tus proyectos.
            </p>
          </div>

          <span className="preview-tag">CRUD activo</span>
        </section>

        <section className="stats">
          <div className="stat-card">
            <span className="stat-label">Total de tareas</span>
            <strong>{total}</strong>
            <span className="stat-footer">
              Actividades registradas
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Pendientes</span>
            <strong>{pendientes}</strong>
            <span className="stat-footer">Por realizar</span>
          </div>

          <div className="stat-card">
            <span className="stat-label">Completadas</span>
            <strong>{completadas}</strong>
            <span className="stat-footer">
              Trabajo finalizado
            </span>
          </div>
        </section>

        <div className="dashboard">
          {/* READ: mostrar todas las tareas */}
          <section className="panel">
            <div className="panel-header">
              <div>
                <h2>Listado de tareas</h2>
                <p>Consulta tus actividades registradas.</p>
              </div>

              <span className="count">{total} tareas</span>
            </div>

            <div className="task-list">
              {tareas.length === 0 ? (
                <div className="empty-state">
                  No tienes tareas registradas.
                  ¡Crea tu primera tarea!
                </div>
              ) : (
                

    tareas.map((tarea) => (
      <TaskCard
        key={tarea.id}
        tarea={tarea}
        onEditar={editarTarea}
        onEliminar={eliminarTarea}
      />
    ))
  )}

            </div>
          </section>

          {/* Formulario CREATE / UPDATE */}
       
<TaskForm
  formulario={formulario}
  idEditando={idEditando}
  cambiarCampo={cambiarCampo}
  guardarTarea={guardarTarea}
  cancelarEdicion={cancelarEdicion}
/>

        </div>
      </main>

      <footer className="footer">
        TaskFlow IA · Proyecto académico desarrollado
        con asistencia de IA
      </footer>
    </div>
  )
}

export default App

