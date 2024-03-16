<template>
  <div class="System-default">
    <div class="Window HStack">
      <div id="Primary" class="p-7 w-1/4">
        <p class="Title">Profile</p>
        <div class="VStack gap-3">
          <div class="HStack gap-2">
            <div class="h-12 w-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-full h-full"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
            <div class="VStack gap-2">
              <div class="VStack gap-1">
                <div class="HStack gap-2">
                  <p>{{ user.firstname }}</p>
                  <p>{{ user.lastname }}</p>
                </div>
                <p class=" opacity-50">information setting</p>
              </div>
            </div>
          </div>
          <div class="m-7"></div>
          <RouterLink
            to="/profile"
            @click="toggleActive('General')"
            :class="{
              'HStack gap-2 rounded-xl p-3 cursor-pointer item': true,
              active: activeItem === 'General'
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                clip-rule="evenodd"
              />
            </svg>

            <p>General</p>
          </RouterLink>
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
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
              />
            </svg>

            <p>Favourite</p>
          </RouterLink>
          <RouterLink
            to="/profile/personalise"
            @click="toggleActive('Personalise')"
            :class="{
              'HStack gap-2 rounded-xl p-3 cursor-pointer item': true,
              active: activeItem === 'Personalise'
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
                clip-rule="evenodd"
              />
            </svg>

            <p>Personalise</p>
          </RouterLink>
        </div>
      </div>
      <div id="Secondary" class="p-7 w-3/4">
  <router-view></router-view> <!-- Display the current view here -->
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
.item.active{
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.75rem;
  border: 1px solid rgba(209, 213, 219, 0.1);
}
</style>
