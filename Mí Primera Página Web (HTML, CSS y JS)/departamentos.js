document.addEventListener('DOMContentLoaded', function () {

    function cargarDepartamentos() {
        fetch('departamentos.json')
            .then(response => response.json())
            .then(data => {
                const contenedor = document.querySelector('.contenedor');

                // Filtrado de precios
                const form = document.createElement('form');
                form.innerHTML = `
                    <label for="minPrecio">Precio mínimo:</label>
                    <input type="number" id="minPrecio" name="minPrecio" />
                    <label for="maxPrecio">Precio máximo:</label>
                    <input type="number" id="maxPrecio" name="maxPrecio" />
                    <button type="button" id="filtrarBtn">Filtrar</button>
                `;

                contenedor.appendChild(form);

                const filtrarBtn = document.getElementById('filtrarBtn');
                filtrarBtn.addEventListener('click', filtrarPorPrecio);

                data.departamentos.forEach(depto => {
                    renderizarDepartamento(contenedor, depto);
                });
            })
            .catch(error => {
                console.error('Error al cargar el archivo JSON: ' + error);
            });
    }

    function renderizarDepartamento(contenedor, depto) {
        const card = document.createElement('div');
        card.className = 'card';

        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = depto.imagen;
        img.className = 'imgs';
        img.alt = 'Fondo de Departamentos';
        figure.appendChild(img);

        const contenido = document.createElement('div');
        contenido.className = 'contenido';

        const titulo = document.createElement('h3');
        titulo.textContent = depto.titulo;

        const descripcion = document.createElement('p');
        descripcion.textContent = depto.descripcion;

        const enlace = document.createElement('a');
        enlace.href = depto.enlace;
        enlace.textContent = 'Ver en Detalle';

        contenido.appendChild(titulo);
        contenido.appendChild(descripcion);
        contenido.appendChild(enlace);

        card.appendChild(figure);
        card.appendChild(contenido);

        contenedor.appendChild(card);
    }

    function filtrarPorPrecio() {
        const minPrecio = parseFloat(document.getElementById('minPrecio').value) || 0;
        const maxPrecio = parseFloat(document.getElementById('maxPrecio').value) || Infinity;

        const contenedor = document.querySelector('.contenedor');
        contenedor.innerHTML = '';

        fetch('departamentos.json')
            .then(response => response.json())
            .then(data => {
                data.departamentos.forEach(depto => {
                    if (depto.precio >= minPrecio && depto.precio <= maxPrecio) {
                        renderizarDepartamento(contenedor, depto);
                    }
                });
            })
            .catch(error => {
                console.error('Error al cargar el archivo JSON: ' + error);
            });
    }

    cargarDepartamentos();
});