<script>
    import { getContext , onMount } from "svelte";
    import { answersctx } from "./ctx.js";
    import Selection from "./selection.svelte";

    

    const onclickanswer = b => {
        answersctx.update(x => {
            x["5"] = b;
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
            <h1>5</h1>
            <h2>From 1 to 10, how well do you think your team understands data science?</h2>
            <p>
            Top-down and bottom-up approaches are essential in driving data science projects.
            </p>
            <Selection selection={[1,2,3,4,5,6,7,8,9,10]} handleselect={onclickanswer} />
        </div>
    </div>
</div>