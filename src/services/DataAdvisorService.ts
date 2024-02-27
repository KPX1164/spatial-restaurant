import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { StudentItem } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3004',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})


export default {
  getStudentOfById(id: number): Promise<AxiosResponse<StudentItem>> {
    return apiClient.get<StudentItem>('/advisors/'+ id.toString() + "?_embed=students")
  }
}

// http://localhost:3004/advisors/1?_embed=students