<script>
import {env} from '$env/dynamic/public'
    let username = ''
    let password = ''
    let role = ''
    const handleSubmit = async () => {
        const res = await fetch(`${env.PUBLIC_BASEURL}signup`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                nombre: username,
                password,
                role
            })
        })
    }
</script>
<h1>Crear Nuevo Usuario</h1>
<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="username" bind:value={username}>
    <input type="text" placeholder="pasword" bind:value={password}>
    <select name="" id="" bind:value={role}>
        <option value="USER">user</option>
        <option value="ADMIN">admin</option>
    </select>
    <button type="submit">Create</button>
</form>