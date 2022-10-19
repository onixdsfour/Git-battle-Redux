import {FC, memo, useEffect } from "react";
import useDebounce from "./debounce";
import {useDispatch, useSelector } from "react-redux";
import { setSelectedLanguage } from "../redux/popular-actions";
import { useSearchParams } from "react-router-dom";
import { getPopularRepos } from "../redux/popular_thunk";
import { RootState } from "../redux/store";

const languages: string[] = ['All', 'Javascript', 'CSS' , 'Python', 'Java', 'Ruby']; 

const SelectedLanguages: FC = 
    memo(
        (): JSX.Element => {               
            
            const dispatch = useDispatch();  
            const selectedLanguage: string = useSelector((state: RootState): string => state.popularReducer.selectedLanguage);
            const [searchParams, setSearchParams] = useSearchParams();           
            const debounceLanguage: string = useDebounce(selectedLanguage,500);             
            const languageQuery: string = searchParams.get('lang') || '' ;           

            const SelectedLanguageHandler = (language: string): void => {               
                dispatch(setSelectedLanguage(language));
                setSearchParams({lang: language});                     
            };
            
            useEffect(()=> {                 
                dispatch(getPopularRepos(languageQuery? languageQuery : debounceLanguage));          
            }, [debounceLanguage]);
            
            return (
                <ul className='languages'>
                    {languages.map((language: string, index: number): JSX.Element => (
                        <li 
                            key={index}                    
                            onClick={():void => {SelectedLanguageHandler(language)}}   
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


