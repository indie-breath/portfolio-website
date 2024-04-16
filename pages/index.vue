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
        <h1>Blog</h1>
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

<style lang="scss">
@use "~/assets/css/index.scss";
</style>
