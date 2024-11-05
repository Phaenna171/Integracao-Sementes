import { EndpointEnum } from "../enums"
import { IActionResponse } from "../interfaces"
import apiService from "./api.service"

class BlogService {
    async register(data: any): Promise<IActionResponse> {
        try {
            const result = await apiService.postFormData(EndpointEnum.BLOG_POSTS, data, true)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async getAll(): Promise<IActionResponse> {
        try {
            const result = await apiService.get(EndpointEnum.BLOG_POSTS)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async getById(id: string): Promise<IActionResponse> {
        try {
            const result = await apiService.get(EndpointEnum.BLOG_POSTS + id)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async update(data: any, id:string): Promise<IActionResponse> {
        try {
            const result = await apiService.putFormData(EndpointEnum.BLOG_POSTS + id, data, true)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async delete(id: string): Promise<IActionResponse> {
        try {
            const result = await apiService.delete(EndpointEnum.BLOG_POSTS + id, true)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }
}

const blogService = new BlogService()
export default blogService