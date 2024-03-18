<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import MenuCard from '@/components/MenuCard.vue'
import axios from 'axios'

type Menu = {
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

const handleScroll = () => {
  const productContainer = document.getElementById('Window')
  if (productContainer) {
    const scrollY = productContainer.scrollTop
    const containerHeight = productContainer.scrollHeight
    const windowHeight = window.innerHeight

    if (scrollY + windowHeight >= containerHeight && !isLoading.value) {
      fetchData()
    }
  }

  isScrolled.value = scrollY > 0
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

async function fetchData() {
  isLoading.value = true
  try {
    
    const response = await axios.get(`http://localhost:9090/recipes?page=${page}`)
    const newData = response.data

    // Check if there is any new data
    if (newData.length === 0) {
      // No more data available, stop fetching
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
</script>
<template>
  <div class="VStack text-white">
    <div class="VStack text-center align-middle items-center space-y-10 mt-20">
      <div class="space-y-6">
        <p class="text-5xl font-semibold">
          Unlock New Way with Super Idol
          <br />
          Unleash the Spirit of Management!
        </p>
        <p class="text-gray-500">
          The Elephant pants are loose, wide-legged pants with colourful patterns, often featuring
          elephant designs.
          <br />
          They are known for their comfortable and relaxed fit, popular for casual and beachwear.
        </p>
      </div>
      <div id="Window" class="Pseudo-Window w-full pl-10 pr-10" @scroll="handleScroll">
        <div class="product-container" ref="productContainer">
          <MenuCard
          v-for="(menu, index) in menus"
          :key="index"
          :imageSrc="menu.Images[0]"
          :altText="menu.Name"
          :title="menu.Name"
          :tags="menu.Keywords"
          :rating="menu.AggregatedRating"
          :ingredient="menu.RecipeIngredientParts"
          :recipe="menu.RecipeInstructions"
        />
          <div v-if="isLoading" class="loading-indicator">Loading...</div>
        </div>
        <div class="bg-black"></div>
      </div>
    </div>
  </div>
</template>

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
  border: 1px solid rgba(209, 213, 219, 0.1);
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
</style>
