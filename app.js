// init Github
const github = new Github;
// init UI
const ui = new UI;
// search input
const searchUser = document.getElementById('searchUser');

// add event listner
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;
    if (userText != '') {
        // make http call
        github.getUser(userText)
            .then((data) => {
                if (data.profile.message === 'Not Found') {
                    // show an alert
                    ui.showAlert('User Not found', 'alert alert-danger');

                } else {
                    // show users
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // clear profile
        ui.clearProfile();
    }
})