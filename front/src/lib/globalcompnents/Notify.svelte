<script>
import {notify} from '../stores/notify'
import {onMount} from 'svelte'

    onMount(() => {
        setTimeout(() => {
            $notify.show = false
        }, 600);
    })
</script>
    <section class="{$notify.type} general">
        <span class="icon">{$notify.type === 'success' ? '✅' : $notify.type === 'error'? '❌' : $notify.type === 'info' ? 'ℹ️' : '⚠️'}</span>
        <h4>  {$notify.message}</h4>
    </section>

<style>
    .general {
        position: fixed;
        z-index: 999;
        top: 1rem;
        right: 1rem;
        max-width: 55ch;
        padding: .4rem;
        border-radius: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .5rem;
    }
    .success {
        background-color: #87f18b;
    }
    .error {
        background-color: #fa7970;
    }
    .warning {
        background-color: #e9bb77;
    }
    .info {
        background-color: #64b5f7;
    }
    .icon {
        font-size: 1.5rem;
        margin-right: .5rem;
    }
</style>