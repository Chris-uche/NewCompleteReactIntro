import React, {useState} from 'react'
//Writting a custom Hook


const UseDropdown =(label, defaultState, options)=>{

    const [state, setState] = useState(defaultState);
    const id = `use-dropdown-${label.replace("","").toLowerCase()}`

    //create a component
    const Dropdown=()=>(
        <label htmlFor={id}
        >
            {label}
            <select 
            id={id}
            value={state}
            onChange={e=>setState(e.target.value)}
            onBlur={e=>setState(e.target.value)}
            disabled={options.length == 0}>
                <option>ALL</option>
                {options.map(item =>(

                    <option key={item} value={item}>{item}</option>
                ))}

            </select>


        </label>

    )
    return [state, Dropdown, setState]
}

export default UseDropdown