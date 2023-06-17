<script>
    let Projects = [
        {
            "title": "Wishlist",
            "github": "https://github.com/AlexGioffDev/Wishlist",
            "link": "https://alexgioffdev.github.io/Wishlist/",
            "tec": ["html", "css", "js"]
        },
        {
            "title": "Portfolio",
            "github": "",
            "link": "",
            "tec": ["Svelte"]
        }
    ]
</script>

<section id="projects">
    <div class="projects-container">
        <h1 class="title">Projects</h1>
        <div class="card-group">
            {#each Projects as project}
                <div class="card">
                    <div class="card-info">
                        <h1>{project.title}</h1>
                        <h4>{project.tec.join(', ')}</h4>
                    </div>
                    <div class="card-link">
                        <a href="{project.github}" target="_blank"><h4>github</h4></a>
                        <a href="{project.link}" target="_blank"><h4>web</h4></a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    section {
        width: 100;
        min-height: 30rem;
        padding: 2rem;
        
    }

    .projects-container {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        text-align: center;
        font-size: 3.2rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--primary-color);
        margin-bottom: 1rem;
    }

    .card-group {
        width: 90%;
        height: 80%;
        overflow: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .card {
        width: 90%;
        border: 1px solid var(--primary-color);
        overflow: hidden;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        color: var(--primary-color)
    }

    .card-info {
        display: flex;
        flex-direction: column;
        width: 65%;
        gap: .5rem;
    }

    .card-info h1 {
        font-weight: 400;
        font-size: 2rem;
        text-transform: uppercase;
    }

    .card-info h4 {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 1.2rem;
    }

    .card-link {
        display: flex;
        flex-direction: column;
        width: 25%;
        gap: .5rem;
        align-items: flex-end;
    }


    .card-link a {
        text-transform: uppercase;
        font-weight: 300;
        font-size: 1.2rem;
    }

    @media (min-width: 1024px){
        .card-link a:hover {
            transition: all .5s ease-in;
            text-decoration: underline;
        }
    }
</style>