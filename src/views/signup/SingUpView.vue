<script lang="ts">
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  data() {
    return {
      selectedOptions: [],
      options: [
        { name: 'Option 1' },
        { name: 'Option 2' },
        { name: 'Option 3' },
        // Add more options as needed
      ]
    }
  }
}
</script>
<template>
  <div class="VStack gap-10">
    <div class="steps">
      <div class="step space-y-8">
        <div class="VStack w-full gap-2">
          <p>Email name</p>
          <input class="Input" type="text" />
        </div>
        <div class="VStack w-full gap-2">
          <p>Password</p>
          <input class="Input tracking-widest" type="password" />
        </div>
        <div class="HStack gap-4">
          <div class="VStack w-full gap-2">
            <p>First name</p>
            <input class="Input" type="text" />
          </div>
          <div class="VStack w-full gap-2">
            <p>Last name</p>
            <input class="Input" type="text" />
          </div>
        </div>
      </div>
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

    <!-- <div class="w-full items-center VStack justify-center gap-2">
      <div class="VStack w-full gap-4">
        <Button class="Button full">
          <RouterLink to="/signup/personalise">Continue</RouterLink>
        </Button>
      </div>
      <div class="Section-break"></div>
      <p>
        I already have account!
        <RouterLink to="/signin" class="underline"> back to sign in</RouterLink>
      </p>
    </div> -->
  </div>
</template>
<style scoped>
.Button.Customised {
  padding-left: 30px;
  padding-right: 30px;
}
</style>
