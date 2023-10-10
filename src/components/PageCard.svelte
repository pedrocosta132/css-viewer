<script>
    import ArrowLeft from "../lib/icons/ArrowLeft.svelte";

    export let to = '/';
    export let title = 'Title';
    export let animationDelay = "0s";
</script>

<a href={to}>
    <div class="card" style="animation-delay:{animationDelay};">
        <div class="illustration">
            <slot name="illustration"/>
        </div>
        <p class="title">{title}</p>
        <span class="icon"><ArrowLeft size="24px"/></span>
    </div>
</a>

<style>
    .card {
        width: 100%;
        padding: 16px;
        display: grid;
        grid-template-columns: 1fr auto;
        grid-template-rows: auto auto;
        gap: 8px;
        row-gap: 16px;
        border: 1px solid var(--secondary);
        border-radius: 8px;
        opacity: 0;
        animation: card 300ms forwards;

        &:hover {
            & .icon {
                transform: translateX(-50%);
            }
        }
    }
    .illustration {
        grid-column: span 2;
    }
    .title {
        font-size: 20px;
        text-transform: capitalize;
    }
    .icon {
        transition: 300ms;
    }
    @keyframes -global-card {
        from {
            transform: translateY(25%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>