<script lang="ts" setup>
import router, { Routes } from '@/router'
import type { Employee } from '@/composables/employeeListStore'
import { addEmployee, editEmployee } from '@/composables/employeeListStore'
import { v4 as uuid } from 'uuid'

const props = defineProps<{
  employee?: Employee
}>()

const formdata: Employee = {
  id: props.employee?.id || uuid(),
  name: props.employee?.name || '',
  lastName: props.employee?.lastName || '',
  experience: props.employee?.experience || '',
  age: props.employee?.age || '',
  address: props.employee?.address || ''
}

const submit = () => {
  const id = props.employee?.id ? props.employee.id : uuid()

  const employee = { ...formdata, id }

  props.employee?.id ? editEmployee(employee) : addEmployee(employee)
  router.push(Routes.HOME)
}
</script>

<template>
  <form :class="$style.form" @submit.prevent="submit">
    <input v-model="formdata.name" placeholder="Имя" required type="text" />
    <input v-model="formdata.lastName" placeholder="Фамилия" required type="text" />
    <input v-model="formdata.experience" placeholder="Стаж" required type="number" />
    <input v-model="formdata.age" placeholder="Возраст" required type="number" />
    <textarea v-model="formdata.address" placeholder="Адрес" required />
    <footer>
      <button :class="$style['add-btn']">Сохранить</button>
      <button @click="$router.push(Routes.HOME)">Отмена</button>
    </footer>
  </form>
</template>

<style module>
.form {
  display: flex;
  flex-direction: column;
}

.form input,
textarea,
footer {
  margin: 10px;
  width: 300px;
}

.form footer {
  display: flex;
  justify-content: space-between;
}

.form button {
  width: 140px;
  cursor: pointer;
}

.add-btn {
  background-color: slateblue;
  color: white;
}
</style>
