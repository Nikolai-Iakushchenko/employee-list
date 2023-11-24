import { ref } from 'vue'
import type { Ref } from 'vue'
import type { RouteParamValue } from 'vue-router'
import { mockUsers } from '@/mocks/mockUsers'

export interface Employee {
  id: string
  name: string
  lastName: string
  experience: string
  age: string
  address: string
}

export const employeeList: Ref<Employee[]> = ref(mockUsers)

export const addEmployee = (employee: Employee) => employeeList.value.push(employee)
export const editEmployee = (editedEmployee: Employee) => {
  const employeeInTheListIndex = employeeList.value.findIndex(
    (item) => item.id === editedEmployee.id,
  )
  employeeList.value[employeeInTheListIndex] = editedEmployee
}

export const deleteEmployee = (id: string) => {
  employeeList.value = employeeList.value.filter((employee) => employee.id !== id)
}

export const getEployeeData = (id: string | RouteParamValue[]) =>
  employeeList.value.find((employee) => employee.id === id)
