import { createContext } from "react";
import doc from '../assets/doc.png'

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const doctors = [
            {
                _id: '0001',
                image: doc  ,
                name: 'Jennifer Williams',
                speciality: 'Orthopedics',
                education: 'MBBS',
                yearsOfExperience: 3,
                about: 'about doctor',
                fee: 60
            },
            {
                _id: '0001',
                image: doc  ,
                name: 'Jennifer Williams',
                speciality: 'Orthopedics',
                education: 'MBBS',
                yearsOfExperience: 3,
                about: 'about doctor',
                fee: 60
            },
            {
                _id: '0001',
                image: doc  ,
                name: 'Jennifer Williams',
                speciality: 'Orthopedics',
                education: 'MBBS',
                yearsOfExperience: 3,
                about: 'about doctor',
                fee: 60
            },
            {
                _id: '0001',
                image: doc  ,
                name: 'Jennifer Williams',
                speciality: 'Orthopedics',
                education: 'MBBS',
                yearsOfExperience: 3,
                about: 'about doctor',
                fee: 60
            },
    
            {
                _id: '0001',
                image: doc  ,
                name: 'Jennifer Williams',
                speciality: 'Orthopedics',
                education: 'MBBS',
                yearsOfExperience: 3,
                about: 'about doctor',
                fee: 60
            },
            {
                _id: '0001',
                image: doc  ,
                name: 'Jennifer Williams',
                speciality: 'Orthopedics',
                education: 'MBBS',
                yearsOfExperience: 3,
                about: 'about doctor',
                fee: 60
            }
        ]

    const value = {
        doctors
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider