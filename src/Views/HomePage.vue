<script setup lang="ts">
import { onMounted, ref } from 'vue'
// import balon from '../assets/images/Balon.png'
import equipo from '../assets/images/equipo.png'
import fondo from '../assets/images/futbol.png'

const imageColor = ref(false)

const botones = [
  { nombre: 'Iniciar sesión', enlace: '/' },
  { nombre: 'Registrarse', enlace: '/registrarse' },
]

onMounted(() => {
  setTimeout(() => {
    imageColor.value = true
  }, 1000)
})
</script>
<template>
  <div class="flex h-screen w-full">
    <!--contenido Izquierda -->
    <div class="w-1/2 flex items-center justify-center relative">
      <img :src="fondo" alt="fondo" class="h-full w-full object-cover" />
      <div class="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div class="flex">
          <h1
            class="text-white text-9xl font-serif italic hover:scale-110 transition-transform duration-500 cursor-pointer"
            style="text-shadow: 0 7px 4px black"
          >
            Sgtf
          </h1>
          <!-- <img
            :src="balon"
            alt="balon"
            class="flex brightness-70 -translate-y-10 h-87 hover:scale-110 transition-transform duration-500"
            style="filter: drop-shadow(0 0 3px white) drop-shadow(0 0 15px black)"
          /> -->
        </div>
      </div>
    </div>

    <!--contenido Derecha -->
    <div class="w-1/2 flex items-center justify-center relative">
      <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div class="group flex flex-col items-center">
          <img
            :src="equipo"
            alt="equipo"
            class="brightness-0 translate-x-5 cursor-pointer"
            :class="{
              'brightness-0': !imageColor,
              'brightness-100': imageColor,
            }"
            :style="{ transition: 'filter 3s ease' }"
          />
          <h2 class="text-white text-4xl font-serif italic mb-4 cursor-pointer">
            Bienvenido a Sgtf
          </h2>
          <div class="flex flex-col space-y-4 items-center">
            <button
              v-for="boton in botones"
              :key="boton.nombre"
              class="bg-black hover:bg-black/80 w-80 hover:scale-110 transition-transform duration-200 text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              {{ boton.nombre }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
