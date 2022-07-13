<template>
    <header>
        <h1>
            <router-link to="/">Finde a Coach</router-link>
        </h1>
        <nav>
            <ul>
                <li>
                    <router-link to="/coaches">All Coaches</router-link>
                </li>
                <li>
                    <router-link to="/requests">Requests</router-link>
                </li>
            </ul>
            <div>

            </div>
        </nav>
    </header>
</template>


<style scoped>
header {
  width: 100%;
  height: 8rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>