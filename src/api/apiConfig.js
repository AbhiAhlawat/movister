const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ce2b7935785b78c67b44997a3b91739d',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;