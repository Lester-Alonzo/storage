import {env} from '$env/dynamic/public'
import {error} from '@sveltejs/kit'
/**
 * @type {import('../admin/$types').PageServerLoad}
 */
export async function load({locals}) {
    if(locals.role !== 'ADMIN'){
        console.log('redirecting')
        throw error(405, 'Usuario no autorizado')
    }
    const res = await fetch(`${env.PUBLIC_BASEURL}getUser/${locals.id}`)
    const data = await res.json()
    console.log(data)
    if(res.status !== 200) throw error(res.status, data.message)
    return {
            id: data.user.id,
            name: data.user.nombre,
            storage: data.user.storage,
            files: data.files,
    } 
}