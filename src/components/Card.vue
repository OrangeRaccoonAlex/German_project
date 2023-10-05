<template>
<!--  TODO в слеующий раз вывести в виде отдельных карточек-->
  <div v-for="card in answers.card" :key="card.id">
    <div>
      <!--TODO подумать, как вывести картинку-->
      <img alt="ебаная картинка" style="max-height: 200px" :src="card.img">
    </div>

    <div>
      <span class="text-black">{{ card.question }}</span>
    </div>

    <div class="bg-green-400">прогрессбар</div>

    <div v-for="answer in card.answers" :key="answer.id" class="flex items-center">
      <!-- TODO не работают стили на чек-бокс-->
      <input
          type="checkbox"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
      />
      <div class="pl-4">
        <p class="text-xl font-medium text-black">{{ answer.answer }}</p>
        <p class="text-green-700" v-if="answer.correct">верный ответ</p>
        <p class="text-red-500" v-if="!answer.correct">не верный ответ</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import answers from '../../data/answers.json'
// import {ref, onMounted, watch} from "vue";

// const answerCardLocalState = ref('answerCard')
</script>

<style scoped>

</style>