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

// export const update= (userId, token, user) => {
//     console.log("Userdata update", user)
//     return fetch(`http://localhost:8080/user/${userId}`, {
//         method: "PUT",
//         headers: {
//             Accept: "application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: user
        
//     })
//     .then(res => {
//         return res.json()
//     })
    
//     .catch (err => console.log(err))

// };

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
