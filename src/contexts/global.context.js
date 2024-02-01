import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
	const [currentGlobalState, setCurrentGlobalState] = useState({});

	return (
		<GlobalContext.Provider value={{ currentGlobalState, setCurrentGlobalState }}>
			{children}
		</GlobalContext.Provider>
	);
};
