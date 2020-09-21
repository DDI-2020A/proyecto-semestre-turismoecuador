const publicRoutes = {
    HOME: '/',
    GAME: '/juego',
    MAP: '/juego/mapa',
    QUESTION:'/juego/mapa/preguntas',
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
