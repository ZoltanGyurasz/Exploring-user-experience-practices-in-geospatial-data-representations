<template>
  <div class="bodyk">
  <div class="dna-loader space-y-3">
    <div class="chain" style="--i:1">
      <div class="line"></div>
      <div class="ball"></div>
    </div>
    <div class="chain" style="--i:2">
      <div class="line"></div>
      <div class="ball"></div>
    </div>
    <div class="chain" style="--i:3">
      <div class="line"></div>
      <div class="ball"></div>
    </div>
    <div class="chain" style="--i:4">
      <div class="line"></div>
      <div class="ball"></div>
    </div>
    <div class="chain" style="--i:5">
      <div class="line"></div>
      <div class="ball"></div>
    </div>
    <div class="chain" style="--i:6">
      <div class="line"></div>
      <div class="ball"></div>
    </div>
    <div class="chain" style="--i:7">
      <div class="line"></div>
      <div class="ball"></div>
    </div>
    <div class="chain" style="--i:8">
      <div class="line"></div>
      <div class="ball"></div>
    </div>
  </div>
    <h1 class="title">Loading</h1>
  </div>
</template>

<style lang="scss">
.bodyk {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.title{
  margin-top: 1%;
}

:root {
  --grey-color: #454344;
  --blue-color: hsl(196, 68%, 54%);;
  --red-color: hsl(354, 67%, 56%);
}

.dna-loader {
  --line-width: 3rem;
  --line-height: 0.2rem;
  --ball-width: 0.75rem;
  --line-color: black;
  --ball-color: white;
  --anime-duration: 0.5s;
  --anime: var(--anime-duration) ease-in-out alternate infinite;
  --slide-x: calc(calc(var(--line-width) - var(--ball-width)) / 2);

.chain {
  --anime-delay: calc(var(--anime-duration) * var(--i) * -0.4);
  padding-top: 35%;
  position: relative;
  display: flex;
  align-items: center;
  width: var(--line-width);

&:nth-child(-n + 8) {
.ball {
&::before {
   --ball-color: var(--red-color);
 }

&::after {
   --ball-color: var(--blue-color);
 }
}
}

&:nth-child(-n + 4) {
.ball {
&::before {
   --ball-color: var(--blue-color);
 }

&::after {
   --ball-color: var(--red-color);
 }
}
}

.line {
  width: 100%;
  height: var(--line-height);
  background: var(--line-color);
  animation: scale-x-out var(--anime) var(--anime-delay);
}

.ball {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

&::before,
&::after {
   position: relative;
   content: "";
   width: var(--ball-width);
   height: var(--ball-width);
   background: var(--ball-color);
   border-radius: 50%;
   animation: var(--anime) var(--anime-delay);
 }

&::before {
   animation-name: slide-right;
 }

&::after {
   animation-name: slide-left;
 }
}
}
}

@keyframes scale-x-out {
  to {
    transform: scaleX(0);
  }
}

@keyframes slide-left {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(calc(var(--slide-x) * -1));
  }
}

@keyframes slide-right {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(calc(var(--slide-x) * 1));
  }
}
</style>