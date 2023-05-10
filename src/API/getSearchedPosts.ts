/* eslint-disable implicit-arrow-linebreak */
const getSearchedPosts = async (query: string) =>
  fetch(`https://dummyjson.com/posts/search?q=${query}`)
    .then((res) => res.json())
    .then((res) => res.posts);

export default getSearchedPosts;
