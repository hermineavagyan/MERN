export const create = (userId, token, post) => {
    return fetch(`http://localhost:8080/post/new/${userId}`, {
        method: "POST", headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: post,
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const postsList = () => {
    return fetch('http://localhost:8080/posts', {
        method: "GET",
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
}


