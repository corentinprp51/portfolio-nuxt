import nodemailer from 'nodemailer'

const config = useRuntimeConfig()

export const sendMail = async (options: any) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email,
      pass: config.password
    }
  })
  const mailOptions = {
    from: `Corentin Parpette <${config.email}>`,
    to: config.email,
    subject: options.subject,
    text: options.message
  }
  await transporter.sendMail(mailOptions).catch((err: any) => err)
}
