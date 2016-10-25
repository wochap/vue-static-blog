# Vue static blog

## ¿Como funciona?

### En desarrollo

Usamos [HMR](https://webpack.github.io/docs/hot-module-replacement.html) para que la aplicación se actualize sin refrescar la ventana.

### En producción

Usamos el plugin [static-site-generator-webpack-plugin](https://github.com/markdalgleish/static-site-generator-webpack-plugin) que recibe el html generado por [vue-server-renderer](https://www.npmjs.com/package/vue-server-renderer), todo esto con webpack targeteado para `node`.

Una vez se carge en el cliente, vue `hidratara` el existente `DOM`, en vez de crear nuevos `DOM nodes`.

## Añadir/Modificar una ruta

Para ello hay que modificar 2 archivos:

* `src/app/config/routes.js`: Aqui estan definidas las rutas de `vue-router`.
* `src/build-config/routes.js`: Aqui exportamos las rutas que vamos a renderizar (las rutas de los posts son autogenerados).
