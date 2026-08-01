# Despliegue de pruebas en Hostinger

Esta aplicación se despliega como **Node.js Web App**. No se debe usar como
sitio estático porque las rutas de Wompi necesitan ejecutarse en el servidor.

## Configuración de la aplicación

- Repositorio: `https://github.com/jorgegdi25/carlosjimenezweb.git`
- Rama inicial: `hostinger-staging`
- Versión de Node.js: `20.9` o superior
- Comando de instalación: `npm ci`
- Comando de compilación: `npm run build`
- Comando de inicio: `npm run start`

## Variables de entorno

Configurar los valores directamente en hPanel. Nunca guardarlos en GitHub.

```text
SITE_URL
WOMPI_ENVIRONMENT
WOMPI_PUBLIC_KEY
WOMPI_INTEGRITY_SECRET
WOMPI_EVENTS_SECRET
WOMPI_SESSION_SECRET
BLOB_READ_WRITE_TOKEN
BLOB_NEUROMARKETING_PATH
BLOB_DIALOGO_PATH
BLOB_CEREBROS_PATH
COURSE_APPS_SCRIPT_URL
COURSE_AUTOMATION_SECRET
COURSE_CEREBROS_DIGITALES_ENABLED
```

Para la primera prueba, `SITE_URL` debe contener la URL temporal o el
subdominio asignado por Hostinger y `WOMPI_ENVIRONMENT` debe ser `sandbox`.

`BLOB_READ_WRITE_TOKEN` permite que el servidor de Hostinger acceda
temporalmente a los libros privados guardados en Vercel Blob. En una fase
posterior los archivos pueden trasladarse al almacenamiento de Hostinger.

## Orden de validación

1. Verificar que todas las páginas e imágenes carguen.
2. Configurar Wompi Sandbox y su URL de eventos.
3. Probar pagos aprobados, rechazados y pendientes.
4. Comprobar la entrega de libros y accesos a cursos.
5. Configurar las credenciales de producción.
6. Conectar el dominio principal solo después de aprobar las pruebas.
