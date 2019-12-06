<script>
    export let selection = [0,1,2,3,4,5];
    export let handleselect = ()=>{};
    

    let selected = null;
</script>


<style>
    div {
        display: grid;
        grid-template-columns: repeat(auto-fit,4em);
        column-gap: 2em;
        row-gap: 2em;
    }

    div > span {
        border-radius: 5px;
        background-color:#242424;
        color: white;
        align-self: center;
        justify-self: center;
        text-align: center;
        width: 100%;
        padding: 1em 0;
        transition: all 0.2s ease;
        cursor: pointer;
    }

    div > span:hover,div > span.active {
        background-color: var(--button-active-colour);
    }
</style>


<div>
    {#each selection as s}
        <span class:active={s === selected} on:click={()=>{selected = s;handleselect(s)}}>{s}</span>
    {/each}
</div>
