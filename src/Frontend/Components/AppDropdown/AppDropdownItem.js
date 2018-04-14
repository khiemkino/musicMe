import React from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

const MenuItem = props => (
  <TouchableHighlight
    disabled={props.disabled}
    onPress={props.onPress}
    style={[styles.container, props.style]}
    underlayColor={props.underlayColor}
  >
    <Text
      numberOfLines={1}
      style={[
        styles.title,
        props.disabled && { color: props.disabledTextColor },
        props.textStyle
      ]}
    >
      {props.children}
    </Text>
  </TouchableHighlight>
)

MenuItem.defaultProps = {
  disabled: false,
  disabledTextColor: 'rgb(189,189,189)',
  underlayColor: 'rgb(224,224,224)'
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    maxWidth: 248,
    minWidth: 124
  },

  title: {
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 16
  }
})

export default MenuItem
