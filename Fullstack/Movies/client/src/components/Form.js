import React from 'react';

const Form = (props)=>{
    const {submitHandler, onChangeHandler, movie, errors, buttonText} = props;

    return (
        <div>
<form onSubmit={submitHandler}>

<div>
    <label>Title</label>
    <input name = "title" value={movie.title} onChange={(e) => onChangeHandler(e)} type="text" />
    <br/>
    {
        errors.title?
        <span>{errors.title.message}</span>
        :null
    }
</div>

<div>
    <label>Year Released</label>
    <input name = "yearReleased" value={movie.yearReleased} onChange={onChangeHandler} type="number" />
    <br />
    {
        errors.yearReleased ?
            <span>{errors.yearReleased.message}</span>
            : null
    }
</div>

<div>
    <label>Genre</label>
    <select value={movie.genre} name="genre" onChange={onChangeHandler} >
        <option defaultValue hidden>Select a Genre</option>
        <option value="Crime Noir">Crime Noir</option>
        <option value="French Cinema">French Cinema</option>
        <option value="Romcom">Romcom</option>
        <option value="Horror">Horror</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Silent Movie">Silent Movie</option>
        <option value="Documentary">Documentary</option>
        <option value="Comedy">Comedy</option>
        <option value="Action">Action</option>
        <option value="Thriller">Thriller</option>
        <option value="Family">Family</option>
        <option value="Animated">Animated</option>
        <option value="Drama">Drama</option>
    </select>
    <br />
    {
        errors.genre ?
            <span>{errors.genre.message}</span>
            : null
    }
</div>

<div>
    <label>boxArt</label>
    <input name = "boxArt" value={movie.boxArt} onChange={onChangeHandler} type="text" />
    <br />
    {
        errors.boxArt ?
            <span>{errors.boxArt.message}</span>
            : null
    }
</div>

<div>
    <label>Watch Length</label>
    <input name = "watchLength" value={movie.watchLength} onChange={onChangeHandler} type="number" />
    <br />
    {
        errors.watchLength ?
            <span>{errors.watchLength.message}</span>
            : null
    }
</div>


<div>
    <label>Rating</label>
    <select value={movie.rating} name="rating" onChange={onChangeHandler} >
        <option defaultValue hidden>Select a Rating</option>
        <option value="G">G</option>
        <option value="PG">PG</option>
        <option value="PG-13">PG-13</option>
        <option value="R">R</option>
        <option value="NC-17">NC-17</option>
    </select>
    <br />
    {
        errors.rating ?
            <span>{errors.rating.message}</span>
            : null
    }
</div>


<div>
    <label>Actor</label>
    <input name = "actors" value={movie.actors} onChange={onChangeHandler} type="text" />
    <br />
    {
        errors.actors ?
            <span>{errors.actors.message}</span>
            : null
    }
</div>

<div>
    <label>Kid Friendly?</label>
    <input name = "kidFriendly" checked={movie.kidFriendly} onChange={onChangeHandler} type="checkbox" />
    <br />
    {
        errors.kidFriendly ?
            <span>{errors.kidFriendly.message}</span>
            : null
    }
</div>

<button>{buttonText}</button>

</form>
        </div>
    )
}
export default Form;