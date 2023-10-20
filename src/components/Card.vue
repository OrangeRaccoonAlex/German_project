<template>
  <div v-for="(card, index) in questionsData.card" :key="index">
    <div v-if="index === currentIndex">
      <div>
        <img alt="ебаная картинка" style="height: 400px" :src="card.img">
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
        <!-- TODO не работают стили на радио-кнопку-->
        <input
            :value="answer.correct"
            v-model="answerChecked"
            name="answersRadio"
            type="radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
        />
        <div class="pl-4">
          <p class="text-xl font-medium text-black">{{ answer.answer }}</p>
          <p class="text-green-700" v-if="correctAnswer && currentAnswerId === answer.id">верный ответ</p>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-end">
    <button class="px-4
                   py-1
                   mr-4
                   text-sm
                   text-purple-600
                   font-semibold
                   rounded-full
                   border
                   border-purple-200
                   hover:text-white
                   hover:bg-purple-400
                   duration-300
                   hover:border-transparent
                   disabled:opacity-25"
            :disabled="answerChecked === null"
            @click="showCorrectAnswer"
    >
      Показать ответы
    </button>
    <button
        v-if="isLastQuestion"
        :disabled="!correctAnswer"
        class="px-4
               py-1
               text-sm
               bg-purple-600
               text-white
               font-semibold
               rounded-full
               border
               border-purple-200
               hover:bg-purple-900
               hover:border-transparent
               duration-300
               disabled:opacity-25"
        @click="nextQuestion"
    >
      Далее
    </button>

    <RouterLink
        to="/home"
        v-else
    >
      <button
          class="px-4
                 py-1
                 text-sm
                 text-purple-600"
      >
        Завершить
      </button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import questionsData from '../../data/questionsData.json'
import { computed, ref } from "vue";

let currentIndex = ref(0)
let correctAnswer = ref(false)
let currentAnswerId = ref(0)
let answerChecked = ref(null)
let progress = (Math.floor(currentIndex.value + 1) * 100) / questionsData.card.length;

let stepCounter = ():number => {
  return currentIndex.value++
}

let progressBarStep = ():number => {
  if(progress < 100) {
    progress = (Math.floor(currentIndex.value + 1) * 100) / questionsData.card.length;
  }
  return 100;
}

const showCorrectAnswer = () => {
  let currentQuestion =  questionsData.card[currentIndex.value]
  let currentCorrectAnswer = currentQuestion.answers.find(item => item.correct === true)
  // TODO поправить костыль
  correctAnswer.value = currentCorrectAnswer!.correct
  currentAnswerId.value = currentCorrectAnswer!.id
}

const isLastQuestion = computed(() => {
  return currentIndex.value + 1 !== questionsData.card.length;
})

function nextQuestion(): void {
  stepCounter()
  progressBarStep()
  correctAnswer.value = false
  currentAnswerId.value = 0
}

</script>

<style scoped>

</style>