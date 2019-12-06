<script>
    import { getContext , onMount } from "svelte";
    import { answersctx } from "./ctx.js";
    import Selection from "./selection.svelte";
    

    const onclickanswer = b => {
        answersctx.update(x => {
            x["7"] = b;
            return x;
        });
    }

    let tgt;

    onMount(()=>{
        if(tgt)tgt.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
</script>




<div class="q" bind:this={tgt}>
    <div class="left">
        <img src="q1.png" alt="question-1" />
    </div>
    <div class="right">
        <div class="question">
            <h1>7</h1>
            <h2>From 1 to 10, how well do you think AI can help you to enhance your business performance?</h2>
            <p>
            AI is not all about replacing manpower, it’s about automizing mundane tasks and reallocating manpower to more productive tasks..
            </p>
            <Selection selection={[1,2,3,4,5,6,7,8,9,10]} handleselect={onclickanswer} />
        </div>
    </div>
</div>