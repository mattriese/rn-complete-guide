import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);

  console.log(`(APP RENDERED) courseGoals`, courseGoals);

  function onaddGoal(enteredGoal) {
    console.log(`enteredGoal in ADDGOALHANDLER`, enteredGoal);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setisAddMode(false);
    console.log(`courseGoals`, courseGoals);
  }

  function deleteItemHandler(id) {
    console.log('deleteHandler RAN');
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => goal.key != id);
    });
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setisAddMode(true)}></Button>
      <GoalInput visible={isAddMode} onAddGoal={onaddGoal}></GoalInput>
      <FlatList
        style={{ padding: 10 }}
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem itemData={itemData} onDelete={deleteItemHandler}></GoalItem>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
});

// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.screen}>
//       <View style={styles.colorContainer}>
//         <View style={styles.red}>
//           <Text>1</Text>
//         </View>
//         <View style={styles.blue}>
//           <Text>2</Text>
//         </View>
//         <View style={styles.green}>
//           <Text>3</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: { padding: 50, borderWidth: 1, borderColor: 'blue' },
//   colorContainer: {
//     padding: 50,
//     margin: 20,

//     flexDirection: 'row',
//     height: 300,
//     width: '80%',
//     justifyContent: 'space-between',
//     alignItems: 'flex-end',
//     borderColor: 'red',
//     borderWidth: 3,
//   },
//   red: {
//     backgroundColor: 'red',
//     width: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: 'yellow',
//     borderWidth: 1,
//   },
//   blue: {
//     backgroundColor: 'blue',
//     width: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   green: {
//     backgroundColor: 'green',
//     width: 70,
//     height: 70,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
