const publicRoutes = {
    HOME: '/',
    GAME: '/juego',
    FORUM: '/foro',
    ABOUT: '/nosotros',
    LOGIN: '/inicioSesion',
    REGISTER: '/registrar'
};
const privateRoutes = {};

const Routes = {
    ...publicRoutes,
    ...privateRoutes
};

export default Routes;
