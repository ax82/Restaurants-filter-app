import React,{useState,useEffect} from 'react';
import{View ,Text,StyleSheet,FlatList,Image} from 'react-native';
import yelp from '../api/yelp';


const ResultShowScreen = ({navigation})=>{
 const [result,setResult]=useState(null);
 const id = navigation.getParam('id');

 const getResult= async(id)=>{
 const response= await yelp.get(`/${id}`);
 setResult( response.data);
 };
 useEffect(()=>{
  getResult(id);
 },[]);
 if(!result){
     return null;
 }
    return (<><Text style={styles.text}>{result.name}:اسم المطعم</Text>
    <Text style={styles.text1}>رقم الهاتف:{result.display_phone}</Text> 
    <Text style={{marginLeft:315,marginBottom:5}}>التقييم:{result.rating}</Text> 
      {result.categories.map((c,i)=>{
          return(
          <Text key={i}>{c.alias}</Text>
          )
      })}
        <FlatList
        data={result.photos}
        keyExtractor= {(photo)=>photo}
        renderItem={({item})=>{
          return(<View><Image style={styles.image} source={{uri:item}}/>
          <Image style={styles.image} source={{uri:item}}/>
          </View>
          );
        }}/>
        
        </>
    );
};
const styles=StyleSheet.create({
    image:{
        height:200,
        width:350,
        marginBottom:10,
        marginLeft:26,
      
    },
    text:{
        fontWeight:'bold',
        fontSize:18,
       
        marginLeft:140,
        marginBottom:10
        ,marginTop:5

    },
    text1:{
        
        fontSize:18,
       
        marginLeft:167,
        marginBottom:10
        ,marginTop:5

    }
});
export default ResultShowScreen;