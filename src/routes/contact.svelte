<style>

    form {
        display:grid;
        grid-auto-flow: row;
        row-gap: 1em;
        background-color: #0eb1b1;
        padding: 2em;
        margin:auto;
    }

    form input {
        padding: 1em;
    }
    form textarea {
        padding: 3em;
    }

    form input, form textarea {
        opacity: 0.8;
        background-color: #25dadad3;
        border: 0;
    }

    form input, form textarea , 
    form input::placeholder, form textarea::placeholder {
        color: black;
    }

    form input,form ,form textarea{
        border-radius: 5px;
    }


    form button {
        padding: 1em 2em;
        background-color: #27253a;
        border:0;
        border-radius: 5px;
        color: white;
        justify-self: center;
    }

    span {
        background-color: #27253a;
        color:white;
        padding: 2em;
        border-radius: 5px;
        display: block;
        margin: 2em 0;
    }

    /* BIG desktop only */
    @media only screen and (min-width: 1255px) {
        span {
            position: absolute;
            top: 4em;
            left: 6em;
        }
        form {
            padding: 4em 4em 4em 8em;
            max-width: 40em;
        }
    }


    div.field {
        display:grid;
        grid-template-columns: min-content auto;
        grid-auto-rows: min-content;
        column-gap: 0.5em;
        margin: 1em 0;
    }

    div.field > :global(svg) {
        align-self: center;
    }

    div.field > p {
        margin: 0;
    }
    div.field#address > p:nth-of-type(2) {
        grid-column: 2 / span 1;
    }

</style>

<script>
    import Icon from "fa-svelte";
    import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
    import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
    import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
</script>

<div>
    <span>
        <h2>Contact Us</h2>
        <div class="field" id="address">
            <Icon icon={faMapMarkerAlt} />
            <p> 4/F, 4 Shell Street</p>
            <p>Tin Hau, Hong Kong</p>
        </div>
        <div class="field">
            <Icon icon={faEnvelope} />
            <p>info@thinkcol.com</p>
        </div>
        <div class="field">
            <Icon icon={faPhone} />
            <p>+852 3705 1019</p>
        </div>
        
        
    </span>
    <form>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="E-mail" required />
        <textarea placeholder="Type your message" name="message" required />
        <button type="submit">Send</button>
    </form>
</div>