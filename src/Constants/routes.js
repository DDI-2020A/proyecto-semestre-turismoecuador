const publicRoutes = {
    HOME: '/',
    GAME: '/juego',
    MAP: '/juego/mapa',
    QUESTION:'/juego/preguntas',
    FORUM: '/foro',
    ABOUT: '/nosotros',
    LOGIN: '/inicioSesion',
    REGISTER: '/registrar',
    GALAPAGOS: '/foro/galapagos',
    ORO: '/foro/elOro',
    ESMERALDAS: '/foro/esmeraldas',
    GUAYAS: '/foro/guayas',
    RIOS: '/foro/losRios',
    MANABI: '/foro/manabi',
    SANTA: '/foro/santaElena',
    TSACHILAS: '/foro/santoDomingoTsachilas',
    MORONA: '/foro/moronaSantiago',
    NAPO: '/foro/napo',
    ORELLANA: '/foro/orellana',
    PASTAZA: '/foro/pastaza',
    SUCUMBIOS: '/foro/sucumbios',
    ZAMORA: '/foro/zamoraChinchipe',
    AZUAY: '/foro/azuay',
    BOLIVAR: '/foro/bolivar',
    CARCHI: '/foro/carchi',
    CAÑAR: '/foro/cañar',
    CHIMBORAZO: '/foro/chimborazo',
    COTOPAXI: '/foro/cotopaxi',
    IMBABURA: '/foro/imbabura',
    LOJA: '/foro/loja',
    PICHINCHA: '/foro/pichincha',
    TUNGURAHUA: '/foro/tungurahua',
};
const privateRoutes = {};

const Routes = {
    ...publicRoutes,
    ...privateRoutes
};

export default Routes;
