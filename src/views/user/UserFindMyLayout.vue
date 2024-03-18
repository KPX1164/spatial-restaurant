<template>
  <div class="System-default">
    <div class="Window HStack">
      <div id="Primary" class="p-7 w-1/4">
        <p class="Title">Profile</p>
        <div class="VStack gap-3">
          <p class="opacity-70">Folders</p>
          <RouterLink
            to="/profile/favourite"
            @click="toggleActive('Favourite')"
            :class="{
              'HStack gap-2 rounded-xl p-3 cursor-pointer item': true,
              active: activeItem === 'Favourite'
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
              />
            </svg>

            <p>Favourite</p>
          </RouterLink>
        </div>
      </div>
      <div id="Secondary" class="p-7 w-3/4">
        <router-view></router-view>
        <!-- Display the current view here -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const activeItem = ref<string>('Home')
// Function to toggle active item
function toggleActive(item: string) {
  if (item !== 'Sign-in') {
    activeItem.value = item
  } else {
    activeItem.value = ''
  }
}

const isLoggedIn = ref(false)
const user = ref(null)

// Fetch user data from localStorage
const token = localStorage.getItem('access_token')
if (token) {
  isLoggedIn.value = true
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    user.value = JSON.parse(storedUser)
  }
}
</script>
<style scoped>
.Window {
  padding: 0px;
}
#Primary {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10mm 0px 0px 10mm;
}
.item:hover {
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.75rem;
  border: 1px solid rgba(209, 213, 219, 0.1);
}
.item.active {
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.75rem;
  border: 1px solid rgba(209, 213, 219, 0.1);
}
</style>
