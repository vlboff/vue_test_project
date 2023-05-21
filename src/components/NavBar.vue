<template>
  <nav>
    <ul class="nav-list">
      <li><router-link to="/" class="nav-link">POST-ITS</router-link></li>
      <li><router-link to="/search">SEARCH POSTS</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
  .nav-list {
    display: flex;
    gap: 30px;
    list-style: none;
  }

  a {
    font-size: 1.5rem;
    text-decoration: none;
    color: black;
  }

  .router-link-active {
    color: var(--main_red);
  }
</style>
