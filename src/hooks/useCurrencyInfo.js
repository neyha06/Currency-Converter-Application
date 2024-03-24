import { useState,useEffect } from "react";

//std approach to put "use" at start of name of hooks

function useCurrencyInfo(currency){
    const[data,setData]=useState({})
//useEffect hook is used here to call api automatically when the function is called
        useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
            ).then((res)=>res.json())//convert data to josn using res.json()
            .then((res)=>setData(res[currency]))
            console.log(data);
        },[currency])
        console.log(data);
        return data
}

export default useCurrencyInfo;