<template>
    <div class=" flex flex-col items-center gap-4 p-24">
        <img src="../assets/pngtree-error-404-page-not-found-png-image_6681621.jpg" alt="#404-notfound" class="img w-64">
        <h1>404 NOT FOUND</h1>
        <h1>Oops!</h1>
        <h3>The resource you're looking for is not here</h3>
        <RouterLink :to="{ name:'student-list' }">Back to home page</RouterLink>
    </div>
</template>

<style scoped>
</style>