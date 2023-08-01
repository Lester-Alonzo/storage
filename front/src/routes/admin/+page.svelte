<script>
	import {onMount} from 'svelte'
	import { Visor, files, currentPath, currentDName } from '$lib/stores/Visor';
	import {notify} from '$lib/stores/notify'
	import NavBar from '$lib/globalcompnents/NavBar.svelte';
	import VisorC from '$lib/globalcompnents/Visor.svelte';
	import Controls from '$lib/globalcompnents/Controls.svelte'
	import Dir from '$lib/globalcompnents/Dir.svelte'
	import File from '$lib/globalcompnents/File.svelte'
	import ContextMenu from '$lib/globalcompnents/ContextMenu.svelte'
	import Notify from '$lib/globalcompnents/Notify.svelte'
	import {env} from '$env/dynamic/public'
	/**
	 * @type {import('./$types').PageServerData}
	 */
	export let data;
	/**
	 * @type {number}
	*/
	let x, y = 0
	/**
	 * @type {boolean}
	*/
	let contexm = false
	/**
	 *
	 * @param {MouseEvent} e 
	 * @param {string} cnn 
	 */
	const handleContextMEnu = (e, cnn) => {
		e.preventDefault();
		x = e.clientX
		y = e.clientY
		$currentDName = cnn
		contexm = true
	};
	/**
	 * @type {string}
	 */
	let title = '' || "Files";
	/**
	 * @param  {string} path
	 * @param  {string} id
	 * @param  {string} name
	 */
	const callOneFile = async (path, name, id) => {
		const res = await fetch(`${env.PUBLIC_BASEURL}getfile`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				paths: path
			})
		});
		const data = await res.blob();
		$Visor.Name = name;
		$Visor.Path = path;
		if (data.type === 'image/png' || data.type === 'image/jpeg' || data.type === 'image/gif') {
			const Durl = URL.createObjectURL(data);
			$Visor.Type = 'img';
			$Visor.url = Durl;
		} else if (
			data.type === 'video/mp4' ||
			data.type === 'video/webm' ||
			data.type === 'video/mkv' ||
			data.type === 'video/avi' ||
			data.type === 'video/mpeg-'
		) {
			const Durl = URL.createObjectURL(data);
			$Visor.Type = 'video';
			$Visor.url = Durl;
		}
		//blob to pdf
		if (data.type === 'application/pdf') {
			const Durl = URL.createObjectURL(data);
			$Visor.Type = 'pdf';
			$Visor.url = Durl;
		}
		$Visor.show = true;
	};
	/**
	 * @param {string}  path
	 */
	const entrenewDirectory = async (path) => {
		const res = await fetch(`${env.PUBLIC_BASEURL}getdir/`, {
			method: "post",
			headers: {
				'content-type': 'application/json'
		},
		body: JSON.stringify({
			path: `${$currentPath}/${path}`
		})
		})
		const data = await res.json()
		console.log(data)
		title = path
		$files = data.files
		$currentPath = `${$currentPath}/${path}`
	}
	onMount(() => {
		$files = data.files;
		$currentPath = data.id
	})
</script>
<svelte:document on:click={() => contexm = false}/>
<NavBar username={data.name} storage={data.storage}/>
<Controls/>
<h3 class="title_main">{title}</h3>
<section class="files">
	{#each $files as file}
		{#if !file.isdirecotiry}
		<File on:contextmenu={(e) => handleContextMEnu(e, file.name)} on:click={() => callOneFile(file.path, file.name, data.id)} name={file.name}/>
		{:else}
			<Dir on:contextmenu={(e) => handleContextMEnu(e, file.name)} on:click={() => entrenewDirectory(file.name)} name={file.name}/>
		{/if}
	{:else}
		<p>no hay archivos</p>
	{/each}
</section>
{#if $Visor.show}
	<VisorC />
{/if}
{#if contexm}
	<ContextMenu x={x} y={y}/>
{/if}
{#if $notify.show}
	<Notify/>
{/if}

<style>
	.files {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		justify-items: center;
        gap: 1rem;
		width: calc(100% - 5rem);
		margin: 0 auto;
		background-color: rgba(255, 255, 255, 0.349);
		padding: 1rem;
		border-radius: 11px;
		min-height: calc(100vh - 200px);
	}
	.title_main {
		text-align: center;
		margin: 0 auto;
		width: 100%;
		font-size: 2rem;
	}
	</style>
