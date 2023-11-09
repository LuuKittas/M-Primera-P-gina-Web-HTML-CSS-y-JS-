document.addEventListener('DOMContentLoaded', function () {
    // Función para cargar el archivo JSON y crear las cards
    function cargarHoteles() {
        fetch('hoteles.json') // Carga el archivo JSON
            .then(response => response.json())
            .then(data => {
                const contenedor = document.querySelector('.contenedor');

                data.hoteles.forEach(hotel => {
                    const card = document.createElement('div');
                    card.className = 'card';

                    const figure = document.createElement('figure');
                    const img = document.createElement('img');
                    img.src = hotel.imagen;
                    img.className = 'imgs';
                    img.alt = 'Fondo de Hoteles';
                    figure.appendChild(img);

                    const contenido = document.createElement('div');
                    contenido.className = 'contenido';

                    const titulo = document.createElement('h3');
                    titulo.textContent = hotel.titulo;

                    const descripcion = document.createElement('p');
                    descripcion.textContent = hotel.descripcion;

                    const enlace = document.createElement('a');
                    enlace.href = hotel.enlace;
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

    // Llama a la función para cargar los hoteles cuando la página esté lista
    cargarHoteles();
});
