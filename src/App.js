import React, { useState } from 'react'
// import Accordion from './components/Accordion'
// import Search from './components/Search'
import Dropdown from './components/Dropdown'

// const items = [
//     {
//         title: 'What is react',
//         content: 'React is a front-end JS framework'
//     },
//     {
//         title: 'Why React?',
//         content: 'Popular'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'We use React to '
//     }
// ]

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Blue',
        value: 'blue'
    },
    {
        label: 'Green',
        value: 'green'
    }
]

export default () => {
    const [selected, setSelected] = useState(options[0])
    const [showDropdown, setShowDropdown] = useState(true)

    return (
        <div>
            <br />
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ? 
                <Dropdown 
                    selected={selected} 
                    onSelectedChange={setSelected}
                    options={options}
                />
                : null
            }
        </div>
    )
}