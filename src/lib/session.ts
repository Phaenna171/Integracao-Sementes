import { jwtDecode } from 'jwt-decode';

export async function decrypt(token: string | undefined = '') {
    try {
        const decoded = jwtDecode(token);
        return true
    } catch (error) {
        console.error('Failed to verify session')
        return false
    }
}