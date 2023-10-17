<template>
  <div class="bg-white p-5 border-blue-400 border-2 rounded-md">
    <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Добро пожаловать!</h1>
    <h2 class="text-3xl text-gray-900">Ты готов окунуться в мир прекрасных немецких правил вождения?</h2>
    <p class="text-2xl text-gray-900">Если да,
      <RouterLink to="/questions">
        <span class="font-extrabold
                    text-transparent
                    text-3xl
                    bg-clip-text
                    bg-gradient-to-r
                    from-purple-400
                    to-pink-600"
        >
          жмакни
        </span>
      </RouterLink>
      кнопку ниже
    </p>
    <p class="text-2xl text-gray-900 pt-4 pb-10">Если нужно время на передышку, то оставь кнопку в покое и попей чаю</p>
    <RouterLink to="/questions">
      <button
          type="button"
          class="text-white
                 transition
                 ease-in-out
                 delay-150
                 bg-gradient-to-br
                 from-purple-600
                 to-blue-500
                 hover:bg-gradient-to-bl
                 hover:-translate-y-3
                 hover:scale-110
                 duration-300
                 font-medium
                 rounded-lg
                 text-sm
                 px-5
                 py-2.5
                 text-center
                 mr-2
                 mb-2"
      >
        Поехали!
      </button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>