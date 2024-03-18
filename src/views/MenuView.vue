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
        <div class="HStack">
          
            <form @submit.prevent="search" class="w-full HStack justify-center items-center">
              <input
                class=" rounded-full h-10 Input ml-10 mr-10"
                placeholder="Enter your search term..."
                type="search"
                v-model="query"
              />
              <input class="" type="submit" value="" />
            </form>

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
          :rating="menu.AggregatedRating"
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
  Images: string[]
  Name: string
  Keywords: string[]
  AggregatedRating: number
}

const isScrolled = ref(false)
const isLoading = ref(false)
const menus = ref<Menu[]>([])
let page = 1
const query = ref('')

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
const fetchData = async () => {
  // If it's already fetching data, return immediately
  if (isLoading.value) return;

  isLoading.value = true;
  try {
    const url = query.value ? `http://localhost:9090/search?query=${query.value}&page=${page}` : `http://localhost:9090/recipes?page=${page}`;
    const response = await axios.get(url);
    const newData = query.value ? response.data.results : response.data; // Use response.data if it's fetching from /recipes

    // Check if newData exists and is not empty
    if (!newData || newData.length === 0) {
      console.log('No more data available.');
      return;
    }

    menus.value = [...menus.value, ...newData];
    page++;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    isLoading.value = false;
  }
}




const search = async () => {
  // Clear menus array when fetching new data
  page = 1
  menus.value = []
  fetchData()
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
.Title {
  padding: 0px;
}
</style>
