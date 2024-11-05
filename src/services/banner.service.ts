import { EndpointEnum } from "../enums"
import { IActionResponse } from "../interfaces"
import apiService from "./api.service"

class BannerService {
    async register(data: any): Promise<IActionResponse> {
        try {
            const result = await apiService.postFormData(EndpointEnum.BANNERS, data, true)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async getAll(): Promise<IActionResponse> {
        try {
            const result = await apiService.get(EndpointEnum.BANNERS)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async getById(id: string): Promise<IActionResponse> {
        try {
            const result = await apiService.get(EndpointEnum.BANNERS + id)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async update(data: any, id:string): Promise<IActionResponse> {
        try {
            const result = await apiService.putFormData(EndpointEnum.BANNERS + id, data, true)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async delete(id: string): Promise<IActionResponse> {
        try {
            const result = await apiService.delete(EndpointEnum.BANNERS + id, true)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }
}

const bannerService = new BannerService()
export default bannerService