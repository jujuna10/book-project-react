import { Children, createContext, useState } from "react";

const DataContext = createContext()

const DataProvider = ({children}) => {
    const [newBook,setNewBook] = useState(0)
    const [childrenBook,setChildrenBook] = useState(0)
    const [special,setSpecial] = useState(0)
    // console.log(newBook,'newbooooook')
    // console.log(childrenBook,'children')
    // console.log(special,'special')

    return(
        <DataContext.Provider value={{newBook,setNewBook,childrenBook,setChildrenBook,special,setSpecial}}>
            {children}
        </DataContext.Provider>
    )
}

export {DataContext,DataProvider}