import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function GoalItem({ itemData, onDelete }) {
  return (
    <TouchableOpacity onPress={() => onDelete(itemData.item.key)}>
      <View style={styles.listItem}>
        <Text>{itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5,
  },
});
