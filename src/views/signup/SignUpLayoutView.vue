<template>
  <div class="System-default">
    <div class="Window">
      <div class="text-white HStack gap-5 h-full">
        <div class="w-1/2 h-full">
          <img class="Banner h-full object-cover" src="/src/assets/welcome.jpeg" alt="" />
        </div>
        <div class="w-1/2">
          <div class="w-full HStack justify-between">
            <p class="Title pl-4">Sign Up</p>

            <!-- <Button class="Button text-black">
              <RouterLink to="/signup/personalise">Continue</RouterLink>
            </Button> -->
          </div>
          <div class="VStack items-center">
            <div class="w-4/5">
              <router-view></router-view>
              <!-- Render child route component here -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

</script>

