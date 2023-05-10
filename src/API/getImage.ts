/* eslint-disable implicit-arrow-linebreak */
const getImage = async (id: number | string) =>
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => res.json())
    .then((res) => res.image);

export default getImage;
