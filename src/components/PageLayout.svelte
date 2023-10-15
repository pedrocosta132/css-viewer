<script>
    export let title = "Title";
    // export let controlsTitle = "SubTitle";
</script>

<section>
    <h1>{title}</h1>
    <div class="content">
        <slot name="preview" />
        <div class="controls">
            <slot name="controls"/>
        </div>
    </div>
</section>


<style>
    section {
        width: 100%;
        max-width: 1280px;
        min-height: 100vh;
        padding: 16px 0;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
    h1 {
        margin: 0;
    }
    .content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;

        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }
    }
    .controls {
        width: 100%;
        padding: 16px;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        gap: 20px;
        border: 1px solid var(--mute);
        border-radius: 16px;

        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr;
        }
    }
</style>