export const  read = (userId, token) =>{
    return fetch(`http://localhost:8080/user/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(res=> {
        return res.json()
    })
    .catch (err => console.log(err))

};
export const  remove = (userId, token) =>{
    return fetch(`http://localhost:8080/user/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(res=> {
        return res.json()
    })
    .catch (err => console.log(err))

};
export const usersList = () =>{
    return fetch('http://localhost:8080/users', {
        method: "GET",
    })
    .then(res=> {
        return res.json()
    })
    .catch (err => console.log(err))
}

export const update = (userId, token, user) => {
    console.log("USER DATA UPDATE: ", user);
    return fetch(`http://localhost:8080/user/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: user
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateUserInLocalStorage = (user, next) =>{
    if (typeof window !== 'undefined'){
        if(localStorage.getItem('jwt')){
            let auth = JSON.parse(localStorage.getItem('jwt'))
            auth.user = user
            localStorage.setItem('jwt', JSON.stringify(auth))
            next()
        }
    }
};

export const follow = (userId, token, followId) => {
    return fetch(`http://localhost:8080/user/follow`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userId, followId})
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const unfollow = (userId, token, unfollowId) => {
    return fetch('http://localhost:8080/user/unfollow', {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({userId, unfollowId})
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const findPeople = (userId, token) => {
    return fetch(`http://localhost:8080/user/findpeople/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};