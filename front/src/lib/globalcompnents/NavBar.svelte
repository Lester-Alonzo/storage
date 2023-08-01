<script>
    import {notify} from '$lib/stores/notify'
    import {currentPath} from '$lib/stores/Visor'
    import Loading from '$lib/globalcompnents/Loading.svelte'
    import {env} from '$env/dynamic/public'
    /**
     * @type {string}
    */
    export let username
    /**
     * @type {string}
    */
    export let storage
    /**
     * @type {FileList}
    */
    let file 
    /**
     * @type {boolean}
     */
    let loadigC = false
    /**
     * @type {HTMLFormElement}
     */
    let Form
    const handleSubmit = async () => {
        if(file.length === 0) return alert('No hay archivos')
        const fromDatas = new FormData(Form)
        loadigC = true
        const res = await fetch(`${env.PUBLIC_BASEURL}upload?folder=${$currentPath}`, {
            method: 'POST',
            body:  fromDatas
        })
        if(res.status === 200)  {
            $notify = {
            message: 'Se subio correctamente',
            type: 'success',
            show: true
        }
        loadigC = false
        }
       else $notify = {
            message: 'error al tratar de subir',
            type: 'error',
            show: true
        }

        const data = await res.json()
        console.log(data)
    }
</script>
<header class="head">
    <h1>Admin Page</h1>
    {#if loadigC}
        <Loading/>
    {:else}
    <form enctype="multipart/form-data" on:submit|preventDefault={handleSubmit} bind:this={Form} class="nav">
        <label for="file" class="icon">➕</label>
        <input type="file" id="file" name="file"  bind:files={file} multiple hidden/>
        <button type="submit">Listo</button>
    </form>
    {/if}
    <nav>
        <button>{username}</button>
        <progress value={storage} max="23"></progress>
    </nav>
</header>
<style>
    .head {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    form {
        padding: 1rem;
    }
    .icon {
        font-size: 2rem;
        cursor: pointer;
    }
    .icon:hover {
        scale: 1.2rem;
    }
    .nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
    }
    button {
        border: none;
        padding: .6rem;
        border-radius: 11px;
        background-color: #3bc225;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
</style>