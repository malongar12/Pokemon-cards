import { useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

export function useFetch(url){
    const [cards, setCards] = useState([]);



          const addCard = async () => {
            const response = await axios.get(url)
            setCards(cards => [...cards, { ...response.data, id: uuid() }]);
        }

    return [cards,addCard]

}