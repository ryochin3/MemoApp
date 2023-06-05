import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';

export default function CircleBtn(props) {
  const { children, style } = props;
  return (
    <View style={[styles.btnAdd, style]}>
      <Text style={styles.btnAddLabel}>{children}</Text>
    </View>
  );
}

CircleBtn.propTypes = {
  children: string.isRequired,
  style: shape(),
};

CircleBtn.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
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
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
  },
  btnAddLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
