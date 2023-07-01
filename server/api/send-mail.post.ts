import { sendMail } from '../utils/send-mail'

export default defineEventHandler(async (event: any) => {
  const body = await readBody(event)
  const options = {
    subject: `Demande de contact - Portfolio - ${body.firstName} ${body.lastName}`,
    message: `${body.email} souhaiterait vous contacter, voici son message: \n\n ${body.message}`
  }
  try {
    await sendMail(options)
  } catch (err) {
    throw createError({
      status: 500,
      statusMessage: 'Error from e-mail server'
    })
  }
  return {
    res: 'sent'
  }
})
