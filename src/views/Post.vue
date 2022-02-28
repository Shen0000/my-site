// /views/Post.vue
<template>
  <div class="post">
    <!-- <h1> Welcome to the Post page </h1>
    <p>This is the page that opens on <strong>/post/{{ $route.params.id }}</strong> route</p> -->
    <div v-if="blog && blog['status']">
        <h1><strong>{{blog['title']}}</strong></h1>
        <br><br><br><br><br><br><br>
        <span class="a" v-html="blog['content']"></span>
    </div>
    <div v-else-if="blog && !blog['status']">
        <h1>This blog is under development!</h1>
    </div>
    <div v-else>
        <h1>Looks like there isn't a blog at this link!</h1>
    </div>
    <!-- <span v-html="'<p>hello</p> <h1>hello</h1>'"></span> -->
  </div>
</template>

<script>
import blogData from "../blogs/blogs.json";

export default {
    data() {
        return {
            blog: blogData[parseInt(this.$route.params.id)]
        }
    }
}


</script>

<style scoped>

h1 {
    font-size: 50px;
    text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000,
    4px 4px 5px var(--color-secondary);
    transition: text-shadow 2s;
}

.post {
    padding: 8vw;
}

.a >>> .b {
    font-size: 30px;
}

</style>