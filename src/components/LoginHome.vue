<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{ mode: 'login' | 'registro' }>()
const emit = defineEmits<{ (e: 'cancel'): void }>()

const inputValue = ref('')

function closeModal() {
  emit('cancel')
}
</script>
<template>
  <Transition name="fade-scale" appear>
    <div
      class="flex flex-col justify-center items-center min-h-auto p-4 sm:p-6 rounded-lg shadow-md bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
    >
      <input
        type="text"
        :placeholder="props.mode === 'login' ? 'Usuario' : 'Nuevo usuario'"
        class="w-full p-2 border rounded mb-2 text-base sm:text-lg"
      />
      <q-input v-model="inputValue" label="Standard" />
      <input
        type="password"
        :placeholder="props.mode === 'login' ? 'Contraseña' : 'Nueva contraseña'"
        class="w-full p-2 border rounded text-base sm:text-lg"
      />
      <input
        v-if="props.mode === 'registro'"
        type="password"
        placeholder="Confirmar contraseña"
        class="w-full p-2 border rounded mt-2 text-base sm:text-lg"
      />
      <div
        class="flex flex-col justify-center sm:flex-row sm:space-x-5 space-y-2 sm:space-y-0 mt-5 w-full"
      >
        <button class="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded w-full sm:w-auto">
          {{ props.mode === 'login' ? 'Continuar' : 'Registrarse' }}
        </button>
        <button
          @click="closeModal"
          class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Cancelar
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Transición fade + scale para el modal */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
