import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.appBarInner}>
          <Text style={styles.txtTitle}>Memo App</Text>
          <Text style={styles.btnLogout}>ログアウト</Text>
        </View>
      </View>

      <View>
        <View style={styles.listItem}>
          <View>
            <Text style={styles.listItemTitle}>買い物リスト</Text>
            <Text style={styles.listItemDate}>2023/06/05 20:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.listItem}>
          <View>
            <Text style={styles.listItemTitle}>買い物リスト</Text>
            <Text style={styles.listItemDate}>2023/06/05 20:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.listItem}>
          <View>
            <Text style={styles.listItemTitle}>買い物リスト</Text>
            <Text style={styles.listItemDate}>2023/06/05 20:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View style={styles.btnAdd}>
        <Text style={styles.btnAddLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
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
  listItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  listItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  listItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  btnAdd: {
    backgroundColor: '#467fd3',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: {width: 4, height: 6},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  btnAddLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  }
});
