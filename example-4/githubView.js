class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        this.display(repoData);
      });
    });
  }

  // Set the content of the #repo-name element to equal the value of the full_name property from the repo data.
  // Set the content of the #repo-description element to equal the value of the description property from the repo data.

  display(repoData) {
    document.querySelector('#repo-name').append(repoData.full_name);
    document.querySelector('#repo-description').append(repoData.description);
  }
}

module.exports = GithubView;