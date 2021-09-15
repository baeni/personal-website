import axios from 'axios';

const url = 'https://api.github.com';

export function fetchRepositories(context) {
    const options = {
        method: 'GET',
        url: url+'/users/baeni/repos'
    }

    axios.request(options)
        .then(res => {
            context.commit('setRepositories', res.data.filter(repository => {
                return repository.description !== 'GitHub Profile README';
            }));
            console.log(res.data);
        }).catch(err => Promise.reject(err));
}