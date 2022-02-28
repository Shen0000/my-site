<template>
  <div class="blogs">
    <div class="blog-grid">
      <div v-for="blog in blogs" v-bind:key="blog.id">
        <router-link  v-bind:to="'/post/' + blog.id" :style="{'text-decoration': 'none', 'color': blog['color']}">
          <div class="blog-wrapper" :style="{ 'background-image': 'URL(' + blog['title-image'] + ')', 'background-size': '250px 250px'}">
            <div class="blog-div"></div>
            <h1>{{blog["title"]}}</h1>
            <p>{{blog["date"]}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import blogData from "../blogs/blogs.json";

export default {
  name: 'Blogs',
  data() {
        return {
            blogs: blogData
        }
    }
}
</script>


<style scoped>

.blogs {
    margin: 3vh;
}

.blog-grid {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
    max-width: 1500px;
    grid-row-gap: 50px;
    grid-column-gap: 50px;
    margin: 3vh auto;
    padding-right: 3vw;
    padding-left: 3vw;
}

.blog-wrapper {
    background-color:#ffbc57;
    border-radius: 5px;
    box-sizing: border-box;
    width: 250px;
    cursor: pointer;
    transition: all 0.25s ease;
    min-width: 250px;
    min-height: 250px;
    display: grid;
    /* align-items: center; */
}
.blog-wrapper:hover {
    transform: scale(1.1, 1.1);
}

</style>
