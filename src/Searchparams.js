import React,{useState, useEffect,useContext} from 'react'
import pet,{ANIMALS} from "@frontendmasters/pet"
import Results from "./Results"
import useDropdown from './useDropdown'
import ThemeContext from './themeContext'

const Searchparams =()=>{
    const [location, setLocation ] = useState("Seattle, WA")
    const [breeds, setBreeds]  = useState ([])
    const [animal, AnimalDropdown] = useDropdown("Animal", "Dog", ANIMALS)
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds)
    const [pets, setPets] = useState([])
    const [theme] = useContext(ThemeContext)


    async function requestPets(){
        const {animals} = await pet.animals({
            location,
            breed,
            type:animal


        })

        setPets(animals || [])

    }


    useEffect(()=>{
        setBreeds([]);
        setBreed("")

        pet.breeds(animal).then(({breeds})=>{
            const breedString = breeds.map(({name})=>name)
            setBreeds(breedString)

        })
    },[animal,setBreed,setBreeds]);

    return(
        <div className="search-params">
            <form onSubmit={(e)=>{
                e.preventDefault();
                requestPets()
            }}>
                <label htmlFor="location">
                    Location
                    <input id="location" placeholder="Location" value={location}
                    onChange={event=>setLocation(event.target.value)}/>

                </label>
                <AnimalDropdown/>
                <BreedDropdown/>
               
                <button style={{backgroundColor:theme}}>Submit</button>

            </form>
            <Results pets={pets}/>

        </div>

    )
}

export default Searchparams;