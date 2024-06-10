export const getGif = async (category) => {
    const apiKey = `https://api.giphy.com/v1/gifs/search?api_key=njN35BRROAOjgj923VXKKnBdcPALyBp9&q=${category}&limit=10`;
    const res = await fetch(apiKey);
    const { data = []} = await res.json();

    const gifs = data.map((img)=>({
      id: img.id,
      title: img.title,
      url: img.images.fixed_height.url
    }))
    

    return gifs
  };