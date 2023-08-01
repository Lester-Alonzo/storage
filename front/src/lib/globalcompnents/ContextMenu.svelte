<script>
    import {currentDName, currentPath} from '$lib/stores/Visor'
    import {notify} from '$lib/stores/notify'
    import {env} from '$env/dynamic/public'
    /**
     * @type {number}
    */
   export let x 
   /**
    * @type {number}
   */
  export let y
  const handleDelete = async () => {
    const prom = confirm(`¿Estas seguro de eliminar ${$currentDName}?`)
    if(!prom) return alert('No se elimino')
    const res = await fetch(`${env.PUBLIC_BASEURL}deletefile`, {
        method:"DELETE",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            path: `${$currentPath}/${$currentDName}`
        })
    })
    if(res.status === 200) {
        $notify = {
            message: 'Se elimino correctamente',
            type: 'success',
            show: true
        }
        location.reload()
    }else $notify = {
        message: 'error al tratar de eliminar',
        type: 'error',
        show: true
    }
  }
  const handleEdit = async () => {
    const nuevonombre = prompt('Nuevo nombre')
    const filetype = $currentDName.split('.')[1] ?? ''
    if(nuevonombre === null) return alert('No se cambio el nombre')
    const res = await fetch(`${env.PUBLIC_BASEURL}changename`, {
        method:"PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            oldpath: `${$currentPath}/${$currentDName}`,
            newpath: `${$currentPath}/${nuevonombre}.${filetype}`
        })
    })
    if(res.status === 200) {
        $notify = {
            message: 'Se cambio correctamente',
            type: 'success',
            show: true
        }
        location.reload()
  }else $notify = {
        message: 'error al tratar de cambiar',
        type: 'error',
        show: true
    }
}
</script>
<section class="contextmenu" style:top='{y}px' style:left='{x}px'>
    <button on:click={handleEdit}>Change name</button>
    <button on:click={handleDelete}>Eliminar</button>
</section>
<style>
.contextmenu {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(134, 134, 134);
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    border-radius: 5px;
    z-index: 300;
    }
.contextmenu button {
    border: none;
    border-radius: 11px ;
    padding: .4rem;
}
</style>