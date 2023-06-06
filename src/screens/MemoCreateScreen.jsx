import React from 'react';
import {
  View, TextInput, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleBtn from '../components/CircleBtn';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen() {
  return (
    <KeyboardSafeView style={styles.container}>
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleBtn name="check" />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
  },
  input: {
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
  },
});
