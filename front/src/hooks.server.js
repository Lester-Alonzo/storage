import {jwtVerify} from 'jose'
import {env} from '$env/dynamic/public'
import {createSecretKey} from 'crypto'
/**@type {import('@sveltejs/kit').Handle} */


export async function handle({ event, resolve }) {
    if(event.url.pathname.startsWith('/admin')){
    const secretKey = createSecretKey(env.PUBLIC_JWT_SECRET, "utf-8")
        const token = event.cookies.get('token') 
        try {
        const {payload} = await jwtVerify(token, secretKey)
            event.locals = {
                role: payload.role,
                id: payload.id,
            }
            console.log('success')
        } catch (error) {
            console.log('error')
            event.locals = {role:null, id:null}
        }
    }
    const response = await resolve(event) 
    return response
} 