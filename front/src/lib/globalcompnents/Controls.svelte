<script>
    import {currentPath} from '$lib/stores/Visor'
    import {notify} from '$lib/stores/notify'
    import {goto} from '$app/navigation'
    import {env} from '$env/dynamic/public'
    const handleClick = async () => {
        const entrada = prompt('Nombre de la carpeta')
        if(!entrada) return alert('No hay entrada')
        const res = await fetch(`${env.PUBLIC_BASEURL}createdir/`, {
            method:'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                path: `${$currentPath}/${entrada}`
            })
        })
        if(res.status === 200) $notify = {
            message: 'Se creo correctamente',
            type: 'success',
            show: true
        }
        else $notify = {
            message: 'error al tratar de crear',
            type: 'error',
            show: true
        }
        const data = await res.json()
        console.log(data)
    }
</script>

<nav>
    <button on:click={handleClick}>➕ Nueva Carpeta</button>
    <button on:click={() => goto('/admin/createcllient')}>🧛‍♀️ Create User</button>
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;
        height: 100px;
    }
    button {
        border: none;
        border-radius: 11px;
        padding: 10px;
        cursor: pointer;
        background-color: rgb(241, 138, 106);
    }
    
</style>
