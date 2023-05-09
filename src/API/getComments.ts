/* eslint-disable implicit-arrow-linebreak */
const getComments = async (id: number | string) =>
  fetch(`https://dummyjson.com/posts/${id}/comments`)
    .then((res) => res.json())
    .then((res) => res.comments);

export default getComments;
