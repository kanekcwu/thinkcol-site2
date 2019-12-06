<script>
    export let answers = [];
    export let onselect = ()=>{};

    let choice = null;
    let other = "";

    $: choice !== "_other_" && onselect(choice);
    $: other.length && onselect(other);
    $: (choice === "_other_" && !other.length) && onselect(null);
</script>


<style>
    textarea {
        background-color: #e6e6e6;
        border-radius: 5px;
        padding: 2em;
        border: 0;
    }
</style>

<div>
    {#each answers as s}
        <div>
            <input id={s.value} type="radio" bind:group={choice} value={s.value} />
            <label for={s.value}>{s.label}</label>
        </div>
    {/each}
    <div>
        <input id="other" type="radio" bind:group={choice} value={"_other_"} />
        <label for="other">Other : </label>
    </div>
    {#if choice === "_other_"}
        <textarea placeholder="Type here" bind:value={other}></textarea>
    {/if}
    
</div>