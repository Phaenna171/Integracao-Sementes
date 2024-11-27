import { EndpointEnum } from "../enums"
import { IActionResponse } from "../interfaces"
import apiService from "./api.service"

class ProductService {
    async register(data: any): Promise<IActionResponse> {
        try {
            const result = await apiService.postFormData(EndpointEnum.PRODUCTS, data, true)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async getAll(): Promise<IActionResponse> {
        try {
            const result = await apiService.get(EndpointEnum.PRODUCTS)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async getById(id: string): Promise<IActionResponse> {
        try {
            const result = await apiService.get(EndpointEnum.PRODUCTS + id)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async update(data: any, id:string): Promise<IActionResponse> {
        try {
            const result = await apiService.putFormData(EndpointEnum.PRODUCTS + id, data, true)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async delete(id: string): Promise<IActionResponse> {
        try {
            const result = await apiService.delete(EndpointEnum.PRODUCTS + id, true)
            return { error: false, data: result }
        } catch (error) {
            return { error: true, message: error.message }
        }
    }

    async manageCategories(action: string, data?: any, id?: string): Promise<IActionResponse> {
        try {
            let result;
            switch (action) {
                case "create":
                    result = await apiService.post(EndpointEnum.CATEGORY, data, true);
                    break;
                case "update":
                    result = await apiService.put(`${EndpointEnum.CATEGORY}${id}`, data, true);
                    break;
                case "delete":
                    result = await apiService.delete(`${EndpointEnum.CATEGORY}${id}`, true);
                    break;
                case "getAll":
                    result = await apiService.get(EndpointEnum.CATEGORY, true);
                    break;
                default:
                    throw new Error("Invalid action");
            }
            return { error: false, data: result };
        } catch (error) {
            return { error: true, message: error.message };
        }
    }
}

const productService = new ProductService()
export default productService