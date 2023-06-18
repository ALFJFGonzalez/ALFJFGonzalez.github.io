let miImage = document.querySelector('img');

miImage.onclick = function() {
	let miSrc = miImage.getAttribute('src');
	if (miSrc === 'images/en-escena.jpeg') {
		miImage.setAttribute('src','images/magos-famosos.jpeg');
	} else {
		miImage.setAttribute('src','images/en-escena.jpeg');
	}
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
	let miNombre = prompt('Por favor, ingresa tu nombre.');
	if (!miNombre) {
		estableceNombreUsuario();
	} else {
		localStorage.setItem('nombre', miNombre);
		miTitulo.textContent = 'La Magia es genial, ' + miNombre;
	}
}

if (!localStorage.getItem('nombre')) {
	estableceNombreUsuario();
} else {
	let nombreAlmacenado = localStorage.getItem('nombre');
	miTitulo.textContent = 'La magia es genial, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
	estableceNombreUsuario();
}
