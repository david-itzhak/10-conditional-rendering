function PetInfo({animal, age, hasPet}) {
    const text = hasPet ? `My ${animal} is ${age} years old` : "I don't have any animal";
    return <h1>{text}</h1>

    // return hasPet
    //     ?
    //     <h1>My {animal} is {age} years old</h1>
    //     :
    //     <h1>I don't have any animal</h1>
}

export default PetInfo;