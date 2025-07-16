import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const { RESEND_API_KEY } = process.env
const resend = new Resend(RESEND_API_KEY)

export async function POST(req: NextRequest) {
    const { nombre, email, servicio, mensaje, destinatario } = await req.json()

    try {
        const { data, error } = await resend.emails.send({
            from: 'Web Empet <no-reply@empet.cu>',
            to: destinatario,
            subject: `Nuevo mensaje de contacto sobre: ${servicio}`,
            html: `
        <p><b>Nombre:</b> ${nombre}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Servicio:</b> ${servicio}</p>
        <p><b>Mensaje:</b><br/>${mensaje}</p>
      `,
        })
        if (error) {
            return NextResponse.json({ message: 'Error enviando el correo', error }, { status: 500 })
        }
        return NextResponse.json({ message: 'Correo enviado correctamente', data }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: 'Error enviando el correo', error }, { status: 500 })
    }
} 