class Github {
    constructor() {
        this.client_id = '66c87f17df8fe5b1254c';
        this.client_secret = '2e9c19c503a6456d644e25e0aa2a5b4d90846028';
        this.repos_count = 5;
        this.repo_sort = 'created: asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repo_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();
        return {
            profile: profileData,
            repos: repoData,
        }
    }
}