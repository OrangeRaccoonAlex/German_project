<template>
  <div v-for="(card, index) in answers.card" :key="index">
    <div v-if="index === currentIndex">
      <div>
        <!--TODO подумать, как вывести картинку-->
        <img alt="ебаная картинка" style="max-height: 200px" :src="card.img">
      </div>

      <div>
        <span class="text-black">{{ card.question }}</span>
      </div>

      <div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div class="bg-purple-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
             :style="`width: ${progress}%`"
        >
          {{ `${progress}%` }}
        </div>
      </div>

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
  </div>
  <button class="  px-4
                   py-1
                   text-sm
                   text-purple-600
                   font-semibold
                   rounded-full
                   border
                   border-purple-200
                   hover:text-white
                   hover:bg-purple-600
                   hover:border-transparent"
          @click="nextQuestion"
  >
    Далее
  </button>
</template>

<script setup lang="ts">
import answers from '../../data/answers.json'
import { ref} from "vue";

let currentIndex = ref(0)
let progress = (Math.floor(currentIndex.value + 1) * 100) / answers.card.length;

function stepCounter():number {
  return currentIndex.value++
}

function progressBarStep():number {
  if(progress < 100) {
    progress = (Math.floor(currentIndex.value + 1) * 100) / answers.card.length;
  }
  return 100;
}

function nextQuestion(): any {
  stepCounter()
  progressBarStep()
}

</script>

<style scoped>

</style>