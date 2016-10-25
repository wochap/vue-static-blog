# Vue static blog

> Static webpsite generator by webpack and vue

Un experimento personal, inspirado por:

* [gatsby](https://github.com/gatsbyjs/gatsby#gatsby)
* [phenomic](https://phenomic.io/)

Ambos usan react y webpack, aprovechando que react puede renderizar en el servidor (generar html) y reutilizarlo en el cliente.

Con la llegada de la version 2 de [vue](https://vuejs.org/) (que soporta pre-render) quize lograr lo mismo.

Y bueno, he aquí el resultado:

![Demo](https://drive.google.com/uc?export=download&id=0BwM5_eez3JnoZXB6Sk9oTmlHOWs)

Como puedes observar, cada vez que modificamos o agregamos un nuevo post, la aplicacion se actualiza sin refrescar la ventana (tambien si eliminamos un post).

Sin embargo aun hay cosas que añadir:

* Generar chunks por cada post.
* Solicitar post cuando se requieran.
* Refactorizar.

Al final del dia me decidi por usar react, puedes ver el proyecto final  [aqui](https://github.com/wochap/webpack-react-static-boilerplate), uno aprende bastante haciendo experimentos como este.

## Desarrollo

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
