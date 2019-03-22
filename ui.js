class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    // show profile method
    showProfile(user) {
        this.profile.innerHTML = `
        <div class = "card card-body mb-3">
            <div class = "row">
                <div class = "col-md-3">
                    <img class = "img-fluid mb-3" src = "${user.avatar_url}">
                    <a href = "${user.html_url}" target = "_blank" class = "btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class = "col-md-9">
                    <span class = "badge p-2 badge-primary">
                        Public Repos: ${user.public_repos}
                    </span>
                    <span class = "badge p-2 badge-secondary">
                        Public Gist: ${user.public_gists}
                    </span>
                    <span class = "badge p-2 badge-success">
                        Public Followers : ${user.followers}
                    </span>
                    <span class = "badge p-2 badge-info">
                        Public Following: ${user.following}
                    </span>
                    <br>
                    <br>
                    <br>
                    <ul class = "list-group">
                        <li class = "list-group-item">
                            Company: ${user.company}
                        </li>
                        <li class = "list-group-item">
                        Website/Blog: ${user.blog}
                        </li>
                        <li class = "list-group-item">
                        Location: ${user.location}
                        </li>
                        <li class = "list-group-item">
                        Member Since: ${user.created_at}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class = "page-heading mb-3">
            Latest Repo
        </h3>
        <div id = "repos"></div>
        `;
    }
    // show repos
    showRepos(repos) {
        let output = '';

        repos.forEach((repo) => {
            output += `
            <div class = "card card-body mb-2">
                <div class = "row">
                    <div class = "col-md-6">
                    <a href = "${repo.html_url}" target = "_blank">${repo.name}</a>
                    </div>
                    <div class = "col-md-6">
                    <span class = "badge p-2 badge-primary">
                        Stars: ${repo.stargazers_count}
                    </span>
                    <span class = "badge p-2 badge-secondary">
                        Watchers: ${repo.watchers_count}
                    </span>
                    <span class = "badge p-2 badge-success">
                        Forks : ${repo.forks_counts}
                    </span>

                    </div>
                </div>
            </div>
         `
        })
        document.getElementById('repos').innerHTML = output;

    }
    // show alert message
    showAlert(message, className) {
        // clear any remaining alerts
        this.clearAlert();
        const div = document.createElement('div');
        // add classes
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // append it to the dom 
        // get a parent
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search);
        // timeout after 3 secs
        setTimeout(() => {
            this.clearAlert()
        }, 3000)
    }
    // clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
    // clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }
}