# Activacion de Wompi y descargas privadas

La integracion crea una referencia distinta por compra, consulta el estado real de
la transaccion en Wompi y solo entrega el PDF cuando el estado es `APPROVED`.
La URL de descarga de Vercel Blob es privada, cambia en cada confirmacion y vence
despues de 15 minutos.

## 1. Crear el almacenamiento privado

En el proyecto de Vercel:

1. Abrir `Storage`.
2. Seleccionar `Create Database` y luego `Blob`.
3. Elegir acceso `Private` y conectarlo al proyecto `carlosjimenez`.
4. Subir el PDF con el pathname `libros/el-neuromarketing.pdf`.

## 2. Configurar variables en Vercel

Copiar las variables de `.env.example` en `Settings > Environment Variables`.
Durante las pruebas deben usarse las llaves `test` de Wompi. Cuando todo funcione,
cambiar juntas las cuatro variables de Wompi a sus valores de produccion.

Para generar `WOMPI_SESSION_SECRET` se puede ejecutar:

```bash
openssl rand -hex 32
```

No se deben guardar llaves reales en GitHub ni en archivos del proyecto.

## 3. Registrar el webhook

En el comercio Wompi, abrir `Desarrollo` y configurar la URL de eventos:

```text
https://carlosalbertojimenez.com.co/api/wompi/events
```

Sandbox y produccion tienen configuraciones separadas. Cada ambiente debe usar su
URL y su respectivo secreto de eventos.

## 4. Probar antes de cobrar

1. Desplegar con `WOMPI_ENVIRONMENT=sandbox`.
2. Abrir el producto El Neuromarketing y pulsar `Comprar con Wompi`.
3. Completar una transaccion aprobada con los datos de prueba de Wompi.
4. Verificar que Wompi regrese a `/pago/resultado` y aparezca `Descargar PDF`.
5. Probar tambien una transaccion rechazada; no debe mostrar descarga.

Los otros dos libros permanecen como `Proximamente` hasta subir sus PDF y definir
`BLOB_DIALOGO_PATH` y `BLOB_CEREBROS_PATH`.
