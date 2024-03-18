<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center VStack" v-if="showPopup"
    @click="togglePopup">
    <!-- Content of the popup -->

    <div class="text-white Window-customised p-5">
      <div class="VStack gap-10">
        <img v-if="imageSrc && imageSrc.length > 0" class="w-full max-h-72 object-cover rounded-lg" :src="imageSrc[0]" :alt="altText" />
        <p class="Title text-center">{{ title }}</p>
        <div class="Tags">
          <div class="TagsContainer">
            <div class=" HStack gap-2" style="justify-content: flex-center">
              <!-- Set justify-content to flex-start -->
              <p v-for="tag in tags" :key="tag" class="Docker ignore Tag">{{ tag }}</p>
            </div>
          </div>
        </div>
        <div class="HStack gap-5">
          <p class="Heading">Rating:</p>
          <RatingStar :rating="rating" />
          <p>({{ rating }})</p>
        </div>

        <div class="VStack items-start gap-4">
          <p class="Heading">Ingredients</p>
          <p class="text-base pl-10">{{ ingredient?.join(', ') }}</p>
        </div>

        <div class="VStack items-start gap-4">
          <p class="Heading">Recipe Instructions</p>
          <ol class="text-left pl-10">
            <li v-for="(instruction, index) in recipe" :key="index" class="text-base">
              {{ index + 1 }}. {{ instruction }}
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <div class="VStack Docker-Customised cursor-pointer items-start" @click="togglePopup">
    <div class="HStack justify-start w-full">
      <div class="VStack">
        <img class="w-56 h-36 object-cover rounded-customised" :src="imageSrc && imageSrc.length > 0 ? imageSrc[0] : 'https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg'" :alt="altText" />
      </div>
      <div class="VStack pl-4 gap-2 w-full">
        <div class="HStack w-full justify-between">
          <p class="font-medium text-lg">{{ title }}</p>
        </div>

        <div class="Tags">
          <div class="TagsContainer">
            <div class="c HStack gap-2" style="justify-content: flex-start">
              <!-- Set justify-content to flex-start -->
              <p v-for="tag in tags" :key="tag" class="Docker ignore Tag">{{ tag }}</p>
            </div>
          </div>
        </div>
        <div class="HStack gap-2">
          <RatingStar :rating="rating" />
          <p>({{ rating }})</p>
        </div>
        <div class="justify-end HStack w-full Mark">
          <div class="Docker-button HStack gap-2" @click="saveRecipe">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            Save
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import RatingStar from '@/components/RatingStar.vue'
import axios from 'axios' // Import axios for making HTTP requests

const props = defineProps({
  id: Number,
  imageSrc: Array,
  altText: String,
  title: String,
  tags: Array,
  rating: Number,
  ingredient: Array,
  recipe: Array
})
const showPopup = ref(false)


const togglePopup = () => {
  showPopup.value = !showPopup.value

}

const saveRecipe = () => {
  console.log("save!");
  
  // Make an HTTP POST request to save the recipe
  axios.post(`http://127.0.0.1:5000/add-to-favorites/${user.id}/${props.id}`)
    .then(response => {
      console.log(response.data.message); // Log success message
    })
    .catch(error => {
      console.error('Error saving recipe:', error.response.data.message);
    });
};


// Function to retrieve user data from local storage
const getUser = () => {
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    return JSON.parse(storedUser);
  }
  return null;  // Return null if no user is found in local storage
};

let user = getUser();  // Call getUser immediately when the script is set up

</script>


<style scoped>
.Mark {
  margin-top: -15px;
}

.Title {
  padding: 0px;
}

.Heading {
  padding: 0px;
}

.Docker-Customised {
  width: 100%;
  height: fit-content;
  padding: 14px;
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 7mm;
  border: 1px solid rgba(209, 213, 219, 0.1);
  display: flex;
  margin-bottom: 20px;
}
.Docker-Customised:hover {
  width: 100%;
  height: fit-content;
  padding: 14px;
  backdrop-filter: blur(11px) saturate(23%);
  -webkit-backdrop-filter: blur(11px) saturate(23%);
  background: rgba(20, 20, 20, 0.5);
  border-radius: 7mm;
  border: 1px solid rgba(209, 213, 219, 0.1);
  display: flex;
  margin-bottom: 20px;
}

.Docker-button {
  width: fit-content;
  height: fit-content;
  padding: 8px 15px;
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 7mm;
  border: 1px solid rgba(209, 213, 219, 0.1);
}

.Window-customised::-webkit-scrollbar {
  display: none;
  /* Hide scrollbar for Chrome, Safari, Edge */
}

.Window-customised {
  width: 80%;
  height: 80%;
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 7mm;
  border: 1px solid rgba(209, 213, 219, 0.1);
  overflow-y: scroll;
  scrollbar-width: none;
  /* Hide scrollbar for Firefox */
}

.rounded-customised {
  border-radius: 5mm;
}

.Tags {
  overflow-x: auto;
  /* Enable horizontal scrolling */
  white-space: nowrap;
  /* Prevent wrapping of tags */
  max-height: 100px;
  /* Set maximum height for the container */
}

/* Hide the scrollbar */
.Tags::-webkit-scrollbar {
  display: none;
}

/* Optional: Customize scrollbar appearance for Firefox */
.Tags {
  scrollbar-width: none;
}

.TagsContainer {
  width: fit-content;
  /* Adjust width to fit content */
  max-width: 270px;
  /* Set maximum width for the container */
}

.font-medium.text-lg {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  /* Adjust based on your needs */
}
</style>
