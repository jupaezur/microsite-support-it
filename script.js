document.getElementById('btn-vcard').addEventListener('click', function () {
  // Reemplaza con tus datos reales
  const nombre = "Juan Paez";
  const cargo = "Soporte Técnico e Infraestructura IT";
  const telefono = "+573193774409";
  const correo = "jupaezur@gmail.com";
  const ciudad = "Facatativá;Cundinamarca;;Colombia";

  // Formato estándar vCard 3.0
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:Paez;Juan ;;;`,
    `FN:${nombre}`,
    `TITLE:${cargo}`,
    `TEL;TYPE=CELL,VOICE:${telefono}`,
    `EMAIL;TYPE=PREF,INTERNET:${correo}`,
    `ADR;TYPE=WORK:;;${ciudad}`,
    "END:VCARD"
  ].join("\n");

  // Crear archivo descargable en memoria
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Contacto_Soporte_Tecnico.vcf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});