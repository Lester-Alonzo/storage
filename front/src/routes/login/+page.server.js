import {redirect} from '@sveltejs/kit'
import {env} from '$env/dynamic/public'

/**@type {import('../admin/$types').Actions} */
export const actions = {
    login: async (event) => {

        const esto = await event.request.formData()
        const username = esto.get('username')
        const password = esto.get('passwrd')
        console.log(env.PUBLIC_BASEURL)
        const res = await fetch(`${env.PUBLIC_BASEURL}login`, {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        console.log(data, 'data')
        if(res.status === 200){
            event.cookies.set('token', data.token, {path: '/admin'})
            throw redirect(301,'/admin')
        }
    }
}
