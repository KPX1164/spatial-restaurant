<template>
  <div class="VStack Docker-Customised cursor-pointer items-start">
    <div class="HStack justify-start w-full">
      <div class="VStack">
        <img class="w-56 h-36 object-cover rounded-customised" :src="imageSrc" :alt="altText" />
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
          <p>({{ rating }}.0)</p>
        </div>
        <div class="justify-end HStack w-full Mark">
          <div class="Docker-button HStack gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
            Save
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import RatingStar from '@/components/RatingStar.vue'

const props = defineProps({
  imageSrc: String,
  altText: String,
  title: String,
  tags: Array,
  rating: Number
})
</script>

<style scoped>
.Mark {
  margin-top: -15px;
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
.rounded-customised {
  border-radius: 5mm;
}

.Tags {
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap; /* Prevent wrapping of tags */
  max-height: 100px; /* Set maximum height for the container */
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
  width: fit-content; /* Adjust width to fit content */
  max-width: 270px; /* Set maximum width for the container */
}
.font-medium.text-lg {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px; /* Adjust based on your needs */
}
</style>
