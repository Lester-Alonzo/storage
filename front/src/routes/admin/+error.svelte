<script>
    import {page} from '$app/stores'
</script>
<main>
<h2>{$page.status} | {$page.error?.message}</h2>
<p>{$page.url}</p>
</main>
<style>
    :global(html, body) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: rgb(184,163,126);
        background: linear-gradient(90deg, rgba(184,163,126,1) 0%, rgba(191,165,69,1) 35%, rgba(236,107,107,1) 100%);
    }
</style>