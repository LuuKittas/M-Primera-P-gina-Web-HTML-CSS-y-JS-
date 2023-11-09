document.addEventListener('DOMContentLoaded', function () {
    // Función para cargar el archivo JSON y crear las cards
    function cargarCasas() {
        fetch('casas.json') // Carga el archivo JSON
            .then(response => response.json())
            .then(data => {
                const contenedor = document.querySelector('.contenedor');

                data.casas.forEach(casa => {
                    const card = document.createElement('div');
                    card.className = 'card';

                    const figure = document.createElement('figure');
                    const img = document.createElement('img');
                    img.src = casa.imagen;
                    img.className = 'imgs';
                    img.alt = 'Fondo de Casas';
                    figure.appendChild(img);

                    const contenido = document.createElement('div');
                    contenido.className = 'contenido';

                    const titulo = document.createElement('h3');
                    titulo.textContent = casa.titulo;

                    const descripcion = document.createElement('p');
                    descripcion.textContent = casa.descripcion;

                    const enlace = document.createElement('a');
                    enlace.href = casa.enlace;
                    enlace.textContent = 'Ver en Detalle';

                    contenido.appendChild(titulo);
                    contenido.appendChild(descripcion);
                    contenido.appendChild(enlace);

                    card.appendChild(figure);
                    card.appendChild(contenido);

                    contenedor.appendChild(card);
                });
            })
            .catch(error => {
                console.error('Error al cargar el archivo JSON: ' + error);
            });
    }

    // Llama a la función para cargar las casas cuando la página esté lista
    cargarCasas();
});
