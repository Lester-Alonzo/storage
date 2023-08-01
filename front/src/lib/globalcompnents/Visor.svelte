<script>
    import {Visor} from '../stores/Visor'
    const handleClose = () => {
        $Visor.show = false
    }
</script>

<section class="container">
    <button on:click={handleClose} class="clsoe">❌</button>
{#if $Visor.Type === "video"}
    <video src={$Visor.url} controls autoplay>
        <p>El navegador no soporta el elemento <code>video</code>.</p>
    </video>
    <a href={$Visor.url} download={$Visor.Name} class="download" title="descargar">⬇</a>
{:else if $Visor.Type === "img"}
    <img src={$Visor.url} alt="sin nada">
    <a href={$Visor.url} download={$Visor.Name} class="download" title="descargar">⬇</a>
{:else if $Visor.Type === "pdf"}
    <object data={$Visor.url} type="application/pdf" width="100%" height="600px" title="Pdf document viewr">
  <p>El navegador no soporta PDFs. Por favor descargue el archivo para verlo.</p>
</object>
    <a href={$Visor.url} download={$Visor.Name} class="download" title="descargar">⬇</a>
{/if}
</section>
<style>
    .container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 100;
        backdrop-filter: blur(5px);
    }
    .container video, .container img {
        max-width: 100%;
    }
    .clsoe {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 2rem;
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
    }
    .download {
        position: absolute;
        top: 1rem;
        left: 1rem;
        font-size: 3rem;
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
    }
</style>