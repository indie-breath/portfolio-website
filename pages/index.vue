<template>
  <div id="page">
    <div id="info-wrapper">
      <img src="" alt="" />
      <h1>indiebreath</h1>
      <p>Melbourne, Australia</p>
      <ul id="media-links">
        <li><a href="https://github.com/indie-breath"><img src="/github.svg" alt="" width="35px" /></a></li>
      </ul>
    </div>

    <div id="main">
      <div id="projects">
        <h1>Projects</h1>
        <div id="projects-list">
          
          <div class="project-content">
            <h3>Extant Project</h3>
            <p>An ARG being told through the medium of a website.</p>
            <a href="https://github.com/indie-breath/extant-project">https://github.com/indie-breath/extant-project</a>
          </div>
          <div class="project-content">
            <h3>Portfolio Website</h3>
            <p>My personal portfolio website.</p>
            <a href="https://github.com/indie-breath/portfolio-website">https://github.com/indie-breath/portfolio-website</a>
          </div>

        </div>
      </div>

      <div id="blog">
        <h1><a href="/blog">Blog</a></h1>
        <div id="blog-list">

          <ContentList path="/blog" v-slot="{ list }">
            <div class="blog-content" v-for="blog in list" :key="blog._path">
              <NuxtLink :to="blog._path">
                <img :src="blog.thumbnail" alt="">
                <h3>{{ blog.title }}</h3>
                <p>{{ blog.description }}</p>
              </NuxtLink>
            </div>
          </ContentList>

        </div>
      </div>
    </div>

    <div id="footer">
      <p>Icons by <a href="icons8.come">Icons8</a></p>
    </div>
  </div>
</template>

<style>
:root {
  --text-color: #e8e8e8;
  --background-color: #0e0a19;
  --primary-color: #8271f6;
  --secondary-color: #3c1a85;
  --accent-color: #5c1fe3;
}

html {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: sans-serif;
}

ul {
  list-style-type: none;
}

a {
  color: var(--text-color);
}

h1 a {
  text-decoration: none;
}

#page {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  height: 100vh;
}

#info-wrapper {
  margin: 15px;
  padding-left: 20px;
  background-color: var(--secondary-color);
  box-shadow: -5px 5px var(--accent-color);
  border-radius: 10px;
  height: max-content;
  width: 80%;
}

#main {
  grid-column: span 2 / span 2;
}

#projects-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.project-content {
  background-color: var(--primary-color);
  margin-left: -20px;
  margin-bottom: 40px;
  padding-right: 10px;
  width: 85%;
  height: 90%;
  padding-left: 20px;
  box-shadow: 5px 5px var(--accent-color);
  border-radius: 5px;
}

.project-content:hover {
  transform: scale(1.01);
}

#blog-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.blog-content {
  background-color: var(--primary-color);
  margin-left: -20px;
  margin-bottom: 40px;
  width: 90%;
  height: 90%;
  padding-left: 20px;
  padding-bottom: 5px;
  box-shadow: 5px 5px var(--accent-color);
  border-radius: 5px;
}

.blog-content a {
  text-decoration: none;
}

.blog-content:hover {
  transform: scale(1.01);
}

.blog-content img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-top: 25px;
  width: 90%;
  background-size: contain;
}

.blog-content p {
  margin: 10px;
}

#footer {
  position: sticky;
  bottom: 0;
}

#footer p {
  position: absolute;
  bottom: 0;
}
</style>
