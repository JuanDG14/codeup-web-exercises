function gitHubUsername (userName) {
    fetch (`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': PROMISE_TOKEN}})
        .then(response => response.json().then(data => {
        console.log(data);
            // let latestPush = data[0].created_at
            // let date = new Date(latestPush);
            let lastPush;
            for(let event of data) {
                if(event.type === "PushEvent"){
                    lastPush = new Date(event.created_at);
                    break;
                }
            }
                console.log(lastPush)
            // console.log(date.toString());
    }))
}
gitHubUsername('JuanDG14')

// function wait(ms){
//     return new Promise(response => setTimeout(response, ms));
// }

const wait = ms => {
    return new Promise(response => {
        setTimeout(() => {
            response(`You'll see this after ${ms/1000} seconds`);
        }, ms);
    })
}

wait(1000).then(message => console.log(message));
wait(3000).then(message => console.log(message));
wait(5000).then(message => console.log(message));