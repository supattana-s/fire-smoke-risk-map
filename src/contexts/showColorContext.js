import { createContext, useContext, useEffect, useState } from "react";

const showColorContext = createContext();

function ShowColorContextProvider({ children }) {
    const [allStatus, setAllStatus] = useState([]);

    useEffect(() => {}, []);

    return (
        <showColorContext.Provider value={{}}>
            {children}
        </showColorContext.Provider>
    );
}

export const useShowColor = () => {
    return useContext(showColorContext);
};

export default ShowColorContextProvider;
