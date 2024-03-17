<template>
  <div class="System-default">
    <div id="Window" class="Window" @scroll="handleScroll">
      <div
        id="Secondary-Navigator"
        class="Secondary-Navigator HStack items-center justify-between rounded-xl"
        :class="{ scrolled: isScrolled }"
      >
        <div class="HStack mt-10">
          <p class="Title">Menu</p>
        </div>

        <div class="HStack mt-5 items-center justify-center">
          <div id="sb-search" class="sb-search">
            <form>
              <input
                class="sb-search-input"
                placeholder="Enter your search term..."
                type="search"
                name="search"
                id="search"
              />
              <input class="sb-search-submit" type="submit" value="" />
              <span class="sb-icon-search"></span>
            </form>
          </div>
        </div>
      </div>

      <div class="product-container" ref="productContainer">
        <MenuCard
          v-for="(menu, index) in menus"
          :key="index"
          :imageSrc="menu.Images[0]"
          :altText="menu.Name"
          :title="menu.Name"
          :tags="menu.Keywords"
          :rating="menu.Rating"
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

const isScrolled = ref(false)
const isLoading = ref(false)
const menus = ref([])
let page = 1

const handleScroll = () => {
  const productContainer = document.getElementById('Window')
  const scrollY = productContainer.scrollTop
  const containerHeight = productContainer.scrollHeight
  const windowHeight = window.innerHeight

  if (scrollY + windowHeight >= containerHeight && !isLoading.value) {
    fetchData()
  }

  isScrolled.value = scrollY > 0
}

onMounted(() => {
  fetchData() // Fetch data when component is mounted
  const windowElement = document.getElementById('Window')
  windowElement.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  const windowElement = document.getElementById('Window')
  windowElement.removeEventListener('scroll', handleScroll)
})

async function fetchData() {
  isLoading.value = true
  try {
    const response = await axios.get(`http://localhost:8080/spatial-food?page=${page}`)
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
