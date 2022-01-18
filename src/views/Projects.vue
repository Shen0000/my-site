<template>
  <div class="projects">
    <h1 class="title"></h1>
      <flickity class="hero-slider" ref="flickity" :options="flickityOptions">
        <div class="carousel-cell" id="slide-1">
          <div class="overlay"></div>
          <div class="inner">
            <h2 class="title">Generals.io Bot</h2>
            <h3 class="date">ai<br />--- 2021-2022 ---</h3>
            <h3 class="subtitle">
              <em> This fall, I worked with another classmate Kevin Zhao, to create a fully operational generals.io bot that could play generals.</em>
              <br>
              <i>background credit to dev.generals.io</i>
            </h3>
            <div class="empty"></div>
            <a href="https://github.com/Shen0000/Generals.io-bot-python" class="btn" target="empty"
              >github.com</a
            >
          </div>
        </div>

        <div class="carousel-cell" id="slide-2">
          <div class="overlay"></div>
          <div class="inner">
            <h2 class="title">Slide 2<span class="ctf"></span></h2>
            <h3 class="date">cs club<br />--- Spring 2021 ---</h3>

            <h3 class="subtitle">
            </h3>
            <div class="empty"></div>
           <a href="https://play.picoctf.org/events/34/scoreboards#35" class="btn" target="empty">Spring 2021 Scoreboard</a>
          </div>
 
        </div>

        <div class="carousel-cell" id="slide-3">
          <div class="overlay"></div>
          <div class="inner">
            <h2 class="title"></h2>
            <h3 class="date">cs club<br />--- Winter 2021 ---</h3>

            <h3 class="subtitle">
            </h3>
            <div class="empty"></div>
            <a href="http://www.usaco.org/" class="btn" target="empty"
              >usaco.org</a
            >
          </div>
        </div>
      </flickity>
  </div>
</template>

<script>
import Flickity from "vue-flickity";

export default {
    name: "projects",
    components: {
      Flickity,
    },
    data() {
      return {
        flickityOptions: {
          initialIndex: 0,
          prevNextButtons: true,
          pageDots: false,
          autoPlay: false,
          freeScroll: false,
          wrapAround: true,
          // arrowShape: "M 0,50 L 60,00 L 50,30 L 80,30 L 80,70 L 50,70 L 60,100 Z",
        },
      };
    },
    methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
  },
};
</script>

<style scoped>

.projects {
    line-height: 200%;
}


/* CSS modelled from waylandcs.com */
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to bottom, #081659, #000121);
}
.hero-slider {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.hero-slider .carousel-cell {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.hero-slider .carousel-cell .inner {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(255, 255, 255);
  text-align: center;
}
.hero-slider .carousel-cell .inner .subtitle {
  font-size: 1rem;
  font-family: monospace;
  line-height: 1.2em;
  font-weight: 400;
  /*font-style: italic;*/
  letter-spacing: 3px;
  color: #e0e0de;
  margin-bottom: 5px;
  width: 550px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid#010314;
  border-radius: 25px;
  text-transform: lowercase;
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
}
.hero-slider .carousel-cell .inner .title {
  font-size: 8em;
  line-height: 1.2em;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 20px;
}
.hero-slider .carousel-cell .inner .btn {
  border: 5px solid #111;
  padding: 14px 18px;
  text-transform: lowercase;
  font-size: 0.8rem;
  letter-spacing: 3px;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease;
}
.hero-slider .carousel-cell .inner .btn:hover {
  background: #000;
  color: #1446e9;
}
.hero-slider .flickity-prev-next-button {
  width: 80px;
  height: 80px;
  background: transparent;
}
.hero-slider .flickity-prev-next-button:hover {
  background: transparent;
}
.hero-slider .flickity-prev-next-button .arrow {
  fill: white;
}
.hero-slider .flickity-page-dots {
  bottom: 30px;
}
.hero-slider .flickity-page-dots .dot {
  width: 30px;
  height: 4px;
  opacity: 1;
  background: rgba(255, 255, 255, 0.5);
  border: 0 solid white;
  border-radius: 0;
}
.hero-slider .flickity-page-dots .dot.is-selected {
  background: #f00;
  border: 0 solid #f00;
}
.empty {
  padding-bottom: 50px;
}

#slide-1 .overlay {
  background-image: url(https://tcode2k16.github.io/blog/generals-io-bot/replay.gif);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%, 50%;
  filter: blur(4px);
  -webkit-filter: blur(4px);
}

@media (max-width: 1050px) {
  .hero-slider .carousel-cell .inner .title,
  #slide-1 .title {
    font-size: 100px;
  }
}

@media (max-width: 850px) {
  .hero-slider .carousel-cell .inner .title,
  #slide-1 .title {
    font-size: 75px;
  }
}

@media (max-width: 650px) {
  .hero-slider .carousel-cell .inner .title,
  #slide-1 .title {
    font-size: 50px;
  }

  .hero-slider .carousel-cell .inner .subtitle {
    width: 250px;
  }
}

@media (max-width: 450px) {
  .hero-slider .carousel-cell .inner .title,
  #slide-1 .title {
    font-size: 35px;
    /*margin-bottom: 20px;*/
  }
  @media (max-width: 1000px) {
    #slide-1 .title, #slide-2 .title, #slide-3 .title {
      margin-top: 0px;
      margin-bottom: 10px;
    }
  }
}

</style>