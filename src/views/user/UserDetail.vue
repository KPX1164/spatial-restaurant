<template>
  <div class="System-default">
    <p class="Heading">Setting</p>
    <div class="VStack w-full gap-10">
      <div class="w-full pl-5 pr-5 p-5 sub-item VStack gap-2">
        <div class="HStack w-full justify-between">
          <p>First name</p>
          <p class="opacity-50">{{ user.firstname }}</p>
        </div>
        <div class="w-full border border-white opacity-10 mt-3 mb-3"></div>
        <div class="HStack w-full justify-between">
          <p>Last name</p>
          <p class="opacity-50">{{ user.lastname }}</p>
        </div>
      </div>
      <div class="w-full">
        <div class="w-full pl-5 pr-5 p-5 sub-item VStack gap-2">
          <div class="HStack w-full justify-between">
            <p>Email</p>
            <div class="HStack gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 opacity-50"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                />
              </svg>
              <p class="opacity-50">{{ user.email }}</p>
            </div>
          </div>
        </div>
        <div class="HStack items-center gap-2">
          <p class="opacity-60 pl-3 pt-3">Your eamil is connected</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sub-item {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 0.75rem;
}
</style>
<script setup lang="ts">
import { ref } from 'vue'

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
