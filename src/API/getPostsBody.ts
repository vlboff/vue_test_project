/* eslint-disable implicit-arrow-linebreak */
const getPostsBody = async () =>
  fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((res) => res.posts);

export default getPostsBody;
