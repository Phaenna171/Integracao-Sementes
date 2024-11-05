import { GetJwtCookie } from "../utils/get-jwt-cookie"

const url = process.env.NODE_ENV == 'development' ? process.env.NEXT_PUBLIC_DEV_URL : process.env.NEXT_PUBLIC_PROD_URL

class ApiService {
    async post(endpoint: string, body: any, isAuth?: boolean) {
        return await (await fetch(`${url}/${endpoint}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': isAuth ? GetJwtCookie() : ''
            },
            body: JSON.stringify(body)
        })).json()
    }

    async postFormData(endpoint: string, body: any, isAuth?: boolean) {
        return await (await fetch(`${url}/${endpoint}`, {
            method: "POST",
            headers: {
                'Authorization': isAuth ? GetJwtCookie() : ''
            },
            body,
        })).json()
    }

    async put(endpoint: string, body: any, isAuth?: boolean) {
        return await (await fetch(`${url}/${endpoint}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': isAuth ? GetJwtCookie() : ''
            },
            body: JSON.stringify(body)
        })).json()
    }

    async putFormData(endpoint: string, body: any, isAuth?: boolean) {
        return await (await fetch(`${url}/${endpoint}`, {
            method: "PUT",
            headers: {
                'Authorization': isAuth ? GetJwtCookie() : ''
            },
            body
        })).json()
    }

    async get(endpoint: string, isAuth?: boolean) {
        return await (await fetch(`${url}/${endpoint}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': isAuth ? GetJwtCookie() : ''
            },
        })).json()
    }

    async delete(endpoint: string, isAuth?: boolean) {
        return await (await fetch(`${url}/${endpoint}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': isAuth ? GetJwtCookie() : ''
            },
        })).json()
    }
}

const apiService = new ApiService()
export default apiService