<script>
    export let title = "Title";
    export let controlsTitle = "SubTitle";
</script>

<section>
    <h1>{title}</h1>
    <slot name="preview" />
    <h3>{controlsTitle}</h3>
    <div class="controls">
        <slot name="controls"/>
    </div>
</section>


<style>
    section {
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
    h3 {
        width: 100%;
        text-align: left;
        margin: 48px 0 0 0;
    }
    .controls {
        width: 100%;
        margin-bottom: 16px;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        gap: 1rem;

        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>