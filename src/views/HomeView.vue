<script lang="ts" setup>
import { employeeList } from '../composables/employeeListStore'
import { Routes } from '@/router'
import EmployeeCard from '@/components/EmployeeCard.vue'
</script>

<template>
  <main>
    <h1>{{ $t('message.employeeList') }}</h1>
    <button :class="$style['add-btn']" @click="$router.push(Routes.ADD)">
      {{ $t('message.addEmployee') }}
    </button>
    <table v-if="employeeList.length">
      <thead>
        <tr>
          <th>{{ $t('message.name') }}</th>
          <th>{{ $t('message.lastName') }}</th>
          <th>{{ $t('message.experience') }}</th>
          <th>{{ $t('message.age') }}</th>
          <th>{{ $t('message.address') }}</th>
          <th></th>
        </tr>
      </thead>
      <EmployeeCard v-for="employee in employeeList" :key="employee.id" :employee="employee" />
    </table>
  </main>
</template>

<style module>
table {
  table-layout: fixed;
  width: 100%;
  word-wrap: break-word;
  border: 1px solid black;
  margin-top: 10px;
  border-collapse: collapse;
  text-align: left;
}

tr {
  border: 1px solid black;
}

th,
td {
  padding: 10px;
  width: 150px;
}

th:last-of-type,
td:last-of-type {
  width: 50px;
}

th {
  font-weight: bold;
}

td {
  cursor: pointer;
}

.add-btn {
  height: 30px;
  cursor: pointer;
}
</style>
