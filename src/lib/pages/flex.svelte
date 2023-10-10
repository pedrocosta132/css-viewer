<script>
    import ControlCard from "../../components/ControlCard.svelte";

    let direction = "row";
    let justifyContent = "space-around";
    let alignItems = "center";
    let gap = "0";
</script>

<section>
    <h1>CSS: Flexbox</h1>
    <div class="preview" style="flex-direction:{direction};justify-content:{justifyContent};align-items:{alignItems};gap:{gap};">
        <span class="item" />
        <span class="item" />
        <span class="item" />
    </div>
    <div class="controls">
        <ControlCard
            title="flex-direction" 
            options={[
                {name: 'row', value: 'row'},
                {name: 'column', value: 'column'},
            ]}
            bind:value={direction}
        />
        <ControlCard
            title="justify-content" 
            options={[
                {name: 'start', value: 'flex-start'},
                {name: 'center', value: 'center'},
                {name: 'end', value: 'flex-end'},
                {name: 'space between', value: 'space-between'},
                {name: 'space around', value: 'space-around'},
            ]}
            bind:value={justifyContent}
        />
        <ControlCard
            title="align-items" 
            options={[
                {name: 'start', value: 'flex-start'},
                {name: 'center', value: 'center'},
                {name: 'end', value: 'flex-end'},
            ]}
            bind:value={alignItems}
        />
        <ControlCard
            title="gap" 
            options={[
                {name: 'no', value: '0'},
                {name: 'yes', value: '16px'},
            ]}
            bind:value={gap}
        />
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
    .preview {
        width: 100%;
        max-width: 764px;
        height: 300px;
        display: flex;
        border-radius: 8px;
        background-color: var(--secondary);
        transition: 300ms;
    }
    .item {
        width: 50px;
        height: 50px;
        border-radius: 8px;
        background-color: var(--accent);
    }
    .controls {
        width: 100%;
        margin-top: 48px;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        gap: 1rem;

        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
</style>