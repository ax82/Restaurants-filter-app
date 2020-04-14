import React from "react";
import { View,Text, StyleSheet , FlatList,TextInput} from "react-native";
import {Feather} from '@expo/vector-icons';


const SearchBar =({term,onTermChange,ONTERMSUBMIT})=> {
   
return(
<View style= {styles.backgroundStyle}>
    <Feather name ="search" style={styles.iconStyle} />
    
     <TextInput 
      autoCapitalize='none'
      style={styles.inputStyle}
      placeholder="Search"
      value={term}
      onChangeText={onTermChange}
      onEndEditing={ONTERMSUBMIT}
      />
</View>
);
};

const styles = StyleSheet.create({
    backgroundStyle:{
    marginTop:10,
    backgroundColor :'#F0EEEE',
    height :50,
    borderRadius:5,
    marginHorizontal:15,
    flexDirection:'row',
    marginBottom:5
}, 
   inputStyle:{
       flex:1,
       fontSize:18
   },
   iconStyle:{
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal:15

   }


});

export default SearchBar;