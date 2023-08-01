<script>
	import FileIcon from './FileIcon.svelte'
    /**
     * @type {string}
     */
    export let name
</script>
<button on:contextmenu on:click>
	<FileIcon/>
	{name}
</button>
<style>
button {
		border: none;
		width: 95px;
        height: 95px;
		text-overflow: ellipsis;
		background-color: transparent;
	}

</style>