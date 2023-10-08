<script>
    export let isActive = false;
</script>

<div class="logo">
    <p class="text">
        <span style="animation-play-state: {isActive ? 'running' : 'paused'}">CSS</span>
        <span style="animation-play-state: {isActive ? 'running' : 'paused'}">Viewer</span>
    </p>
</div>

<style>
    .logo {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
    }
    .text {
        font-family: "Libre Baskerville", serif;
        font-size: 97px;
        line-height: 0.9;
        text-align: center;
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
        animation-play-state: initial;

        & > span:nth-child(1) {
            font-weight: bold;
            animation: textUp 1s forwards;
        }

        & > span:nth-child(2) {
            animation: textDown 1s forwards;
        }
    }

    @keyframes -global-textUp {
        from {
            transform: scale(1) translateY(0);
            filter: blur(0);
        }
        to {
            transform: scale(1.5) translateY(-28vh);
            filter: blur(2px);
        }
    }

    @keyframes -global-textDown {
        from {
            transform: scale(1) translateY(0);
            filter: blur(0);
        }
        to {
            transform: scale(1.5) translateY(28vh);
            filter: blur(2px);
        }
    }
</style>
