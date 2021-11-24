<template>
   <main class="slide-show-page">
      <section class='slideshow-container'>
         <img src="" alt="">
         <button class="slideshow-container__button--left">left</button>
         <button class="slideshow-container__button--right">right</button>
      </section>
      <section class="slideshow-caption">
         <div class="slideshow-caption__name"></div>
         <div class="slideshow-caption__description"></div>
      </section>
   </main>
</template>

<script>
   let imgList = [
      img1, img2, img3
   ]
   
</script>

<style>
   .slide-show-page {
      width: 100vw;
      height: 100vh;
      border: solid 1px aqua;
   }

   .slideshow-container__button--left {
      border: solid black 1px;
      border-radius: 15px;
      padding: 5px;
   }
   .slideshow-container__button--right {
      border: solid black 1px;
      border-radius: 15px;
      padding: 5px;
   }
</style>
   