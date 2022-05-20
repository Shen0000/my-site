<template>
  <div class="poems">
    <!-- <div style="background-image: URL('../assets/mysteryitem.png');">asdf<br><br><br><br><br><br></div> -->
    <!-- <img src="../assets/consciousness.jpg" alt=""> -->
    <div class="poem-grid">
      <div v-for="poem in poems" v-bind:key="poem.id">
        <router-link  v-bind:to="'/poem/' + poem.id" :style="{'text-decoration': 'none', 'color': poem['color']}">
          <div class="poem-wrapper" :style="{ 'background-image': 'URL(' + poem['title-image'] + ')', 'background-size': '250px 250px'}">
            <div class="poem-div"></div>
            <h1>{{poem["title"]}}</h1>
            <p>{{poem["date"]}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import poemData from "../json/poems.json";

export default {
  name: 'Poetry',
  data() {
        return {
            poems: poemData
        }
    }
}
</script>


<style scoped>

.poems {
    margin: 3vh;
}

.poem-grid {
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

.poem-wrapper {
    background-color:#ffbc57;
    /* background-image: url("../assets/mysteryitem.png"); */
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
.poem-wrapper:hover {
    transform: scale(1.1, 1.1);
}

</style>
