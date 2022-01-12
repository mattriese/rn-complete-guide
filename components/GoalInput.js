import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';

export default function GoalInput({ onAddGoal, visible }) {
  const [enteredGoal, setenteredGoal] = useState('');

  function goalInputHandler(enteredText) {
    console.log(`enteredTEXT`, enteredText);
    setenteredGoal(enteredText);
    console.log(`enteredGoal`, enteredGoal);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoal);
    setenteredGoal('');
  }

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="ADD GOAL"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderWidth: 2,
    borderColor: 'green',
    marginBottom: 10,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '75%',
  },
});
