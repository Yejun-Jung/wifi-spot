import React, {createContext, useContext} from 'react'
import useFavorite from '../hook/useFavorite'

const FavoriteContext = createContext(null)

export const FavoritesProvider = ({children})=>{
    const value = useFavorite()

    return (
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    )
}

export const useFavoritesContext = ()=>{
    const ctx = useContext(FavoriteContext)

    if(!ctx){
        throw new Error('useFavoritesContext Error')
    }

    return ctx
}