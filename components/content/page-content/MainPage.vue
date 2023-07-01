<template>
  <div
    class="h-screen flex sm:flex-row flex-col sm:space-y-0 space-y-4 items-center justify-center sm:space-x-12"
  >
    <img
      src="~/assets/profile-picture.jpg"
      class="rounded-full lg:w-[250px] lg:h-[250px] md:w-[200px] md:h-[200px] w-[150px] h-[150px] animate__animated animate__flipInX shadow-lg dark:shadow-none"
      alt="Profile picture Corentin Parpette"
      width="250"
      height="250"
    />
    <div
      class="flex flex-col justify-center sm:items-baseline items-center animate__animated animate__fadeInUp"
    >
      <span
        class="dark:text-[#6893FF] text-blue-900 lg:text-xl md:text-lg text-base sm:leading-none"
      >
        Hello, I'm
      </span>
      <h1
        class="dark:text-white text-sky-950 lg:text-6xl md:text-5xl text-4xl md:leading-tight sm:leading-snug leading-relaxed"
      >
        Corentin Parpette
      </h1>
      <span
        class="dark:text-white text-sky-950 lg:text-4xl md:text-3xl text-2xl sm:leading-none leading-tight"
      >
        Software Engineer.
      </span>
      <span
        class="dark:text-[#6893FF] text-blue-900 lg:text-4xl md:text-3xl sm:text-2xl text-base sm:leading-none leading-tight"
      >
        Passionate about development since I was 17
      </span>
      <div class="flex flex-col sm:items-baseline items-center justify-center">
        <span
          class="dark:text-white text-sky-950 lg:text-xl md:text-lg text-base lg:mt-7 sm:mt-4 mt-12"
        >
          Find me on
        </span>
        <div class="mt-[19px] flex justify-start lg:space-x-16 space-x-12">
          <NuxtLink
            class="flex flex-col items-center gap-[10px] hover:scale-110 transition-transform duration-300"
            to="https://github.com/corentinprp51"
            target="_blank"
          >
            <img
              src="~/assets/github.svg"
              alt=""
              width="50"
              height="50"
            />
            <span
              class="dark:text-white text-sky-950 lg:text-[18px] md:text-base text-sm"
            >
              GitHub
            </span>
          </NuxtLink>
          <NuxtLink
            class="flex flex-col items-center gap-[10px] hover:scale-110 transition-transform duration-300"
            to="https://www.linkedin.com/in/corentin-parpette/"
            target="_blank"
          >
            <img
              src="~/assets/linkedin.svg"
              alt=""
              class="fill-red-500"
              width="50"
              height="50"
            />
            <span
              class="dark:text-white text-sky-950 lg:text-[18px] md:text-base text-sm"
            >
              Linkedin
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate__animated.animate__fadeInUp,
.animate__animated.animate__rotateInDownLeft {
  --animate-duration: 0.5s;
}
</style>
