import{useState,useEffect} from 'react';
import yelp from '../api/yelp'


export default ()=>{


    const [result,setResults]=useState([]); 
    const searchApi = async (searchTerm) => {
        try{
     const response= await yelp.get('/search',{
        params:{
                limit :50,
                term: searchTerm,
                location : 'san jose'
    
        }
    
    
     });
     setResults(response.data.businesses);
    } catch(err){
    }
    };
    useEffect( ()=>{
     searchApi('pasta');
    }, []  );
return [searchApi,result
]

};