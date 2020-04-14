import React from 'react';
import {Text ,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultsDetail from '../components/ResultsDetail';
const  ResultsList= ({title,results,navigation})=>{
return(
    <View style={styles.contaier}>

    <Text style={styles.title}>{title}</Text>
    <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    data={results}
    keyExtractor={ result=> result.id}
    renderItem={({item})=>{
     return ( 
         <>
        <TouchableOpacity
        onPress={()=> navigation.navigate('Show',{id: item.id})}
        >
           <ResultsDetail result={item}/>
        </TouchableOpacity>
        </>
     );
    }}
    />
    </View>

);
};

const styles = StyleSheet.create({

title:{
    fontSize:18
    ,fontWeight:'bold',
    marginLeft:15,
    marginBottom:5 
},
contaier:{
    marginBottom:10
}


});

export default withNavigation(ResultsList);