<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { signIn } from '@/services/AuthService' // Import the signIn function

const data = reactive({
  email: '',
  password: ''
})

const router = useRouter()

const submit = async () => {
  try {
    await signIn(data) 

    await router.push('/')
  } catch (error) {
    console.error('Sign-in error:', error)
  }
}
</script>

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
              <form @submit.prevent="submit" class="VStack gap-2 xl:gap-10">
                <div class="VStack w-full gap-4">
                  <p>Email</p>
                  <input v-model="data.email" class="Input" type="text" />
                </div>
                <div class="VStack w-full gap-4">
                  <p>Passsword</p>
                  <input v-model="data.password" class="Input tracking-widest" type="password" />
                </div>
                <div class="VStack w-full gap-4 text-center">
                  <Button class="Button full">Sign in</Button>
                  <div class="Section-break"></div>
                  <p>
                    Don't have an account yet?
                    <RouterLink to="/sign-up" class="underline"> create account now!</RouterLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
