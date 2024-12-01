import { instance } from "common/instance"
import { LoginArgs } from "./authApi.types"
import { BaseResponse } from "common/types"

export const authApi = {
  login(payload: LoginArgs) {
    return instance.post<BaseResponse<{ userId: number; token: string }>>(`auth/login`, payload)
  },
  logout() {
    return instance.delete<BaseResponse>("auth/login")
  },
  me() {
    return instance.get<BaseResponse<{ id: string; email: string; login: string }>>("auth/me")
  },
}