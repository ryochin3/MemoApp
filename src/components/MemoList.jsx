import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MemoList() {
  return (
    <View>
      <View style={styles.listItem}>
        <View>
          <Text style={styles.listItemTitle}>買い物リスト</Text>
          <Text style={styles.listItemDate}>2023/06/05 20:00</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
