export const register = (user) =>(
   
    fetch( 'http://localhost:8080/signup', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then (res =>{
        return res.json()
    })
    .catch(err => console.log(err))
);

export const login = (user) =>(
    fetch( 'http://localhost:8080/signin', {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then (res =>{
        return res.json()
    })
    .catch(err => console.log(err))
);

export const authenticate  = (jwt, next) =>{
    if (typeof window !== "undefined"){
        localStorage.setItem("jwt", JSON.stringify(jwt));
        next();
    }

};
export const logout = (next) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt")
    }
    next()
    return fetch( 'http://localhost:8080/signout',
        {method: "GET"})
        .then(res => {
            console.log('signout',res)
            return res.json()
        })
        .catch(err =>console.log(err))
};
export const isAuthenticated = ()=>{
    if(typeof window == "undefined"){
        return false; 
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"));
    }
    else{
        return false;
    }
}
