import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { userStore } from '@/stores/UserStore'
// Define the Axios client
const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

// Define the sign-up function
export async function signUp(userData: {
  firstname: string
  lastname: string
  email: string
  password: string
}): Promise<void> {
  try {
    // Make the HTTP POST request to the sign-up endpoint
    const response = await apiClient.post('/auth/sign-up', userData)

    // Handle response if needed
    console.log('Sign-up successful:', response.data)

    // Optionally return response data or handle other logic
  } catch (error) {
    // Handle error
    console.error('Sign-up failed:', error)
    throw error // Optionally re-throw the error for further handling
  }
}
// Define the sign-in function
export async function signIn(credentials: { email: string; password: string }): Promise<void> {
  try {
    // Make the HTTP POST request to the sign-in endpoint
    const response = await apiClient.post('/sign-in', credentials)

    // Extract token and user from response
    const { token, user } = response.data

    // Store token in localStorage
    localStorage.setItem('access_token', token)

    // Stringify user object before storing it in localStorage
    localStorage.setItem('user', JSON.stringify(user))

    // Handle response if needed
    console.log('Sign-in successful:', response.data)

    const userState = userStore()
    userState.updateUser(true)
    console.log(userState);
    
  } catch (error) {
    // Handle error
    console.error('Sign-in failed:', error)
    throw error // Optionally re-throw the error for further handling
  }
}

// Define the sign-out function
export async function signOut(): Promise<void> {
  try {
    // Clear access token from localStorage
    localStorage.removeItem('access_token')

    // Clear user data from localStorage
    localStorage.removeItem('user')

    // Optionally, you can also clear any other user-related state
    const userState = userStore()
    userState.updateUser(false) // Assuming updateUser function handles the user state

    // Handle sign-out success
    console.log('Sign-out successful')

  } catch (error) {
    // Handle error
    console.error('Sign-out failed:', error)
    throw error // Optionally re-throw the error for further handling
  }
}
