<script>
    import ControlCard from "../../components/ControlCard.svelte";
    import PageLayout from "../../components/PageLayout.svelte";

    let direction = "row";
    let justifyContent = "space-around";
    let alignItems = "center";
    let gap = "0";
    let flexGrow = "0";
</script>

<PageLayout title="CSS: Flexbox" controlsTitle="Flex Properties">
    <svelte:fragment slot="preview">
        <div
            class="preview"
            style="flex-direction:{direction};justify-content:{justifyContent};align-items:{alignItems};gap:{gap};"
        >
            <span class="item" style="flex-grow:{flexGrow};" />
            <span class="item" style="flex-grow:{flexGrow};" />
            <span class="item" style="flex-grow:{flexGrow};" />
        </div>
    </svelte:fragment>
    <svelte:fragment slot="controls">
        <ControlCard
            title="flex-direction"
            options={[
                { name: "row", value: "row" },
                { name: "column", value: "column" },
            ]}
            bind:value={direction}
        />
        <ControlCard
            title="justify-content"
            options={[
                { name: "start", value: "flex-start" },
                { name: "center", value: "center" },
                { name: "end", value: "flex-end" },
                { name: "space between", value: "space-between" },
                { name: "space around", value: "space-around" },
                { name: "space evenly", value: "space-evenly" },
            ]}
            bind:value={justifyContent}
        />
        <ControlCard
            title="align-items"
            options={[
                { name: "start", value: "flex-start" },
                { name: "center", value: "center" },
                { name: "end", value: "flex-end" },
            ]}
            bind:value={alignItems}
        />
        <ControlCard
            title="flex-grow"
            options={[
                { name: "0", value: "0" },
                { name: "1", value: "1" },
            ]}
            bind:value={flexGrow}
        />
        <ControlCard
            title="gap"
            options={[
                { name: "no", value: "0" },
                { name: "yes", value: "16px" },
            ]}
            bind:value={gap}
        />
    </svelte:fragment>
</PageLayout>

<style>
    .preview {
        width: 100%;
        min-height: 250px;
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
</style>
