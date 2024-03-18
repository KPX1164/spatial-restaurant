<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { signUp } from '@/services/AuthService' // Import the sign-up function

const data = reactive({
  firstname: '',
  lastname: '',
  email: '',
  password: ''
})

const router = useRouter()

const submit = async () => {
  try {
    await signUp(data) // Call the signUp function with the user data
    await router.push('/sign-in')
  } catch (error) {
    // Handle error, if necessary
    console.error('Sign-up error:', error)
  }
}
</script>

<template>
  <div class="VStack gap-10">
    <div class="steps">
      <form @submit.prevent="submit" class="step space-y-8">
        <div class="VStack w-full gap-2">
          <p>Email</p>
          <input v-model="data.email" class="Input" type="text" />
        </div>
        <div class="VStack w-full gap-2">
          <p>Password</p>
          <input v-model="data.password" class="Input tracking-widest" type="password" />
        </div>
        <div class="VStack gap-4 lg:VStack">
          <div class="VStack w-full gap-2">
            <p>First name</p>
            <input v-model="data.firstname" class="Input" type="text" />
          </div>
          <div class="VStack w-full gap-2">
            <p>Last name</p>
            <input v-model="data.lastname" class="Input" type="text" />
          </div>
        </div>
        <div class="HStack gap-2 items-center">
          <input
            type="checkbox"
            class="rounded-full bg-black appearance-none w-6 h-6 backdrop-blur backdrop-saturate-23 bg-opacity-50 checked:bg-white"
          />
          <p class="underline">Term and services</p>
        </div>

        <button class="Button full" type="submit">Sign up</button>
      </form>
      <div class="step">
        <!-- <multiselect
          v-model="selectedOptions"
          :options="options"
          multiple
          :close-on-select="false"
          placeholder="Select options"
          label="name"
          track-by="name"
        ></multiselect> -->
      </div>
      <div class="step"></div>
    </div>
  </div>
</template>

<style scoped>
.Button.Customised {
  padding-left: 30px;
  padding-right: 30px;
}
</style>
