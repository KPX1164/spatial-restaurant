<template>
  <div class="System-default">
    <div id="Window" class="Window" @scroll="handleScroll">
      <div
        id="Secondary-Navigator"
        class="Secondary-Navigator HStack items-center justify-between rounded-xl"
        :class="{ scrolled: isScrolled }"
      >
        <div class="HStack items-center">
          <p class="Title">Menu</p>
        </div>
        <!-- Search Form -->
        <div class="HStack">
          <form @submit.prevent="search" class="w-full HStack justify-center items-center">
            <input
              class="rounded-full h-10 Input ml-10 mr-5"
              placeholder="Enter your search term..."
              type="search"
              v-model="query"
            />
            <input class="Docker-Customised" type="submit" value="Search" />
          </form>
        </div>
      </div>
      <!-- Suggestions -->
      <div class="HStack w-full items-center justify-center">
        <p v-if="query && suggestions.length > 0" class="ml-10">
          Suggestion:
          <span
            class="opacity-70 hover:opacity-100"
            v-for="(suggestion, index) in suggestions"
            :key="index"
          >
            {{ index > 0 ? ', ' : '' }}
            <!-- Add comma for all suggestions except the first one -->
            <button @click="updateSearchQuery(suggestion)">{{ suggestion }}</button>
          </span>
        </p>
      </div>

      <div class="product-container" ref="productContainer">
        <MenuCard
          v-for="(menu, index) in menus"
          :id="menu.RecipeId"
          :key="index"
          :imageSrc="menu.Images"
          :altText="menu.Name"
          :title="menu.Name"
          :tags="menu.Keywords"
          :rating="menu.AggregatedRating"
          :ingredient="menu.RecipeIngredientParts"
          :recipe="menu.RecipeInstructions"
        />

        <div v-if="isLoading" class="loading-indicator">Loading...</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import MenuCard from '@/components/MenuCard.vue'
import axios from 'axios'

type Menu = {
  RecipeId: number
  Images: string[]
  Name: string
  Keywords: string[]
  AggregatedRating: number
  RecipeIngredientParts: string[]
  RecipeInstructions: string[]
}

const isScrolled = ref(false)
const isLoading = ref(false)
const menus = ref<Menu[]>([])
let page = 1
const query = ref('')
const suggestions = ref<string[]>([]) // Define suggestions array

// const handleScroll = () => {
//   const productContainer = document.getElementById('Window')
//   if (productContainer) {
//     const scrollY = productContainer.scrollTop
//     const containerHeight = productContainer.scrollHeight
//     const windowHeight = window.innerHeight

//     if (scrollY + windowHeight >= containerHeight && !isLoading.value) {
//       fetchData()
//     }
//   }

//   isScrolled.value = scrollY > 0
// }

const handleScroll = () => {
  const productContainer = document.getElementById('Window');
  if (productContainer) {
    const scrollY = productContainer.scrollTop;
    // Log the scroll position to see if it's updating correctly
    console.log("ScrollY:", scrollY);
    isScrolled.value = scrollY > 0;
    console.log("isScrolled:", isScrolled.value);
    // Remaining logic...
  }
}

const fetchData = async () => {
  // If it's already fetching data, return immediately
  if (isLoading.value) return

  isLoading.value = true
  try {
    const url = query.value
      ? `http://localhost:9090/search?query=${query.value}&page=${page}`
      : `http://localhost:9090/recipes?page=${page}`
    const response = await axios.get(url)
    const newData = query.value ? response.data.results : response.data

    // Check if suggestion data exists in the response
    const suggestionData = response.data.suggest
    suggestions.value = suggestionData
      ? suggestionData.Name.map((item: { options: { text: string }[] }) =>
          item.options.map((option) => option.text)
        ).flat()
      : []

    // Check if newData exists and is not empty
    if (!newData || newData.length === 0) {
      console.log('No more data available.')
      return
    }

    menus.value = [...menus.value, ...newData]
    page++
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    isLoading.value = false
  }
}

const search = async () => {
  // Clear menus array when fetching new data
  page = 1
  menus.value = []
  fetchData()
}

// Function to update search query when suggestion clicked
const updateSearchQuery = (suggestion: string) => {
  query.value = suggestion
  search()
}

onMounted(() => {
  fetchData() // Fetch data when component is mounted
  const windowElement = document.getElementById('Window')
  if (windowElement) {
    windowElement.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  const windowElement = document.getElementById('Window')
  if (windowElement) {
    windowElement.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
.Secondary-Navigator {
  position: sticky;
  top: 0;
  background-color: transparent;
  z-index: 1;
  transition: background-color 0.3s;
  height: 80px;
}

.Secondary-Navigator.scrolled {
  backdrop-filter: blur(10px);
  border-radius: 10mm;
  padding-left: 30px;
  padding-right: 30px;
  border: 3px solid rgba(209, 213, 219, 0.1);
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2); /* Add drop shadow */
}

.Docker-Customised {
  width: 100%;
  height: fit-content;
  padding: 8px 30px 8px 30px;
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 7mm;
  border: 1px solid rgba(209, 213, 219, 0.1);
  display: flex;
}
.Secondary-Navigator.expanded {
  height: 150px; /* Adjust as needed */
}

.product-container {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 20px;
}

#Window {
  overflow-y: scroll;
  height: 100vh; /* Set the height to fill the viewport */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}

#Window::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, Edge */
}

.loading-indicator {
  margin-top: 10px;
  text-align: center;
  font-style: italic;
}
.Title {
  padding: 0px;
}
</style>
