import React from 'react';
import { View, Button,Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const List = () => {
  // Array of fruits to display in the list
  const data = [
    { key: 'Apple' },
    { key: 'Orange' },
    { key: 'Mango' },
  ];

  const data2 = ["mango", "orange", "apple"]

  return (
    // <View style={styles.listContainer}>
    //   <FlatList
    //     data={data}
    //     renderItem={({ item }) => (
    //       <View style={styles.item}>
    //         <TouchableOpacity ><Text style={styles.buttonstyle}>{item.key}</Text></TouchableOpacity>
        
    //       </View>
    //     )}
    //   />
    // </View>

<View style={styles.listContainer}>
<Text>{data2[0]}</Text>
</View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex:1,
    flexDirection:'row',
    paddingHorizontal:10,
    alignItems:'center',
  },
  item: {
    padding: 15,
    marginVertical: 5,
    alignSelf:'center',
    alignItems:'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    width: '40%',
  },
  text: {
    fontSize: 10,
  },
  buttonstyle:{
    width: "100%",
    color: "green"
  }
  
});

export default List;