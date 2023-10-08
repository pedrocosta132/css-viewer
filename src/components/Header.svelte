<script>
    import Logo from "$components/Logo.svelte";
</script>

<header>
    <a href="/" > 
        <div class="logo">
            <Logo />
            <p class="text"><strong>CSS</strong>Viewer</p>
        </div>
    </a>
</header>

<style>
    header {
        width: 100%;
        max-width: 1024px;
        height: 80px;
        margin: 0 auto;
        display: flex;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .text {
        font-size: 36px;
    }
</style>
