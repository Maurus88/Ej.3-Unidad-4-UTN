document.addEventListener('DOMContentLoaded', function() {
    var alumnos = [
      { nombre: 'Juan Gomez', nota: 7 },
      { nombre: 'Pedro Rodriguez', nota: 4 },
      { nombre: 'Roxana García', nota: 8 },
      { nombre: 'Luciano Lopez', nota: 5 },
      { nombre: 'Fernanda Gimenez', nota: 6 },
      { nombre: 'Florencia Martinez', nota: 10 },
      { nombre: 'Raul Sanchez', nota: 7 },
      { nombre: 'Sandra Figueroa', nota: 8 }
    ];
  
    var alumnosAprobados = filtrarAprobados(alumnos);
  
    var alumnosDiv = document.getElementById('alumnos');
    var listaAlumnos = document.createElement('ul');
  
    for (var i = 0; i < alumnosAprobados.length; i++) {
      var alumno = alumnosAprobados[i];
      var item = document.createElement('li');
      item.appendChild(document.createTextNode(alumno.nombre + ' - ' + alumno.nota));
      listaAlumnos.appendChild(item);
    }
  
    alumnosDiv.appendChild(listaAlumnos);
  
    function filtrarAprobados(array) {
      return array.filter(function(alumno) {
        return alumno.nota >= 7;
      });
    }
  });