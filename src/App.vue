<template>
  <div>
    <div class="content-container">
      <header id="Dock" class="ml-4 mr-4 mt-4 pl-4 pr-4 pt-4 rounded-2xl">
        <nav class="HStack justify-between">
          <div class="font-medium text-3xl text-white">
            <router-link
              to="/"
              @click="toggleActive('Home')"
              :class="{ '': true, active: activeItem === 'Home' }"
              >Spatial Restaurant
            </router-link>
          </div>

          <div class="HStack gap-4">
            <div class="HStack font-base space-x-4 Button text-white">
              <router-link
                v-if="!isLoggedIn"
                to="/sign-in"
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
              </router-link>
              <div v-if="isLoggedIn" class="HStack">
                <router-link
                  to="/profile"
                  @click="toggleActive('Profile')"
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
                  <!-- <p>User name</p> -->
                  <p>{{ user.firstname }}</p>
                  <!-- Display user's firstname -->
                </router-link>
                <router-link
                  to="/sign-in"
                  @click="signOut"
                  :class="{ 'border-l ml-3 pl-3 border-white HStack gap-2': true, active: activeItem === 'Sign-in' }"
                >
                  Sign out
                </router-link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <router-view />

      <footer class="w-full text-center items-center VStack justify-center absolute bottom-0">
        <!-- Footer content -->
        <div v-if="isLoggedIn" class="font-normal Docker text-white cursor-pointer">
          <router-link
            to="/"
            @click="toggleActive('Home')"
            :class="{ 'p-2 pl-5 pr-5 Docker-item': true, active: activeItem === 'Home' }"
            >Home</router-link
          >
          <router-link
            to="/menu"
            @click="toggleActive('Menu')"
            :class="{ 'p-2 pl-5 pr-5 Docker-item': true, active: activeItem === 'Menu' }"
            >Menu</router-link
          >
          <router-link
            to="/findmy"
            @click="toggleActive('FindMy')"
            :class="{ 'p-2 pl-5 pr-5 Docker-item': true, active: activeItem === 'FindMy' }"
            >FindMy</router-link
          >
 
          <router-link
            to="/profile"
            @click="toggleActive('Profile')"
            :class="{ 'p-2 pl-5 pr-5 Docker-item': true, active: activeItem === 'Profile' }"
            >Profile</router-link
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
import { signOut } from '@/services/AuthService'

const activeItem = ref<string>('Home')
import { onMounted } from 'vue'

const user = ref(null)
const isLoggedIn = ref(false)

const token = localStorage.getItem('access_token')

onMounted(() => {
  if (token) {
    isLoggedIn.value = true
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      user.value = JSON.parse(storedUser)
    }
  }
})

function toggleActive(item: string) {
  if (item !== 'Sign-in') {
    activeItem.value = item
  } else {
    activeItem.value = ''
  }
}
</script>

<style scoped>
.Button:hover {
  background: rgba(255, 255, 255, 0.3);
}
.bg-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url('/src/assets/w2.jpg');
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
