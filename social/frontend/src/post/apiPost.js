export const create = (userId, token, post) => {
    return fetch(`http://localhost:8080/post/new/${userId}`, {
        method: "POST",
        headers: {
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
};
export const singlePost = postId => {
    return fetch(`http://localhost:8080/post/${postId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const postsListByUser = (userId, token) => {
    return fetch(`http://localhost:8080/posts/by/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))
};

export const removePost = (postId, token) => {
    return fetch(`http://localhost:8080/post/${postId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            return res.json()
        })
        .catch(err => console.log(err))

};
export const update = (postId, token, post) => {

    return fetch(`http://localhost:8080/post/${postId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: post
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


