const postsContext = require.context('src/posts/en', true, /\.md$/)
const postsRoutes = postsContext.keys().map(function (path) {
  // extract file name from path file
  let slug = (path.split('/').pop().split('.'))[0]

  return {
    slug: slug,
    title: slug.replace(/-/g, ' ')
  }
})

export default postsRoutes
