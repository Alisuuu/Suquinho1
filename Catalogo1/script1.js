// Crie um objeto App global se ainda não existir
window.App = window.App || {};

// Adicione as constantes ao objeto App
App.Constants = {
    TMDB_API_KEY: '5e5da432e96174227b25086fe8637985',
    TMDB_BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p/w500',
    // REMOVIDO: GEMINI_API_KEY não é mais necessário
};
