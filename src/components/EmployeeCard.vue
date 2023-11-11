<script lang="ts" setup>
import { deleteEmployee } from '@/composables/employeeListStore'
import type { Employee } from '@/composables/employeeListStore'
import router from '@/router'

const props = defineProps<{
  employee: Employee
}>()

const openForm = () => router.push(`/employee/${props.employee.id}`)
</script>

<template>
  <tr @click="openForm">
    <td>{{ props.employee.name }}</td>
    <td>{{ props.employee.lastName }}</td>
    <td>{{ props.employee.experience }}</td>
    <td>{{ props.employee.age }}</td>
    <td>{{ props.employee.address }}</td>
    <td>
      <button :class="$style['delete-btn']" @click.stop="deleteEmployee(props.employee.id)">
        X
      </button>
    </td>
  </tr>
</template>

<style module>
.delete-btn {
  color: red;
  border: 1px solid black;
  padding: 6px 8px;
  border-radius: 5px;
}

.delete-btn:hover {
  background-color: #e5e5e5;
  cursor: pointer;
}
</style>