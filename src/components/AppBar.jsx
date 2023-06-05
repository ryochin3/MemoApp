import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarInner}>
        <Text style={styles.txtTitle}>Memo App</Text>
        <Text style={styles.btnLogout}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467fd3',
    justifyContent: 'flex-end',
  },
  appBarInner: {
    alignItems: 'center',
  },
  txtTitle: {
    fontSize: 22,
    lineHeight: 32,
    marginBottom: 8,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  btnLogout: {
    position: 'absolute',
    right: 19,
    bottom: 12,
    color: '#f0f4f8',
  },
});
