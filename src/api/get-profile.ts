import { api } from '@/lib/axios'

export interface GetProfileResponse {
  name: string
  id: string
  email: string
  phone: string 
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/client/check-auth')

  return response.data
}