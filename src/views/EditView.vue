<script lang="ts" setup>
import EmployeeForm from '@/components/EmployeeForm.vue'
import { useRoute } from 'vue-router'
import { getEployeeData } from '@/composables/employeeListStore'

const route = useRoute()
const employeeId = route.params.id
const employee = getEployeeData(employeeId)
</script>

<template>
  <h1>Изменить данные</h1>
  <EmployeeForm :employee="employee" />
</template>
