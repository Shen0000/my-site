<template>
  <div id="app" class="main-container" v-bind:class="picked">
    <div id="nav">
      <router-link to="/" class="nav-link" style="padding-left 10px">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
      <router-link to="/academics" class="nav-link">Academics</router-link>
      <router-link to="/projects" class="nav-link">Projects</router-link>
      <router-link to="/cs" class="nav-link">CS</router-link>
      <router-link to="/theme" class="nav-link">Theme</router-link>
      <div class="color-palettes">
        <input
            v-for="color in colors"
            type="radio"
            class="input-color"
            :class="color.value"
            :value="color.value"
            :key="color.index"
            v-model="picked"
        />
        </div>
    </div>
    <body>
      <router-view/>
    </body>
    <footer>
      <!-- <h1 style="color: rgb(255, 255, 255)">Hello World Footer</h1> -->
      <ul class="social-list">
          <li class="social-list__item">
            <a class="social-list__link" href="mailto: bshen.324@gmail.com" target="_blank"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://github.com/shen0000" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://codeforces.com/profile/bshen324" target="_blank"><i class="fas fa-laptop-code" aria-hidden="true"></i></a>
          </li>
          <li class="social-list__item">
            <a class="social-list__link" href="https://www.facebook.com/brendan.shen.31/" target="_blank"><i class="fab fa-facebook square" aria-hidden="true"></i></a>
          </li>
      </ul>
      
    </footer>
  </div>
</template>

<script>
export default {
    data() {
        return {
            colors: [
                {id: 1, value: "blue"},
                {id: 2, value: "light"},
                {id: 3, value: "dark"},
                {id: 4, value: "orange"},
            ],
            picked: "blue",
        }
    }
}
</script>

<style>

* {
    margin: 0;
}

body {
    display: flex;
    flex-direction: column;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    min-height: 100vh;
    /*the above is*/
    background: linear-gradient(#081659, #000121);
}

body::-webkit-scrollbar {
    display: none;
}

#app {
    font-family: monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: rgb(207, 204, 204);
    margin: 0;
    padding: 0;
    height: 100%;
}

#type {
    margin-left: 5px;
    border-right: 0.05em solid;
    animation: caret 1s steps(1) infinite;
    color: #111;
}

@keyframes caret {
    50% {
        border-color: transparent;
    }
}

#nav {
    padding: 15px;
    text-align: left;
    background-color: var(--nav);
    vertical-align: middle;
    display: table;
    width: 100%;
}


#nav a {
    font-weight: bold;
    vertical-align: middle;
    color: #4d77ff;
}

#nav a:hover {
    opacity:0.8;
}

#nav a.router-link-exact-active {
    color: #1302ff;
}

.logo {
    height: 75px;
    width: 75px;
    margin-left: 10px;
    transition: transform 250ms ease-in-out;
}
.main-container {
    /*min-height: 100vh;*/
    overflow: show;
    display: block;
    position: relative;
    margin: 0;
}
.nav-link {
    font-size: 18px;
    text-decoration: none;
    transition: transform 250ms ease-in-out;
    vertical-align: middle;
    /*border: 1px solid #000000;*/
    padding-left: 20px;
}

@media(max-width: 400px) {
    .nav-link {
        font-size: 12px;
    }
}

/*.nav-link_about {
    font-size: 18px;
    text-decoration: none;
    transition: transform 250ms ease-in-out;
    vertical-align: middle;
    display: table-cell;
    vertical-align: middle;
    padding-left: 10px;
}*/


.nav-link:hover {
	transform: scale(1.1);
}

footer {
	background-color: rgb(0, 1, 34);
    /* padding: 3vw; */
    padding-top: 2vh;
    padding-bottom: 2vh;
    height: 15%;
    width: 100%;
}

.footer-text {
	font-size: 50px;
	color: #272525;
}

.logo:hover {
	opacity: 0.8;
	transform: scale(1.1);
}

.social-list__link:focus,
.social-list__link:hover {
	opacity: .8;
	outline: none;

}

.social-list__item:hover {
	transform: scale(1.1);

}

.social-list {
	list-style: none;
	display: flex;
	justify-content: center;
	margin: 2em 0;
	padding: 0;

}

.social-list__item {
	transition: transform 250ms ease-in-out;
	margin: 0 .5em;
}

.social-list__link {
	font-size: 40px;
	color: #57ddff;
	padding: .5em;
}

.title {
    padding-top: 3vh;
    padding-bottom: 3vh;
}

.blue {
  --color: #081659;
  --color-secondary: #000121;
  --nav: rgb(17, 4, 54);
  background:#078fe9;
  --background: #dde3e7;
  --card-color: #081ab6;
  --text-color-primary: black;
  --text-color-success: #007a46;
  --text-color-error: #c83825;
  --text-color-warning: #ff6600;
}

.light {
  --color: #112d32;
  background:#ECEFF1;
  --background: #ECEFF1;
  --card-color: #f7f7f7;
  --text-color-primary: black;
  --text-color-success: #007a46;
  --text-color-error: #c83825;
  --text-color-warning: #ff6600;
}
.dark {
  --color: #c2c2c2;
   background: #505050;
  --background: #505050;
  --card-color: #323232;
  --text-color-primary: white;
  --text-color-success: #1eb980;
  --text-color-error: #ff6859;
  --text-color-warning: #ffcf44;
  
}
.orange {
  --color: #8e3d35;
  background: #edc7b7;
  --background: #edc7b7;
  --card-color: #f9f3f0;
  --text-color-primary: #8e3d35;
  --text-color-success: #008b52;
  --text-color-error: #e44838;
  --text-color-warning: #ff9900;
}
.color-palettes {
  display: flex;
  padding: 30px;
}

input[type="radio"] {
  appearance: none;
}
.input-color {
  outline: none;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid white;
}

</style>
