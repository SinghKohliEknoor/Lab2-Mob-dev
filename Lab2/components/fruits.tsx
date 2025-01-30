import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const List = () => {
  // Array of fruits to display in the list
  const data = [
    { key: 'Apple' },
    { key: 'Orange' },
    { key: 'Mango' },
  ];

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.key}</Text>
          </View>
        )}
        keyExtractor={(item) => item.key}
      />
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
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    width: '80%',
  },
  text: {
    fontSize: 10,
  },
});

export default List;