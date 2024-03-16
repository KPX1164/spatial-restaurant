<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import RatingStar from '@/components/RatingStar.vue'


const isScrolled = ref(false)

const handleScroll = () => {
  const windowElement = document.getElementById('Window')
  if (windowElement) {
    isScrolled.value = windowElement.scrollTop > 0
  }
}

onMounted(() => {
  console.log('Component mounted')
  const windowElement = document.getElementById('Window')
  if (windowElement) {
    windowElement.addEventListener('scroll', handleScroll)
  }
})

onUnmounted(() => {
  console.log('Component unmounted')
  const windowElement = document.getElementById('Window')
  if (windowElement) {
    windowElement.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <div class="System-default">
    <div id="Window" class="Window">
      <div
        id="Secondary-Navigator"
        class="Secondary-Navigator HStack items-center justify-between rounded-xl"
        :class="{ scrolled: isScrolled }"
      >
        <div class="HStack mt-10">
          <p class="Title">Menu</p>
        </div>
       

        <div class="HStack mt-5 items-center justify-center">
          <div id="sb-search" class="sb-search">
						<form>
							<input class="sb-search-input" placeholder="Enter your search term..." type="search" name="search" id="search">
							<input class="sb-search-submit" type="submit" value="">
							<span class="sb-icon-search"></span>
						</form>
					</div>
          
        </div>
      </div>

      <div class="product-container">
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="4" />
            </div>
          </div>
        </div>
        <div class="VStack Window ignore min-w-max cursor-pointer">
          <div class="HStack">
            <div class="VStack">
              <img
                class="w-56 h-36 object-cover rounded-3xl"
                src="https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/49/tHou0UsyTiAsfQo29Fpi_Lombardi%20Chicken%202.jpg"
                alt=""
              />
            </div>
            <div class="VStack pl-4 gap-2">
              <p class="font-medium text-lg">Chicken Breasts Lombardi</p>
              <div class="HStack justify-center font-normal text-sm gap-2">
                <p class="Docker ignore">Fried food</p>
                <p class="Docker ignore">Appetiser food</p>
              </div>
              <RatingStar :rating="2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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
}
</style>
