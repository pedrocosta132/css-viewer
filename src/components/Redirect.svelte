<script>
    import { onMount } from "svelte";
    import { goto } from '$app/navigation';

    export let to = '/';

    onMount(() => goto(to));
</script>