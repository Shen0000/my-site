// /views/Poem.vue
<template>
  <div class="poem">
    <!-- <h1> Welcome to the Poem page </h1>
    <p>This is the page that opens on <strong>/poem/{{ $route.params.id }}</strong> route</p> -->
    <div v-if="poem && poem['status']">
        <h1><strong>{{poem['title']}}</strong></h1>
        <br><br><br><br><h2>{{poem['author']}}</h2><br><h3>{{poem['date']}}</h3><br><br><br>
        <div class="poem-container" :style="{'width': poem['width'] + 'px'}">
            <span class="a" v-html="poem['content']"></span>
        </div>
    </div>
    <div v-else-if="poem && !poem['status']">
        <h1>This poem is under development!</h1>
    </div>
    <div v-else>
        <h1>Looks like there isn't a poem at this link!</h1>
    </div>
    <!-- <span v-html="'<p>hello</p> <h1>hello</h1>'"></span> -->
  </div>
</template>

<script>
import poemData from "../json/poems.json";

export default {
    data() {
        return {
            poem: poemData[parseInt(this.$route.params.id)]
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

h2 {
    text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

h3 {
    text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}

.poem {
    padding: 8vw;
}

.poem-container {
    border: 3px solid var(--border);
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    /* width: 600px; */
    padding-bottom: 30px;
    margin-top: 10vh;
    /*margin: 0;*/
    position: relative;
    /* top: 40%; */
    /* left: 50%; */
    /* -ms-transform: translate(-50%, -50%); */
    /* transform: translate(-50%, -50%); */
    background-color: var(--footer);
    transition: background-color 2s, border 2s;
    line-height: 400%;
}

.a >>> .b {
    font-size: 25px;
    font-family: garamond;
    text-align: left;
}

</style>