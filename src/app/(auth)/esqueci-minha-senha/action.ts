'use server'
import { IActionResponse } from "../../../interfaces"
import sendgridService from "../../../services/sendgrid.service"

export async function handleAction(prevState: IActionResponse, formData: FormData) {
    const email = formData.get('email')

    try {
        const response = await sendgridService.resetPassword(email as string)
        return { error: false, message: 'Acesse o seu e-mail para recuperar sua senha' }
    } catch (error) {
        return { error: true, message: `Erro ao tentar recuperar senha: ${error.message}` }
    }

}