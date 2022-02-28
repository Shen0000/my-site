// /views/Post.vue
<template>
  <div class="post">
    <!-- <h1> Welcome to the Post page </h1>
    <p>This is the page that opens on <strong>/post/{{ $route.params.id }}</strong> route</p> -->
    <div v-if="blog">
        <h1>{{blog['title']}}</h1>
        <span class="a" v-html="blog['content']"></span>
    </div>
    <h1 v-else>Looks like there isn't a blog at this link!</h1>
    <!-- <span v-html="'<p>hello</p> <h1>hello</h1>'"></span> -->
  </div>
</template>

<script>
import blogData from "../blogs/test.json";

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
}

.post {
    padding: 10vw;
}

.a >>> .b {
    font-size: 30px;
}

</style>