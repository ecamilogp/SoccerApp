<script setup lang="ts">
import { onMounted, ref } from 'vue'
import equipo from '../assets/images/equipo.png'
import fondo from '../assets/images/futbol.png'
import LoginHome from '@/components/LoginHome.vue'

const imageColor = ref(false)
const tituloRef = ref<HTMLElement | null>(null)

const botones = [{ name: 'Iniciar sesión' }, { name: 'Registrarse' }]

// Estado para mostrar el modal y modo actual
const showLogin = ref(false)
const loginModo = ref<'login' | 'registro'>('login')

function handleBotonClick(name: string) {
  if (name === 'Iniciar sesión') {
    showLogin.value = true
    loginModo.value = 'login'
  } else if (name === 'Registrarse') {
    showLogin.value = true
    loginModo.value = 'registro'
  } else {
    showLogin.value = false
  }
}

function closeModal() {
  showLogin.value = false
}

const typewriter = (texto: string, elemento: HTMLElement) => {
  let index = 0
  const interval = setInterval(() => {
    if (index < texto.length) {
      elemento.textContent += texto.charAt(index)
      index++
    } else {
      clearInterval(interval)
    }
  }, 100)
}

onMounted(() => {
  if (tituloRef.value) {
    typewriter('Bienvenido a Sgtf', tituloRef.value)
  }
  setTimeout(() => {
    imageColor.value = true
  }, 1000)
})
</script>
<template>
  <div class="relative min-h-screen w-screen flex items-center justify-center overflow-hidden">
    <!-- Imagen de fondo -->
    <img
      :src="fondo"
      alt="fondo"
      class="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
      style="min-height: 100vh; min-width: 100vw"
    />
    <!-- Capa oscura -->
    <div class="absolute inset-0 bg-black/60 z-10"></div>
    <!-- Contenido principal -->
    <div class="relative z-20 w-full flex items-center -translate-y-5 justify-center">
      <div class="flex flex-col items-center justify-center w-full px-4 sm:px-8 md:px-16 lg:px-32">
        <img
          :src="equipo"
          alt="equipo"
          class="brightness-0 cursor-pointer object-contain w-full translate-x-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl lg:translate-x-8 h-auto"
          :class="{
            'brightness-0': !imageColor,
            'brightness-100': imageColor,
          }"
          :style="{ transition: 'filter 3s ease' }"
        />

        <div class="group flex flex-col items-center w-full max-w-md">
          <h2
            ref="tituloRef"
            class="text-white text-2xl sm:text-3xl md:text-4xl font-serif italic mb-5 cursor-pointer text-center"
          />
          <div class="flex flex-col space-y-4 items-center w-full">
            <button
              v-for="boton in botones"
              :key="boton.name"
              v-show="
                !(showLogin && loginModo === 'login' && boton.name === 'Registrarse') &&
                !(showLogin && loginModo === 'registro' && boton.name === 'Iniciar sesión')
              "
              class="bg-black hover:bg-black/80 border border-white w-full max-w-xs sm:max-w-sm md:max-w-md hover:scale-110 transition-transform duration-200 text-white px-4 py-2 rounded-lg cursor-pointer"
              @click="handleBotonClick(boton.name)"
            >
              {{ boton.name }}
            </button>
            <!-- LoginHome solo aparece si showLogin es true -->
            <div v-if="showLogin" class="-mt-2 w-full flex justify-center">
              <LoginHome :mode="loginModo" @cancel="closeModal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
