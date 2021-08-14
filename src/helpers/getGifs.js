

 export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=0v43gGA1QfBV0MP36R6q763oTAGQR2yZ&limit=10&q=${encodeURI(category)}`;

    const response = await fetch(url);

    const { data } = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });


    return gifs;

}