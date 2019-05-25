
 var myperfil = JSON.parse(perfil);
    myperfil[0].photo;
    myperfil[0].nombre;
    myperfil[0].descripcion;
    myperfil[0].color;
    myperfil[0].libro;
    myperfil[0].musica;
    myperfil[0].video_juego;
    myperfil[0].lenguajes;
    myperfil[0].email;
    myperfil[0].CI;
    myperfil[0].email;
    myperfil[0].genero;
    myperfil[0].fecha_nacimiento;

    var myconfig = JSON.parse(config);
    myconfig[0].color;
    myconfig[0].libro;
    myconfig[0].musica;
    myconfig[0].video_juego;
    myconfig[0].lenguajes;
    myconfig[0].comunicarse;
    myconfig[0].CI;
    myconfig[0].genero;
    myconfig[0].fecha_nacimiento;

    document.getElementById("perfil").innerHTML = `<div class="clearfix"><h1><img src=${myperfil[0].photo}>${myperfil[0].nombre}</h1>
    <p class="parrafo">${myperfil[0].descripcion}</p>
 <table>
 <tr>
    <td>${myconfig[0].color}</td>
   <td>${myperfil[0].color}<td>
    </tr>
 <tr>
      <td>${myconfig[0].libro}</td>
            <td>${myperfil[0].libro}</td>
   </tr>
   <tr>
      <td>${myconfig[0].musica}</td>
         <td>${myperfil[0].musica}</td>
   </tr>
   <tr>
         <td>${myconfig[0].video_juego}:</td>
            <td>${myperfil[0].video_juego}</td>
      </tr>
      <tr>
            <td class="negrita">${myconfig[0].lenguajes}</td>
               <td class="negrita">${myperfil[0].lenguajes}</td>
         </tr>
   </table>
 <p>${myconfig[0].comunicarse}<a href="mailto:${myperfil[0].email}">${myperfil[0].email}</a></p>
</div>`;

