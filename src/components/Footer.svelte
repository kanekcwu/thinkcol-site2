

<style>
    footer {
        display: flex;
        flex-direction: column;
        bottom:0;
        left:0;
        right:0;
        background-color: #30486c;
        color: white;
        padding: 2em;
        word-wrap: break-word;
    }

    /* desktop only */
    @media only screen and (min-width: 769px) {
        footer{
            display:grid;
            grid-template-columns: repeat(4,1fr);
            grid-auto-rows: min-content auto min-content;
            column-gap: 2em;
        }
        footer > * {
            justify-self: left;
        }
        footer #copyright {
            grid-column-start: 1;
            grid-column-end: 5;
            justify-self:stretch;
            text-align: center;
        }
    }

    /* mobile only */
    @media only screen and (max-width: 768px) {
        h3 {
            text-decoration: underline;
        }

        footer > div {
            padding-top:20px;
        }
    }


    form button {
        background-color: #f7574b;
        color:white;
    }
    form button,form input {
        padding: 0.5em 0.5em;
        border-radius: 5px;
        border: 0;
    }

    p {
        font-size: 0.9em;
        margin:0px;
    }

    b{
        font-size: 0.9em;
        font-weight: 400;
    }
    .footer-links {
        display:grid;
        align-items:center;
    }

    ul {
        list-style: none;
        padding-left: 0;
        /* clearfix */
    }
    ul::after {
        content: '';
        display: block;
        clear: both;
    }

    li > a {
        color:#ffffff;
    }
    h3 {
        font-size:20px;
    }

</style>


<script>
    const handleSignup = e=>{
        const fd = new FormData(e.target);
        const fdobj = Object.fromEntries(fd);
    }
    export let segment;
</script>

<footer>
    <div>
        <img src= 'thinkcolwhite.png' alt='Thinkcol' class = 'mb-2' height='25px'/>
        <br>

        <p>
        <b>Our mission is to promote collaborative thinking with A.I. Technology</b></p>
    </div>
    <div class = "footer-links d-none d-lg-block">
        <h3> Links </h3>
        <ul>
            <li><a class:selected='{segment === undefined}' href='.'>Home</a>
            </li><li><a class:selected='{segment === "about"}' href='about'>About</a>
            </li><li><a class:selected='{segment === "case"}' href='case'>Case Studies</a>
            </li>
        </ul>
    </div>
    <div>
        <h3>Contact</h3>
        <div>
            <p>4/F, 4 Shell Street</p>
            <p>Tin Hau, Hong Kong</p>
            <p>Phone: +852 3705 1019</p>
            <p>E-Mail: info@thinkcol.com</p>
        </div>
    </div>
    <div>
        <h3>Stay Connected</h3>
        <!--
        <form on:submit|preventDefault={handleSignup}>
            <p>Subscribe to our newsletter</p>
            <input type="email" name="email" required />
            <button type="submit">Sign-up</button>
        </form>-->
        
    </div>

    <p id="copyright">Copyright ThinkCol, 2019 , All Rights Reserved.<p>
</footer>