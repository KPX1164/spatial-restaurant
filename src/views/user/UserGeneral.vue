<template>
    <div class="System-default">
      <p class="Heading">General</p>
      <div class="VStack w-full gap-5">
        <p>Group by</p>
        <div class="w-full pl-5 pr-5 p-5 sub-item VStack gap-2 cursor-pointer">
          <div
            v-for="(option, index) in options"
            :key="index"
            :class="{ 'selected': option === selectedOption }"
            class="option"
            @click="toggleOption(option)"
          >
            <div class="HStack justify-between">
              <div>{{ option }}</div>
              <!-- Render checkmark icon if option is selected -->
              <div v-if="option === selectedOption" class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
            </div>
            <!-- Render border if it's not the last option -->
            <div v-if="index !== options.length - 1" class="w-full border border-white opacity-10 mt-3 mb-3"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from 'vue';
  import axios from 'axios';
  
  const options = ref<string[]>(['Name', 'Best Review']);
  const selectedOption = ref<string>(localStorage.getItem('selectedOption') || 'Name'); // Retrieve from local storage
  
  // Function to toggle option selection
  const toggleOption = async (option: string) => {
    // If the clicked option is already selected, return early
    if (option === selectedOption.value) {
      return;
    }
  
    // Toggle the selection of the clicked option
    selectedOption.value = option;
  
    // Save selected option to local storage
    localStorage.setItem('selectedOption', option);
  
    // Make a PUT request to the server to update the group_by field
    await axios.put('http://127.0.0.1:5000/update-group-by', {
      email: user.email,
      selectedOption: option
    });
  };
  
  // Watch for changes in selectedOption and log the selected option
  watch(selectedOption, (newValue) => {
    console.log('Selected option:', newValue);
  });
  
  // Function to retrieve user data from local storage
  const getUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;  // Return null if no user is found in local storage
  };
  
  let user = getUser();  // Call getUser immediately when the script is set up
  if (!user) {
    console.error('User is not logged in');
    // Redirect the user to the login page, or show an error message
  }
  
  </script>
  
  <style scoped>
  .sub-item {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.75rem;
  }
  </style>
  