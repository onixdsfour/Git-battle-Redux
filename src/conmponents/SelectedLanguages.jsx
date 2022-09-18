import { memo, useEffect } from "react";
import useDebounce from "./debounce";
import {useDispatch, useSelector } from "react-redux";
import { setSelectedLanguage } from "../redux/popular-actions";
import { useSearchParams } from "react-router-dom";
import { getPopularRepos } from "../redux/popular_thunk";

const languages = ['All', 'Javascript', 'CSS' , 'Python', 'Java', 'Ruby']; 

const SelectedLanguages = 
    memo(
        () => {   
            console.log('language component');
            
            const dispatch = useDispatch();  
            const selectedLanguage = useSelector(state => state.popularReducer.selectedLanguage);
            const [searchParams, setSearchParams] = useSearchParams();           
            const debounceLanguage = useDebounce(selectedLanguage,500);             
            const languageQuery = searchParams.get('lang') || '' ;           

            const SelectedLanguageHandler = (language) => {               
                dispatch(setSelectedLanguage(language));
                setSearchParams({lang: language});                     
            };
            
            useEffect(()=> {                 
                dispatch(getPopularRepos(languageQuery? languageQuery : debounceLanguage));          
            }, [debounceLanguage]);
            
            return (
                <ul className='languages'>
                    {languages.map((language, index) => (
                        <li 
                            key={index}                    
                            onClick={() => {SelectedLanguageHandler(language)}}   
                            style={language === selectedLanguage ? {color : '#d0021b'}: {}}                 
                        >                       
                            {language}                    
                        </li>
                    ))}
            </ul>
            )
        }

) 

export default SelectedLanguages;


