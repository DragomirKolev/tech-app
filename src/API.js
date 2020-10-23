export const getComments = () => {
    // if I had more API's I would convert this fetch into a get function which takes in url
    // and returns the data or error so it can be reused
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then((resp) => {
                resp.json().then((data) => {
                    resolve(data);
                });
            })
            .catch(e => reject(e))
    })
}