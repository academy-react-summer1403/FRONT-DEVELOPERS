import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../../../components/Translate/i18n";



export const TranslateSlice= createSlice({
    name:"translate",
    initialState:{},
    reducers:{
        toggleLanguage1:()=>{
            const newLanguage = i18n.language = 'en';
            i18n.changeLanguage(newLanguage);
        },
        toggleLanguage2:()=>{
            const newLanguage = i18n.language = 'fa' ;
           i18n.changeLanguage(newLanguage);
        },
        toggleLanguage3:()=>{
                const newLanguage = i18n.language = 'es';
               i18n.changeLanguage(newLanguage);
        },
        toggleLanguage4:()=>{
            const newLanguage = i18n.language = 'tr';
           i18n.changeLanguage(newLanguage);
    },
    }
})

export default TranslateSlice.reducer

