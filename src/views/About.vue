<template>
  <div class="about">
    <h1 class="title">This is my about page</h1>
    <div class="favorites">
      <h2>Here are some of my favorite things! Keep scrolling to explore!</h2>
    </div>
    <div class="hobbies">
      <h1>Competitive programming</h1>
      <img src="..\assets\code.jpeg" alt="code" class="images">
      <p>One of my biggest hobbies is competitive programming. I take part in many different competitions such as <a href="http://www.usaco.org/index.php" target="_blank">USACO</a> and regular <a href="https://codeforces.com/" target="_blank">codeforces</a> contests.</p>
      <p>What is most captivating about competitive programming is the puzzle aspect that goes into every problem.</p>
      <p>You can learn more about competitive programming <a href="https://www.codecademy.com/resources/blog/what-is-competitive-programming/" target="_blank">here</a>.</p>

      <h1>Sports:</h1>
      <h2>Soccer</h2>
      <p>I love playing soccer and have been playing since elementary school. I played for the high school team in my freshman year</p>


      <h2>Debate</h2>
      <p>I debate on the varsity team at my high school. I enjoy debate because it helps improve my public speaking and quick thinking.</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "about",
};
</script>

<style scoped>

p {
  font-size: 1vw;
}

a:link {
  color: rgb(32, 180, 238);
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: rgb(44, 58, 248);
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: rgb(44, 58, 248);
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: rgb(196, 27, 5);
  background-color: transparent;
  text-decoration: underline;
}

.about {
  padding: 0vh;
}

.favorites {
  padding-bottom: 100vh;
}

.hobbies {
  line-height: 5;
}

.images {
  max-width: 100vw;
  height: 100vh;
  filter: blur(4px);
  -webkit-filter: blur(4px);
}

</style>