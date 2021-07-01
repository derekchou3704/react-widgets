// There are CORS issues about api key, so maybe try other 3rd-party translation API
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const apiKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM' //Only works under http://localhost:3000

const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('')
    const [debounceText, setDebounceText] = useState(text)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceText(text)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translation/v2', 
            {}, 
            {
                params: {
                    q: debounceText,
                    target: language.value,
                    key: apiKey
                }
            })
            setTranslated(data.data.translations[0].translatedText)
        }
        doTranslation()
    }, [language, debounceText])

    return (
        <div>
            <h1 classname="ui header">{translated}</h1>
        </div>
    )
}

export default Convert