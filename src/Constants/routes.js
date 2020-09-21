const publicRoutes = {
    HOME: '/',
    GAME: '/juego',
    MAP: '/juego/mapa',
    QUESTION:'/juego/preguntas',
    FORUM: '/foro',
    ABOUT: '/nosotros',
    LOGIN: '/inicioSesion',
    REGISTER: '/registrar',
    ORO: '/foro/elOro'
};
const privateRoutes = {};

const Routes = {
    ...publicRoutes,
    ...privateRoutes
};

export default Routes;
