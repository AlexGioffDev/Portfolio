<script>
    let showMenu = false;
    function handleClick(event) {
        showMenu = false;
        event.preventDefault();
        const href = this.getAttribute("href");
        document.querySelector(href).scrollIntoView({
            behavior: "smooth"
        });
    }
</script>

<header>
    <div class="header-container">
        <h1 class="logo">AG</h1>
        <nav>
            <ul class="menu" class:show-menu={showMenu}>
                <li><a href="#about" on:click={handleClick}>About</a></li>
                <li><a href="#skills" on:click={handleClick}>Skills</a></li>
                <li><a href="#projects" on:click={handleClick}>Projects</a></li>
            </ul>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="menu-mobile" class:active={showMenu} on:click={() => showMenu = !showMenu}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </div>
</header>

<style>
    header {
        background-color: var(--background-color);
        padding: 1rem;
        overflow: hidden;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
    }

    .header-container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        font-size: 4rem;
        color: var(--primary-color);
        letter-spacing: -1rem;
    }

    .menu {
        position: fixed;
        background-color: var(--primary-color);
        top: 0px;
        bottom: 0px;
        left: 20%;
        right: 0;
        transform: translateX(120%);
        transition: all .5s ease-in;
        display: flex;
        flex-direction: column;
        gap: 5rem;
        align-items: center;
        padding-top: 60%;
        z-index: 99;
        box-shadow: -3px 0px 6px rgba(0, 0, 1, .8);
    }

    .menu li a{
        text-transform: uppercase;
        font-weight: 300;
        font-size: 2rem;
        color: white;
    }

    @media (min-width: 768px){
        .menu {
            transform: translateX(0);
            flex-direction: row;
            height: 100%;
            position: static;
            align-items: center;
            padding: 0;
            background-color: transparent;
            box-shadow: none;
            margin-right: 1rem;
        }

        .menu li a {
            color: var(--secondary-color);
            font-weight: 400;
        }
    }

    @media (min-width: 1024px){

        .menu li a {
            transition: all .5s ease-in;
        }

        .menu li a:hover {
            transition:  all .5s ease-in;
            text-decoration: underline;
            color: var(--primary-color)
        }
    }

    .show-menu {
        transform: translateX(0);
        transition: all .5s ease-in;
    }

    .menu-mobile {
        background-color: transparent;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:.6rem;
        padding: .5rem;
        z-index: 100;
        position: relative;
    }

    @media (min-width: 768px){
        .menu-mobile {
            display: none;
        }
    }

    .bar {
        z-index: 100;
        width: 30px;
        height: 5px;
        background-color: var(--primary-color);
        transition: all .5s ease-in;
    }

    

    .active .bar:first-child {
        transition: all .5s ease-in;
        transform: rotate(45deg) translate(5px, 5px);
        background-color: var(--background-color);
    }

    .active .bar:nth-child(2){
        transition: all .5s ease-in;
        opacity: 0;
    }

    .active .bar:last-child {
        transition: all .5s ease-in;
        transform: rotate(-45deg) translate(10px, -10px);
        background-color: var(--background-color);
    }

   
</style>