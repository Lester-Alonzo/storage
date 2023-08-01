<script>
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/900.css';
</script>
<slot></slot>
<style>
    :global(*) {
        font-family: 'Poppins', sans-serif;
    }
    :global(body) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color-scheme: light dark;
    }
    @media (prefers-color-scheme: dark) {
        :global(body) {
            background-color: #121212;
            color: #fff;
        }
    }

    @media (prefers-color-scheme: light) {
        :global(body) {
            background-color: #f0f0f0;
            color: black;
        }
    }
</style>