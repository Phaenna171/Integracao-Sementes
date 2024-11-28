import { EndpointEnum } from "../enums"
import { IActionResponse } from "../interfaces"
import apiService from "./api.service"

class MailService {
    async register(data: any): Promise<IActionResponse> {
        console.log(data)
        try {
            const result = await apiService.post(EndpointEnum.MAIL, data, true)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }
}

const mailService = new MailService()
export default mailService