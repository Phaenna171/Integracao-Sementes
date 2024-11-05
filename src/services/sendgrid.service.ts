import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_TOKEN)
const from = process.env.NEXT_PUBLIC_SENDGRID_FROM_MAIL

const url = process.env.NODE_ENV == 'development' ? process.env.NEXT_PUBLIC_DEV_URL : process.env.NEXT_PUBLIC_PROD_URL

class SendgridService {
    async resetPassword(to: string) {
        try {
            const reset_url = `${url}/nova-senha?email=${to}`

            const msg: sgMail.MailDataRequired = {
                to,
                from,
                templateId: 'd-4aaade0358ae4937bc5c597d98b45754',
                dynamicTemplateData: {
                    reset_url
                }
            }
            await sgMail.send(msg)
        } catch (error: any) {

        }
    }
}

const sendgridService = new SendgridService()
export default sendgridService