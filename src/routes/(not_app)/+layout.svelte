<script>
    import "$lib/app.css";
    import ErrorBox from "$lib/components/ErrorBox.svelte";
</script>

<main class="grow flex flex-col justify-center items-center md:m-3">
    <slot />
</main>

<footer class="font-semibold text-blue-50 flex w-full justify-center gap-4 p-4 border-t border-dashed items-center">
    <a href="/login">
        <div>Login</div>
    </a>
    <a href="/terms">
        <div>Terms of Service</div>
    </a>
    <div>
        <a target="_blank" href="https://github.com/thirstysquirtle/LaterLettesr-BothEnds">
            <ErrorBox body={"Not a Serious App"}></ErrorBox>
        </a>
    </div>
    <a target="_blank" href="https://github.com/thirstysquirtle/LaterLettesr-BothEnds"><h2>Github</h2></a>
</footer>
