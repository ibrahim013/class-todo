import React, {useState, createContext, useContext} from 'react'

const MyStatefullComponent = () => {
    const [title, setTitle] = useState({
        name: 'Hello'
    })

    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    return(
        <div>
            <p>{title.name}</p>

            <input name="userName"placeholder="type your name" onChange={handleChange}/>
        </div>
    )

 
}

// const ans = {
//     right: '✅',
//     wrong: '❌'
// }

// const AnsContext = createContext(ans);

// export const Exam = (props) => {
//     return (
//         // Any child component inside this component can access the value which is sent.
//         <AnsContext.Provider value={ans}>
//             <RightAns />
//         </AnsContext.Provider>
//     )
// }

// const  RightAns = () => {
//     // it consumes value from the nearest parent provider.
//     const ans = useContext(AnsContext);
//     return <p>{ans.right}{ans.wrong}</p>
//     // previously we were required to wrap up inside the AnsContext.Consumer
//     // but this useContext hook, get rids that.
// }














export default MyStatefullComponent