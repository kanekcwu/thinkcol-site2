<script>
    import { getContext , onMount } from "svelte";
    import { answersctx } from "./ctx.js";
    import Mc from "./mc.svelte";

    

    const onclickanswer = b => {
        answersctx.update(x => {
            x["8"] = b;
            return x;
        });
    }

    let tgt;

    onMount(()=>{
        if(tgt)tgt.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });



    const mcanswers = [
         {label:"Not enough data",value:"Not enough data"},
        {label:"Heavy resistance in integrating AI in the company",value:"Heavy resistance in integrating AI in the company"},
        {label:"Not enough data scientists and AI experts",value:"Not enough data scientists and AI experts"},
        {label:"Difficult to integrate AI to current workflow",value:"Difficult to integrate AI to current workflow"}
    ];

</script>




<div class="q" bind:this={tgt}>
    <div class="left">
        <img src="q1.png" alt="question-1" />
    </div>
    <div class="right">
        <div class="question">
            <h1>8</h1>
            <h2>What is the biggest challenge in adopting AI in your business?</h2>
            <p>
            ThinkCol has worked with some of the largest company, most experiencing the same problems in AI adoption. We devise solutions to alleviate potential problems.
            </p>
            <Mc answers={mcanswers} onselect={onclickanswer} />
        </div>
    </div>
</div>