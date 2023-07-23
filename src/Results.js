import React from "react"
import Pet from "./Pet"

const Results =({pets})=>{
    return(
        <div className="search">
            {pets.length == 0 ? (<h1>No Pets found</h1>) :(
                pets.map(pet=>(

                    <Pet
                    animal ={pet.animal}
                    key={pet.id}
                    name={pet.name}
                    media ={pet.photos}
                    breed = {pet.breeds.primary}
                    id ={pet.id}
                    location ={`${pet.contact.address.city}, ${pet.contact.address.state}`}


                    
                    />
                ))

            )}


        </div>
    )

}
export default (Results)