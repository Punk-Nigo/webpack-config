import { useState } from 'react'

const profile = {
    name: "Nigo",
    age: 18,
    online: false
}

const people = {
    ...profile,
    count: 0,
    online: 0
}

console.log(profile);
console.log(people);


const Recipes = () => {
    
    const [data, setData] = useState({});

    return (
        <div>
            <h3>User Profile Data</h3>
            <button onClick={() => setData(profile)}>Set Profile</button>
            <button onClick={() => setData(people)}>Set People Data</button>
            <ul>
                {Object.keys(data).map((material) => (
                    <li key={material}>
                        {material}:{data[material]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Recipes