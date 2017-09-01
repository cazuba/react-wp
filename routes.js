const nextRoutes = require('next-routes');

const routes = nextRoutes();
routes.add('blog', '/blog/:slug');

module.exports = routes;
