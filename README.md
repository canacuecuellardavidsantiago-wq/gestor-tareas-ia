
# TaskFlow IA - Gestor de tareas CRUD

## 1. Descripción del proyecto

TaskFlow IA es una aplicación web desarrollada con React y
JavaScript que permite gestionar tareas mediante las cuatro
operaciones fundamentales de un sistema CRUD:

- CREATE: Crear nuevas tareas.
- READ: Consultar las tareas registradas.
- UPDATE: Actualizar la información de una tarea.
- DELETE: Eliminar tareas existentes.

La aplicación fue desarrollada como parte del seminario
"Gestión de Software Ágil asistido por Inteligencia Artificial".

Durante el desarrollo se utilizó ChatGPT como herramienta
de apoyo para la generación, explicación, depuración y
refactorización del código.

## 2. Objetivo

Desarrollar una aplicación web funcional mediante el uso
de prompts de inteligencia artificial, aplicando conceptos
de desarrollo ágil, componentes reutilizables y buenas
prácticas de programación.

## 3. Tecnologías utilizadas

| Tecnología | Descripción |
|------------|-------------|
| React | Biblioteca para construir interfaces |
| JavaScript | Lenguaje de programación |
| HTML | Estructura de la aplicación |
| CSS | Diseño y estilos |
| Vite | Herramienta de desarrollo |
| localStorage | Almacenamiento local de tareas |
| ChatGPT | Asistencia mediante inteligencia artificial |
| Git y GitHub | Control de versiones y repositorio |

## 4. Funcionalidades

### Crear tareas

El usuario puede registrar una nueva tarea indicando:

- Título
- Descripción
- Prioridad (Alta, Media o Baja)
- Estado (Pendiente, En progreso o Completada)

### Consultar tareas

La aplicación muestra todas las tareas registradas mediante
tarjetas que contienen su información.

También presenta estadísticas dinámicas del número de tareas
totales, pendientes y completadas.

### Actualizar tareas

El usuario puede seleccionar una tarea, modificar sus datos
y guardar los cambios.

También puede cancelar la edición.

### Eliminar tareas

Permite eliminar tareas mediante un botón que solicita
confirmación antes de realizar la operación.

### Persistencia de información

La información se almacena en localStorage.

Esto permite conservar los datos al actualizar o cerrar
la página, siempre que se utilice el mismo navegador
y no se borren sus datos locales.

## 5. Instalación y ejecución

### Requisitos

- Node.js compatible con Vite
- npm
- Visual Studio Code o editor equivalente
- Navegador web

### Instrucciones

1. Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

2. Entrar en la carpeta del proyecto:

```bash
cd gestor-tareas-ia
```

3. Instalar las dependencias:

```bash
npm install
```

4. Iniciar el servidor:

```bash
npm run dev
```

5. Abrir en el navegador la URL indicada por Vite,
   normalmente http://localhost:5173/

## 6. Estructura del proyecto

```text
gestor-tareas-ia/
|
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- TaskCard.jsx
|   |   |-- TaskForm.jsx
|   |-- App.jsx
|   |-- App.css
|   |-- index.css
|   |-- main.jsx
|
|-- docs/
|   |-- capturas/
|       |-- dashboard.png
|       |-- creacion.png
|       |-- edicion.png
|
|-- index.html
|-- package.json
|-- README.md
|-- vite.config.js
```

## 7. Capturas de pantalla

### Panel principal

![Dashboard de TaskFlow IA](docs/capturas/dashboard.png)

### Creación de tareas

![Formulario de tareas](docs/capturas/creacion.png)

### Edición de tareas

![Edición de tareas](docs/capturas/edicion.png)

## 8. Desarrollo asistido por inteligencia artificial

Para el desarrollo de este proyecto se utilizó ChatGPT
mediante prompts específicos, siguiendo un proceso
incremental de construcción, pruebas y refactorización.

### Prompt 1 - Planificación y configuración

**Prompt:**

"Actúa como un desarrollador frontend experto en React
y JavaScript. Necesito desarrollar una aplicación web
CRUD llamada TaskFlow IA para gestionar tareas como
parte de un trabajo académico de gestión de software
ágil asistido por inteligencia artificial.

Utilizaremos React, Vite, CSS y localStorage.

Primero explícame cómo configurar el entorno en Visual
Studio Code, crear el proyecto e iniciar el servidor de
desarrollo. Proporciona instrucciones claras, comandos
listos para ejecutar y una explicación de cada paso."

**Objetivo:**

Configurar el entorno de desarrollo y establecer
la arquitectura tecnológica inicial.

**Resultado:**

Proyecto React creado mediante Vite y ejecutado
correctamente en un servidor local.

### Prompt 2 - Diseño de la interfaz

**Prompt:**

"Actúa como un desarrollador frontend experto en React
y diseño UI/UX. Estoy desarrollando una aplicación
llamada TaskFlow IA para gestionar tareas.

Necesito una interfaz moderna, profesional y responsive
con un dashboard que incluya estadísticas, un formulario
con título, descripción, prioridad y estado, un listado
de tareas y botones para editar y eliminar.

Utiliza React con JavaScript y CSS puro, sin librerías
adicionales. Organiza el código en App.jsx, App.css
e index.css.

En esta primera etapa desarrolla únicamente la interfaz
visual con datos de ejemplo, dejando las operaciones CRUD
para una implementación posterior.

Proporciona código completo listo para copiar y pegar."

**Objetivo:**

Construir la interfaz gráfica inicial de la aplicación.

**Resultado:**

Dashboard con estadísticas, tarjetas de tareas y formulario.

### Prompt 3 - Implementación del CRUD

**Prompt:**

"Actúa como un desarrollador experto en React.
Ya tengo creada la interfaz visual de TaskFlow IA.

Necesito implementar las cuatro operaciones CRUD:
crear, consultar, actualizar y eliminar tareas.

Utiliza useState para gestionar los datos y useEffect
junto con localStorage para conservarlos cuando
se recargue el navegador.

Incluye validación del formulario, confirmación antes
de eliminar, estadísticas dinámicas y un botón para
cancelar la edición.

Conserva el diseño CSS existente y proporciona el
código completo de App.jsx listo para copiar y pegar."

**Objetivo:**

Implementar las cuatro funcionalidades CRUD y la
persistencia de los datos.

**Resultado:**

Aplicación funcional que permite registrar, consultar,
modificar y eliminar tareas.

### Prompt 4 - Refactorización de tarjetas

**Prompt:**

"Actúa como desarrollador senior especializado en React.

Tengo una aplicación CRUD de tareas llamada TaskFlow IA,
desarrollada con React y localStorage.

Actualmente, toda la interfaz y la lógica están en App.jsx.

Necesito refactorizar el proyecto aplicando separación
de responsabilidades y componentes reutilizables.

Extrae primero la tarjeta de cada tarea a un componente
TaskCard.jsx dentro de src/components.

Conserva los estilos CSS, la funcionalidad de editar
y eliminar y la estructura actual.

Explica qué cambios debo hacer, en qué archivos y por qué
esta refactorización mejora la calidad del código."

**Objetivo:**

Separar la visualización de cada tarea de la lógica principal.

**Resultado:**

Creación del componente reutilizable TaskCard.jsx,
manteniendo el funcionamiento del CRUD.

### Prompt 5 - Refactorización del formulario

**Prompt:**

"Actúa como desarrollador senior experto en React.

Mi aplicación TaskFlow IA ya tiene todas las operaciones
CRUD funcionando y he separado las tarjetas de tareas
en TaskCard.jsx.

Ahora necesito refactorizar el formulario de creación
y edición para convertirlo en un componente reutilizable
llamado TaskForm.jsx dentro de src/components.

Utiliza props para comunicarlo con App.jsx.

Conserva las validaciones, los eventos, la edición y el
diseño existente.

Indica exactamente qué código debo crear, importar y
reemplazar, sin modificar la lógica CRUD."

**Objetivo:**

Aplicar modularidad y separación de responsabilidades.

**Resultado:**

Creación de TaskForm.jsx, componente independiente
encargado de mostrar el formulario de tareas.

## 9. Pruebas realizadas

| Prueba | Resultado |
|--------|-----------|
| Crear una tarea | Correcto |
| Consultar tareas | Correcto |
| Editar una tarea | Correcto |
| Eliminar una tarea | Correcto |
| Guardar datos en localStorage | Correcto |
| Refactorización de TaskCard | Correcto |

## 10. Video demostrativo

Enlace del video:

PENDIENTE_AGREGAR_URL_DEL_VIDEO

El video presenta:

- Desarrollo mediante prompts de inteligencia artificial.
- Ejecución de la aplicación.
- Demostración de las operaciones CRUD.
- Refactorización del código.
- Resultados del proyecto.

## 11. Conclusiones

El proyecto permitió comprender los fundamentos de una
aplicación CRUD utilizando React y JavaScript.

La inteligencia artificial facilitó la planificación,
generación de código, identificación de errores y
refactorización.

Se comprobó que la IA puede servir como herramienta
de apoyo durante el desarrollo ágil de software,
siempre que sus resultados sean revisados y probados.

La aplicación demuestra cómo construir una solución
funcional mediante componentes reutilizables y
almacenamiento local.
