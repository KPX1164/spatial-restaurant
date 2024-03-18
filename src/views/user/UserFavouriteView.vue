<template>
  <div class="System-default">
    <p class="Heading">Favourited</p>
    <div class="VStack stage">
      <div v-if="recipes.length > 0">
        <MenuCard
          v-for="(menu, index) in recipes"
          :key="index"
          :id="menu?.RecipeId"
          :imageSrc="menu?.Images"
          :altText="menu?.Name"
          :title="menu?.Name"
          :tags="menu?.Keywords"
          :rating="menu?.AggregatedRating"
          :ingredient="menu?.RecipeIngredientParts"
          :recipe="menu?.RecipeInstructions"
        />
      </div>
      <div v-else>
        <!-- Optionally, display a message if no recipes are available -->
        <p>No favourited recipes available.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import type { User } from '@/type'
import MenuCard from '@/components/MenuCard.vue' // Import the MenuCard component

const user = ref<User>()
const favouriteItems = ref<number[]>([])
const recipes = ref<Recipe[]>([]) // Ensure recipes is reactive

// Fetch user data from localStorage
const token = localStorage.getItem('access_token')
if (token) {
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    user.value = JSON.parse(storedUser)
  }
}

const fetchRecipe = async (recipeID: string): Promise<Recipe | null> => {
  try {
    const response = await axios.get(`http://127.0.0.1:9090/recipe?rid=${recipeID}`)
    return response.data.recipe
  } catch (error) {
    console.error(`Error fetching recipe with ID ${recipeID}:`, error)
    return null // Return null if there's an error
  }
}

onMounted(async () => {
  if (user.value && user.value.id) {
    try {
      const userId = user.value.id
      const response = await axios.get(`http://127.0.0.1:5000/findmy/${userId}`)
      favouriteItems.value = response.data.findmy.favourite
      console.log(favouriteItems.value)

      for (const recipeId of favouriteItems.value) {
        const data = await fetchRecipe(recipeId.toString())
        if (data) {
          // Only push valid recipes to the recipes array
          recipes.value.push(data)
          console.log(data)
        }
      }
    } catch (error) {
      console.error('Error fetching favourite items:', error)
    }
  }
})
</script>

<style scoped>
.System-default{
  width: 100%;
  height: 100%;
}
.stage {
  overflow-y: scroll;
  height: 100%; /* Set the height to fill the viewport */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}
.stage::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, Edge */
}
</style>
