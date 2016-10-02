import {app, router} from './app'

export default function render (locals, cb) {
  const renderer = require('vue-server-renderer').createRenderer()

  console.log('\nCurrent path: ', locals.path)
  router.push(locals.path)

  renderer.renderToString(app, function (err, html) {
    if (err) {
      console.log('vue-server-renderer ERROR: ', err)
      return
    }

    console.log('Html generated: \n', html)
    cb(null, `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Gean Marroquin</title>
          <link rel="stylesheet" href="/static/css/app.css" />
        </head>
        <body>
          ${html}
          <script src="/static/js/app.js"></script>
        </body>
      </html>
    `)
  })
}
