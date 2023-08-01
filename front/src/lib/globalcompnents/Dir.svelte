<script>
    import DirIcon from './DirIcon.svelte'
    /**
     * @type {string}
     */
    export let name
</script>
<button class="directori" on:click on:contextmenu>
    <DirIcon/>
    {name}
</button>
<style>
    .directori {
        border: none;
        width: 95px;
        height: 95px;
		border-radius: 11px;
        background-color: transparent;
    }
</style>