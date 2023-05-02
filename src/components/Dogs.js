// useState is to create a starting value for a hook
import { useState } from "react";
// This is importing the Dog component to be a child of this dogs component
import Dog from "./Dog";
import DogData from "./DogData";

function Dogs(props) {
    console.log(props);
    // I'm going to have a variable called dogs that I can update the value of
    const [dogs, setDogs] = useState(DogData);
    // This is just keeping track of the object that is my form
    const [dogForm, setDogForm] = useState(
        {
            name: "",
            age: 1,
            breed: "",
            favoriteToy: "",
            size: "Tiny",
            gender: ""
        }
    )
    console.log(dogForm)

    function handleChange(e) {
        // What is this e thing?
        console.log(e.target)
        // console.log(dogForm)
        // e is an event. It's tracking what is happening on the DOM. The setDogForm, or set for any hook, has access to the previous state of that hook
        setDogForm((previousFormState) => ({
            // I want to have the form be the same object. Then I want to overwrite the 
            ...previousFormState,
            [e.target.id]: e.target.value
        }))
    }

    function handleSubmit(e) {
        // e.preventDefault prevents a page reload. Why? React is a single page application and we should never refresh the page
        e.preventDefault();
        // Take in the starting value (the array of objects) and then just add whatever the form is to that array. Then reset the form
        setDogs((startingDogs) => ([...startingDogs, dogForm]))
        e.target.reset();
    }

    return (
        <>
            <h2>Here are my dogs</h2>
            {dogs.map((dog, idx) => {
                return(
                    <div key={idx}>
                        <Dog dog={dog} />
                    </div>
                )
            })}
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Name*: </span>
                    <input
                        type="text"
                        required
                        placeholder="Dog's name"
                        id="name"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Age: </span>
                    <input
                        type="number"
                        placeholder="Age of dog"
                        id="age"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Breed: </span>
                    <input
                        type="text"
                        placeholder="Havanese"
                        id="breed"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Favorite Toy: </span>
                    <input
                        type="text"
                        placeholder="something chewy"
                        id="favoriteToy"
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <span>Size:</span>
                    <select id="size" onChange={handleChange}>
                        <option value="Tiny">Tiny</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Gigantic">Gigantic</option>
                    </select>
                </label>
                <label>
                    <span>Gender</span>
                    <select id="gender" onChange={handleChange}>
                        <option value=""></option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </label>
                <button>Submit Form</button>
            </form>
        </>
    )
}

export default Dogs;