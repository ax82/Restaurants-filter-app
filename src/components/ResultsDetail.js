import React from 'react';
import {Text ,View,StyleSheet,FlatList,Image} from 'react-native';

const  ResultDetail= ({result})=>{
return (

<View style={styles.contaier}>
<Image style={styles.image} source={{uri:result.image_url}}/>
<Text style={styles.name}>{result.name}</Text>
<Text style={{marginLeft:2}}>{result.rating} Stars, {result.review_count} Reviews </Text>
</View>

);

};
const styles = StyleSheet.create({
    contaier:{
        marginLeft:15

    },

image:{
 width:300,
 height:170,
 borderRadius:4,
 marginLeft:2
 ,marginBottom:5
},
name:{
    
    fontWeight:'bold',
    marginLeft:2
}


});
export default ResultDetail