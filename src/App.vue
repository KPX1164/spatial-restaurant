<template>
  <div>
    <div class="content-container">
      <header id="Dock" class="ml-4 mr-4 mt-4 pl-4 pr-4 pt-4 rounded-2xl">
        <nav class="HStack justify-between">
          <div class="font-medium text-3xl text-white">
            <RouterLink
              to="/"
              @click="toggleActive('Home')"
              :class="{ '': true, active: activeItem === 'Home' }"
              >Spatial Restaurant
            </RouterLink>
          </div>

          <div class="HStack gap-4">
           
            <div class="font-base space-x-4 Button text-white">
              <RouterLink
                to="/signin"
                @click="toggleActive('Sign-in')"
                :class="{ 'HStack gap-2': true, active: activeItem === 'Sign-in' }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <p>Sign in</p>
              </RouterLink>
            </div>
          </div>
        </nav>
      </header>

      <RouterView />

      <footer class="w-full text-center items-center VStack justify-center absolute bottom-0">
        <!-- Footer content -->
        <div class="font-normal Docker text-white">
          <RouterLink
            to="/"
            @click="toggleActive('Home')"
            :class="{ 'p-2 pl-5 pr-5 Docker-item': true, active: activeItem === 'Home' }"
            >Home</RouterLink
          >
          <RouterLink
            to="/menu"
            @click="toggleActive('Menu')"
            :class="{ 'p-2 pl-5 pr-5 Docker-item': true, active: activeItem === 'Menu' }"
            >Menu</RouterLink
          >
          <RouterLink
            to="/favourite"
            @click="toggleActive('Favourite')"
            :class="{ 'p-2 pl-5 pr-5 Docker-item': true, active: activeItem === 'Favourite' }"
            >Favourite</RouterLink
          >
          <RouterLink
            to="/support"
            @click="toggleActive('Support')"
            :class="{ 'p-2 pl-5 pr-5 Docker-item': true, active: activeItem === 'Support' }"
            >Support</RouterLink
          >
          <RouterLink
            to="/profile"
            @click="toggleActive('Profile')"
            :class="{ 'p-2 pl-5 pr-5 Docker-item': true, active: activeItem === 'Profile' }"
            >Profile</RouterLink
          >
        </div>
      </footer>
    </div>
  </div>
  <!-- Background image -->
  <div class="bg-container"></div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const activeItem = ref<string>('Home')

function toggleActive(item: string) {
  if (item !== 'Sign-in') {
    activeItem.value = item
  } else {
    activeItem.value = ''
  }
}
</script>

<style scoped>
.bg-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url('/src/assets/sonoma.jpg');
  background-size: cover;
  background-position: center;
  -webkit-filter: brightness(50%) blur(5px); /* Use -webkit-filter for WebKit browsers */
  filter: brightness(50%) blur(5px); /* Fallback for other browsers */
  background-blend-mode: normal;
}

.content-container {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1; /* Ensure content is above the background */
}
</style>
