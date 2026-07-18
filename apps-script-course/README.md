# Prueba de acceso automatico al curso

Esta carpeta contiene el proyecto de Google Apps Script para compartir de forma privada los cursos despues de un pago aprobado en Wompi.

`1T1l6-11l7LR0X9MntAS82OfwQCdh5xL_`

El proyecto rapido tambien reconoce estos productos:

| Referencia | Producto | Carpeta | Precio |
| --- | --- | --- | --- |
| `CAJ-CURSO-TEST-` | Curso de prueba | `1T1l6-11l7LR0X9MntAS82OfwQCdh5xL_` | $20.000 COP |
| `CAJ-NEUROCALMA-444-` | Neurocalma 444 | `1haJPsNSXJ0WVFm9saZodkWe6mycG173u` | $30.000 COP |
| `CAJ-CEREBROS-INTERACTIVO-` | Biblioteca interactiva Cerebros digitales | `1zvGKwEMDJhY_u-mvnMd7PYl6FlKbbELs` | $50.000 COP |

## Primera prueba, sin pago

1. Crear un proyecto independiente en https://script.google.com.
2. Crear un archivo por cada `.gs` de esta carpeta y pegar su contenido.
3. Mostrar el archivo de manifiesto desde Configuracion del proyecto y reemplazar `appsscript.json`.
4. En Servicios, comprobar que Google Drive API aparece como `Drive` version `v3`.
5. Abrir Configuracion del proyecto > Propiedades de la secuencia de comandos.
6. Crear estas propiedades:

| Propiedad | Valor |
| --- | --- |
| `TEST_STUDENT_EMAIL` | Otro correo de Google usado para probar |
| `COURSE_PRICE_IN_CENTS` | Precio del curso en centavos de COP |
| `WOMPI_ENVIRONMENT` | `test` |
| `WOMPI_EVENTS_SECRET` | Secreto de eventos Sandbox |
| `ADMIN_EMAIL` | Correo del administrador |
| `SUPPORT_EMAIL` | Correo de soporte |
| `SUPPORT_WHATSAPP` | Numero de WhatsApp de soporte |

No hace falta crear `SHEET_ID`: la funcion de preparacion lo crea automaticamente.

7. Ejecutar `setupCourseAutomation` y aceptar los permisos de Google.
8. Ejecutar `testConfiguration`.
9. Ejecutar `testManualAccess`.
10. Abrir el correo `TEST_STUDENT_EMAIL` y pulsar **Entrar al curso**.

El correo de prueba debe ser diferente al propietario de la carpeta; de lo contrario no se comprueba una concesion de acceso real.

## Despliegue web

Despues de aprobar la prueba manual:

1. Implementar > Nueva implementacion.
2. Tipo: Aplicacion web.
3. Ejecutar como: el propietario del proyecto.
4. Quien tiene acceso: cualquier usuario.
5. Copiar la URL final terminada en `/exec`.

La URL se configurara en Vercel como `COURSE_APPS_SCRIPT_URL`. Wompi seguira llamando al webhook existente de Vercel; no se debe reemplazar la URL de eventos actual.

Para probar Cerebros Digitales, la referencia que debe generar la web comienza por
`CAJ-CEREBROS-INTERACTIVO-` y el valor debe ser `5000000` centavos de COP.

## Seguridad

- La carpeta debe permanecer en acceso general `Restringido`.
- No guardar secretos en estos archivos.
- Usar secretos Sandbox durante la prueba.
- El script valida firma, ambiente, estado, moneda, referencia y valor antes de conceder acceso.
