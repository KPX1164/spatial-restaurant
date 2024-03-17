<template>
  <div class="VStack Docker-Customised cursor-pointer items-start" @click="navigateToDetail()">
    <div class="HStack justify-start">
      <div class="VStack">
        <img class="w-56 h-36 object-cover rounded-3xl" :src="imageSrc" :alt="altText" />
      </div>
      <div class="VStack pl-4 gap-2">
        <p class="font-medium text-lg">{{ title }}</p>

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
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import RatingStar from '@/components/RatingStar.vue'; // Import the Rating component

const props = defineProps({
  menuId: String,
  imageSrc: String,
  altText: String,
  title: String,
  tags: Array,
  rating: Number,
  instructions: Array,
  // Include Rating as a prop
  Rating: {
    type: Number,
    required: true
  }
});

const router = useRouter();

const navigateToDetail = () => {
  router.push({
    name: 'MenuDetailView',
    params: {
      menuId: props.menuId,
      name: props.title,
      imageSrc: props.imageSrc,
      instructions: props.instructions ? props.instructions.join('\n') : ''
    }
  });
};
</script>

<style scoped>
.Docker-Customised {
  width: 100%;
  height: fit-content;
  padding: 8px 10px;
  backdrop-filter: blur(18px) saturate(180%);
  -webkit-backdrop-filter: blur(18px) saturate(180%);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 7mm;
  border: 1px solid rgba(209, 213, 219, 0.1);
  display: flex;
  margin-bottom: 20px;
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
</style>
