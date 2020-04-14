import React,{useState} from "react";
import { View,Text, StyleSheet , FlatList, Alert,ScrollView} from "react-native";
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList'
const SearchScreen =()=> {
const [term,setTerm]=useState('');
const [searchApi,results]=useResults();
// this is the helper function that we know the price with 
const filterResultsByPrice =(price)=>{
return results.filter(result=>{
    return result.price ===price;
});
};
return(
<>
    
    <SearchBar term ={term} 
    onTermChange={setTerm}
    ONTERMSUBMIT={()=>searchApi(term)}
    />
    
   
    <ScrollView>
    <ResultsList  results={filterResultsByPrice('$')} title= " مطاعم الطفرة  " />
    <ResultsList results={filterResultsByPrice('$$')} title =" غويلية " />
    <ResultsList results={filterResultsByPrice('$$$')}   title= " اول ماينزل الراتب" />
    
    
     </ScrollView></>

);
};

const styles = StyleSheet.create({});

export default SearchScreen;