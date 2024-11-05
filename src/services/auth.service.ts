import { EndpointEnum } from "../enums"
import { IActionResponse } from "../interfaces"
import { SetJwtCookie } from "../utils/set-jwt-cookie"
import apiService from "./api.service"

class AuthService {
    async resetPassword(data: any): Promise<IActionResponse> {
        try {
            await apiService.post(EndpointEnum.AUTH_RESET_PASSWORD, data)
            return { error: false, message: 'Acesse o seu e-mail para recuperar sua senha' }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async signin(data: any): Promise<IActionResponse> {
        const result = await apiService.post(EndpointEnum.AUTH_LOGIN, data)

        if (result.error) return { error: true, message: result.message }

        SetJwtCookie(result.access_token)

        return { error: false, message: 'Senha alterada com sucesso' }
    }
}

const authService = new AuthService()
export default authService