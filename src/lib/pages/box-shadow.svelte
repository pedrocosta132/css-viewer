<script>
    import ControlCard from "../../components/ControlCard.svelte";
    import PageLayout from "../../components/PageLayout.svelte";

    let inset = false;
    let positionX = 20;
    let positionY = 20;
    let blur = 10;
    let spread = 0;
</script>

<PageLayout title="CSS: Box-shadow">
    <svelte:fragment slot="preview">
        <div class="preview">
            <span
                class="item"
                style={`box-shadow:${inset ? "inset" : ""} ${positionX}px ${positionY}px ${blur}px ${spread}px`}
            />
        </div>
    </svelte:fragment>
    <svelte:fragment slot="controls">
        <ControlCard
            title="Position X"
            type="slider"
            options={{
                min: "-150",
                max: "150",
            }}
            bind:value={positionX}
        />
        <ControlCard
            title="Position Y"
            type="slider"
            options={{
                min: "-150",
                max: "150",
            }}
            bind:value={positionY}
        />
        <ControlCard
            title="Blur"
            type="slider"
            options={{
                min: "0",
                max: "150",
            }}
            bind:value={blur}
        />
        <ControlCard
            title="Spread"
            type="slider"
            options={{
                min: "0",
                max: "150",
            }}
            bind:value={spread}
        />
        <ControlCard
            title="inset"
            options={[
                { name: "no", value: false },
                { name: "yes", value: true },
            ]}
            bind:value={inset}
        />
    </svelte:fragment>
</PageLayout>

<style>
    .preview {
        width: 100%;
        min-height: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background-color: var(--secondary);
        transition: 300ms;
        overflow: hidden;
    }
    .item {
        width: 33%;
        height: 33%;
        border-radius: 8px;
        background-color: var(--primary);
    }
</style>
