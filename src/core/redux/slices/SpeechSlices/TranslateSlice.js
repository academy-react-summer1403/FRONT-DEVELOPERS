import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../../../components/Translate/i18n";



export const TranslateSlice= createSlice({
    name:"translate",
    initialState:{},
    reducers:{
        toggleLanguage:()=>{
     const newLanguage = i18n.language === 'en' ? 'fa' : 'en';
    i18n.changeLanguage(newLanguage);
        }
    }
})

export default TranslateSlice.reducer

