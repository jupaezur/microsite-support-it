document.addEventListener('DOMContentLoaded', function () {
  const btnVcard = document.getElementById('btn-vcard');
  if (!btnVcard) return;

  // Datos actuales conservados
  const nombre = "Juan Paez";
  const apellido = "Paez";
  const primerNombre = "Juan";
  const cargo = "Soporte Técnico e Infraestructura IT";
  const telefono = "+573193774409";
  const correo = "jupaezur@gmail.com";
  const ciudad = "Facatativá;Cundinamarca;;Colombia";

  // CAMBIO 1: Saltos de línea CRLF (\r\n) para mejor compatibilidad en iOS
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${apellido};${primerNombre};;;`,
    `FN:${nombre}`,
    `TITLE:${cargo}`,
    `TEL;TYPE=CELL,VOICE:${telefono}`,
    `EMAIL;TYPE=PREF,INTERNET:${correo}`,
    `ADR;TYPE=WORK:;;${ciudad}`,
    "END:VCARD"
  ].join("\r\n");

  // CAMBIO 2: Enlace data URI directo en el <a> en lugar de Blob + URL.createObjectURL
  const dataUri = "data:text/vcard;charset=utf-8," + encodeURIComponent(vcard);
  btnVcard.setAttribute("href", dataUri);
  btnVcard.setAttribute("download", "Contacto_Soporte_Tecnico.vcf");
});
