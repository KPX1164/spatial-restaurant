<script setup lang="ts"></script>
<template>
  <div class="System-default">
    <div class="Window">
      <div class="text-white HStack gap-5 h-full">
        <div class="w-1/2 h-full">
          <img class="Banner h-full object-cover" src="/src/assets/wallpaper.webp" alt="" />
        </div>
        <div class="w-1/2">
          <div class="w-full HStack justify-between">
            <p class="Title pl-4">Sign In</p>

            <!-- <Button class="Button text-black">
              <RouterLink to="/">Sign in</RouterLink>
            </Button> -->
          </div>
          <div class="VStack items-center">
            <div class="w-4/5">
              <div class="VStack gap-2 xl:gap-10">
                <div class="VStack w-full gap-4">
                  <p>Email</p>
                  <input class="Input" type="text" />
                </div>
                <div class="VStack w-full gap-4">
                  <p>Passsword</p>
                  <input class="Input tracking-widest" type="password" />
                </div>
                <div class="VStack w-full gap-4 text-center">
                  <Button class="Button full">Sign in</Button>
                  <div class="Section-break"></div>
                  <p>
                    Don't have an account yet?
                    <RouterLink to="/signup" class="underline"> create account now!</RouterLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
