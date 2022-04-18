import React, { useContext, useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { MemoListType } from './constants/memoTypes';
import { GET_MEMOS } from './constants/apiUtils';

type ContextType = MemoListType & {
  setMemos?: React.Dispatch<React.SetStateAction<never[]>>;
};
const APIContext = createContext<ContextType>({ memos: [] });

export function APIContextProvider({ children }: any) {
  const [memos, setMemos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(GET_MEMOS);
      setMemos(data);
    }
    fetchData();
  }, []);

  return (
    <APIContext.Provider
      value={{
        memos,
        setMemos,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
