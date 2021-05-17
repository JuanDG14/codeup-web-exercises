function gitHubUsername (userName) {
    fetch (`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': PROMISE_TOKEN}})
        .then(response => response.json().then(data => {
        console.log(data);
            var latestPush = data[0].created_at
            let date = new Date(latestPush);

            console.log(date.toString());
    }))
}
gitHubUsername('JuanDG14')

