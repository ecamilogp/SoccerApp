<script setup lang="ts">
import balon from '../assets/images/Balon.png'
import fondo from '../assets/images/futbol.png'

const botones = [
  { nombre: 'Inicio', enlace: '/' },
  { nombre: 'Equipos', enlace: '/equipos' },
  { nombre: 'Jugadores', enlace: '/jugadores' },
  { nombre: 'Torneos', enlace: '/torneos' },
]
</script>
<template>
  <div class="flex h-screen w-full">
    <!--contenido Izquierda -->
    <div class="w-1/2 flex items-center justify-center relative">
      <img :src="fondo" alt="fondo" class="h-full w-full object-cover" />
      <div class="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div class="flex">
          <h1
            class="text-white text-9xl font-serif italic translate-y-20 translate-x-30"
            style="text-shadow: 0 7px 4px black"
          >
            Sgft
          </h1>
          <img
            :src="balon"
            alt="balon"
            class="flex brightness-70 -translate-y-10 h-87 hover:scale-110 transition-transform duration-500"
            style="filter: drop-shadow(0 0 3px white) drop-shadow(0 0 15px black)"
          />
        </div>
      </div>
    </div>

    <!--contenido Derecha -->
    <div class="w-1/2 flex items-center justify-center relative">
      <div class="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div class="flex flex-col items-center">
          <h2
            class="text-white text-4xl font-serif italic mb-4 hover:scale-110 transition-transform duration-300"
          >
            Bienvenido a Sgft
          </h2>
          <div class="flex space-x-4">
            <button
              v-for="boton in botones"
              :key="boton.nombre"
              class="bg-gray-700 hover:bg-gray-600 hover:scale-110 transition-transform duration-200 text-white px-4 py-2 rounded-lg"
            >
              {{ boton.nombre }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
