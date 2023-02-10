import { useState } from "react";

export default function People() {
    const [people, setPeople] = useState([
        {
            firstName: "John",
            lastName: "Smith",
        },
        {
            firstName: 'Steve',
            lastName: "Buschemi",
        }
    ])
    const [person, setPerson] = useState({
		firstName: "John",
		lastName: "Smith"
})

    const addAge = () => (
        setPerson(prevState =>({
            ...prevState, age:30
        }))
        )
        console.log(person)
    return(
        <div>
            <button onClick={() => {
                let newPeople = people.push({firstName: "Danny", lastName: "Devito"})
                setPeople(newPeople)
                console.log(people)
                }}>People</button>
                <button onClick={addAge}> age</button>
        </div>
    )
}