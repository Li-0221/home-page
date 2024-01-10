<template>
  <div class="">
    <div class="hero min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md gs_reveal">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>

    <div class="grid-container">
      <div class="grid">
        <div class="gridLayer">
          <div class="gridBlock"></div>
        </div>
        <div class="gridLayer">
          <div class="gridBlock"></div>
        </div>
        <div class="gridLayer">
          <div class="gridBlock"></div>
        </div>
        <div class="gridLayer centerPiece">
          <div class="gridBlock centerBlock"></div>
        </div>
        <div class="gridLayer">
          <div class="gridBlock">
            <a href="https://greensock.com" target="_blank"></a>
          </div>
        </div>
        <div class="gridLayer">
          <div class="gridBlock"></div>
        </div>
        <div class="gridLayer">
          <div class="gridBlock"></div>
        </div>
        <div class="gridLayer">
          <div class="gridBlock"></div>
        </div>
        <div class="gridLayer">
          <div class="gridBlock"></div>
        </div>
      </div>
    </div>
    <div class="cInnerContent">
      <h1 class="header-section gs_reveal ipsType_center">
        Scroll down and up to see different reveal animations
      </h1>

      <div class="features">
        <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
          <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
            <div class="card">
              <img width="479" src="https://picsum.photos/479/479?index=1" alt="" />
            </div>
          </div>

          <div class="ipsGrid_span7 ipsType_left">
            <h2 class="heading_large gs_reveal">
              Create amazing <strong>SVG</strong> animations
            </h2>
            <p class="gs_reveal">
              <a href="https://greensock.com/drawsvg/">DrawSVGPlugin</a> allows
              you to progressively reveal (or hide) SVG strokes to make them
              look like they're being drawn.
              <a href="https://greensock.com/morphsvg/">MorphSVGPlugin</a> to
              Morph any SVG shape into any other shape smoothly regardless of
              the number of points in each.
              <a href="/docs/v3/Plugins/MotionPathPlugin">MotionPathPlugin</a>
              allows you to easily move any object along a path.
            </p>
          </div>
        </div>

        <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
          <div class="ipsGrid_span7 ipsType_right">
            <h2 class="heading_large gs_reveal">
              Supercharge immersive <strong>WebGL</strong> experiences
            </h2>
            <p class="gs_reveal">
              GreenSock is used in some of the most popular
              <a href="//threejs.org/">Three.js</a> powered WebGL projects.
              Animate any object in a scene.
              <a href="https://greensock.com/PixiPlugin/">PixiPlugin</a> makes
              animating <a href="//www.pixijs.com/">Pixi.js</a> objects with
              GSAP a breeze. Animate position, scale, color effects and more
              with all the power and control of GSAP and the rendering speed of
              Pixi.js.
            </p>
          </div>

          <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
            <div class="card">
              <img width="479" src="https://picsum.photos/479/479?index=2" alt="" />
            </div>
          </div>
        </div>

        <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
          <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
            <div class="card">
              <img width="479" src="https://picsum.photos/479/479?index=3" alt="" />
            </div>
          </div>

          <div class="ipsGrid_span7 ipsType_left">
            <h2 class="heading_large gs_reveal">
              Control performant <strong>Canvas</strong> animations
            </h2>
            <p class="gs_reveal">
              GSAP makes animating with Canvas even easier by providing an
              easier way to look and sequence animations. GSAP works great with
              <a href="//www.adobe.com/products/animate.html">Adobe Animate</a>
              and <a href="//createjs.com/easeljs">EaseJS</a> through GSAP's
              <a href="https://greensock.com/easelplugin/">EaselJSPlugin</a>.
            </p>
          </div>
        </div>

        <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
          <div class="ipsGrid_span7 ipsType_right">
            <h2 class="heading_large gs_reveal">
              <strong>Award winning</strong> websites
            </h2>
            <p class="gs_reveal">
              GSAP is used on over 8,500,000 sites and over 1,000 sites featured
              on
              <a href="https://www.awwwards.com/websites/gsap-animation/" target="_blank">Awwwards</a>. For some of our
              favorites, check out
              <a href="https://greensock.com/showcase/">our showcase</a>.
            </p>
          </div>

          <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
            <div class="card">
              <img width="479" src="https://picsum.photos/479/479?index=4" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// definePageMeta({
//   layout: false
// });

gsap.registerPlugin(ScrollTrigger);

const a1 = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".grid-container",
        start: "top top",
        end: () => innerHeight * 4,
        scrub: true,
        pin: ".grid",
        anticipatePin: 1
      }
    })
    .set(".gridBlock:not(.centerBlock)", { autoAlpha: 0 })
    .to(".gridBlock:not(.centerBlock)", { duration: 0.1, autoAlpha: 1 }, 0.001)
    .from(".gridLayer", {
      scale: 3.3333,
      ease: "none"
    });

  // Images to make it look better, not related to the effect
  const size = Math.max(innerWidth, innerHeight);
  gsap.set(".gridBlock", {
    backgroundImage: (i) =>
      `url(https://picsum.photos/${size}/${size}?random=${i})`
  });

  const bigImg = new Image();
  bigImg.addEventListener("load", function () {
    gsap.to(".centerPiece .gridBlock", { autoAlpha: 1, duration: 0.5 });
  });

  bigImg.src = `https://picsum.photos/${size}/${size}?random=50`;
};

const a2 = () => {
  function animateFrom(elem: HTMLElement, direction?: number) {
    direction = direction || 1;
    var x = 0,
      y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
      }
    );
  }

  function hide(elem: HTMLElement) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  gsap.utils.toArray<HTMLElement>(".gs_reveal").forEach(function (elem) {
    hide(elem);

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      } // assure that the element is hidden when scrolled into view
    });
  });
};

onMounted(() => {
  a1();
  a2();
});
</script>

<style scoped lang="scss">
.gridBlock {
  opacity: 0;
}

.grid-container {
  width: 100vw;
  height: 400vh;
  position: relative;
}

.grid {
  top: 0;
  left: 0;
  z-index: 1;
  width: 70vw;
  height: 60vw;
  margin: 0 calc(100vw / 20 * 3);
  position: absolute;
}

@media only screen and (max-width: 580px) {
  .grid {
    margin: 0;
    width: 100vw;
    height: 89.444vw;
  }
}

.gridBlock {
  background-size: cover;
  background-color: darkgray;
}

.gridLayer {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  will-change: transform;
  transform-origin: 44.951% 50%;
}

.gridLayer:nth-child(1) .gridBlock {
  top: 5vw;
  left: 20vw;
  width: 10vw;
  height: 10vw;
}

@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(1) .gridBlock {
    top: 11.111vw;
    left: 23.889vw;
    width: 15vw;
    height: 15vw;
  }
}

.gridLayer:nth-child(2) .gridBlock {
  top: 0;
  left: 32.5vw;
  width: 15vw;
  height: 15vw;
}

@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(2) .gridBlock {
    top: 0;
    left: 43.333vw;
    width: 26.389vw;
    height: 26.389vw;
  }
}

.gridLayer:nth-child(3) .gridBlock {
  left: 0;
  top: 25vw;
  width: 15vw;
  height: 15vw;
}

@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(3) .gridBlock {
    top: 30.278vw;
    left: 0;
    width: 26.389vw;
    height: 26.389vw;
  }
}

.gridLayer:nth-child(4) .gridBlock {
  top: 17.5vw;
  left: 17.5vw;
  width: 30vw;
  height: 30vw;
}

@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(4) .gridBlock {
    top: 30.278vw;
    left: 30.278vw;
    width: 39.444vw;
    height: 39.444vw;
  }
}

.gridLayer:nth-child(5) {
  z-index: 1;
}

.gridLayer:nth-child(5) .gridBlock {
  top: 20vw;
  left: 50vw;
  width: 5vw;
  height: 5vw;
}

@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(5) .gridBlock {
    top: 23.889vw;
    left: 73.889vw;
    width: 15.278vw;
    height: 15.278vw;
  }
}

.gridLayer:nth-child(5) a {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gridLayer:nth-child(5) svg {
  width: 1.75vw;
}

@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(5) svg {
    width: 4.722vw;
  }
}

.gridLayer:nth-child(6) .gridBlock {
  left: 50vw;
  top: 27.5vw;
  width: 20vw;
  height: 20vw;
}

@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(6) .gridBlock {
    top: 43.889vw;
    left: 73.889vw;
    width: 26.389vw;
    height: 26.389vw;
  }
}

.gridLayer:nth-child(7) .gridBlock {
  left: 10vw;
  top: 42.5vw;
  width: 5vw;
  height: 5vw;
}

@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(7) .gridBlock {
    display: none;
  }
}

.gridLayer:nth-child(8) .gridBlock {
  bottom: 5vw;
  left: 42.5vw;
  width: 5vw;
  height: 5vw;
}

@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(8) .gridBlock {
    display: none;
  }
}

.gridLayer:nth-child(9) .gridBlock {
  bottom: 0;
  left: 50vw;
  width: 10vw;
  height: 10vw;
}

@media only screen and (max-width: 580px) {
  .gridLayer:nth-child(9) .gridBlock {
    top: 73.889vw;
    left: 58.889vw;
    width: 15.278vw;
    height: 15.278vw;
  }
}

.gridBlock {
  display: block;
  position: absolute;
}

/* Styles from the GreenSock website */
body {
  font-weight: 300;
}

.ipsType_right {
  text-align: right;
}

.ipsType_center {
  text-align: center;
}

.cInnerContent {
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
}

.ipsSpacer_bottom_double {
  margin-bottom: 30px;
}

.ipsGrid {
  display: inline-block;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
}

.ipsGrid::before,
.ipsGrid::after {
  display: table;
  content: "";
  line-height: 0;
}

.ipsGrid>[class*="ipsGrid_span"] {
  display: block;
  width: 100%;
  min-height: 30px;
  box-sizing: border-box;
}

.ipsGrid>.ipsGrid_span5 {
  width: 40.42553191489362%;
}

.ipsGrid>.ipsGrid_span7 {
  width: 57.44680851063829%;
}

.ipsGrid>[class*="ipsGrid_span"] {
  float: left;
  margin-left: 2%;
}

.ipsGrid>[class*="ipsGrid_span"]:first-child {
  margin-left: 0;
}

.feature {
  display: flex;
  align-items: center;
}

.card {
  margin-bottom: 30px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 1px 1px 5px 1px #cccccc;
  /*   transition: 0.3s; */
}

.featured-image-container .card {
  padding: 10px;
  height: 0;
  padding-bottom: calc(100% - 10px);
}

h2.heading_large {
  font-size: 1.8em;
}

img {
  max-width: 100%;
}

.header-section {
  margin: 200px auto;
}

.gs_reveal {
  opacity: 0;
  visibility: hidden;
  will-change: transform, opacity;
}
</style>
