<template>
  <div class="System-default">
    <div class="Window HStack">
      <div id="Primary" class="p-7 w-1/4">
        <div class="HStack justify-between">
          <p class="Title">My spatial</p>
         
        </div>
        <div class="VStack gap-3">
          <div class="HStack justify-between">
            <p class="opacity-70">Folders</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white opacity-70"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          <!-- Loop over the keys of findmy object -->
          <div v-for="folder in transformedFolders" :key="folder">
            <router-link
              :to="`/findmy/${folder}`"
              @click="toggleActive(folder)"
              :class="{
                'HStack gap-2 rounded-xl p-3 cursor-pointer item': true,
                active: activeItem === folder
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

              <p>{{ folder }}</p>
            </router-link>
          </div>
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
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import type { User } from '@/type'

const activeItem = ref<string>('Favourite') // Set default active folder to 'Favourite'

// Function to toggle active item
function toggleActive(item: string) {
  activeItem.value = item
}

const findmy = ref({})

const isLoggedIn = ref(false)
const user = ref<User>()
const favouriteItems = ref([])

// Fetch user data from localStorage
const token = localStorage.getItem('access_token')
if (token) {
  isLoggedIn.value = true
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    user.value = JSON.parse(storedUser)
  }
}

onMounted(async () => {
  // Fetch favourite items from the backend
  try {
    if (user.value && user.value.id) {
      const userId = user.value.id
      const response = await axios.get(`http://127.0.0.1:5000/findmy/${userId}`)
      findmy.value = response.data.findmy
      favouriteItems.value = response.data.findmy.favourite
    }
  } catch (error) {
    console.error('Error fetching favourite items:', error)
  }
})

// Compute transformed folder names
const transformedFolders = computed(() => {
  if (findmy.value) {
    return Object.keys(findmy.value).map((folder) => {
      return folder.replace(/_/g, ' ').charAt(0).toUpperCase() + folder.replace(/_/g, ' ').slice(1)
    })
  } else {
    return []
  }
})
</script>

<style scoped>
.Docker {
  background-color: transparent;
  border: transparent;
  padding: 5px;
  border-radius: 0.4rem;
}
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
