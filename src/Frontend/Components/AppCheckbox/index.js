'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

import { width, height } from '@/globalStyles'
import images from '*/Image'

class CheckBox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      internalChecked: false,
      isDisabled: props.disabled
    }
    this.baseState = this.state
    this.onChange = this.onChange.bind(this)
  }

  componentWillMount () {
    this.setState(this.baseState)
  }

  onChange () {
    if (this.props.onChange && typeof this.props.checked === 'boolean') {
      // If passing the value as a prop, return the negation of current value
      this.props.onChange(!this.props.checked)
    } else {
      let internalChecked = this.state.internalChecked
      let newState = !internalChecked

      if (this.props.onChange) {
        this.props.onChange(newState)
      }
      this.setState({
        internalChecked: newState
      })
    }
  }

  render () {
    let source

    if (typeof this.props.checked === 'boolean') {
      source = this.props.checked ? this.props.checkedImage : this.props.uncheckedImage
    } else {
      source = this.state.internalChecked ? this.props.checkedImage : this.props.uncheckedImage
    }
    let container = (
      <View style={this.props.containerStyle || styles.container}>
        <Image
          style={this.props.checkboxStyle || styles.checkbox}
          source={source}/>
        <View style={styles.labelContainer}>
          <Text style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
        </View>
      </View>
    )

    if (this.props.labelBefore) {
      container = (
        <View style={this.props.containerStyle || [styles.container, styles.flexContainer]}>
          { (this.props.label ? (
            <View style={styles.labelContainer}
              accessible={this.props.accessible}
              accessibilityLabel={this.props.accessibilityLabel + 'Label'}
              testID={this.props.testID + 'Label'}>
              <Text numberOfLines={this.props.labelLines} style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
            </View>
          ) : <View></View>) }
          <Image
            style={[styles.checkbox, this.props.checkboxStyle]}
            source={source}
            accessible={this.props.accessible}
            accessibilityLabel={this.props.accessibilityLabel + 'Checkbox'}
            testID={this.props.testID + 'Checkbox'}/>
        </View>
      )
    } else {
      container = (
        <View style={[styles.container, this.props.containerStyle]}>
          <Image
            style={[styles.checkbox, this.props.checkboxStyle]}
            source={source}
            accessible={this.props.accessible}
            accessibilityLabel={this.props.accessibilityLabel + 'Checkbox'}
            testID={this.props.testID + 'Checkbox'}/>
          { (this.props.label ? (
            <View style={styles.labelContainer}
              accessible={this.props.accessible}
              accessibilityLabel={this.props.accessibilityLabel + 'Label'}
              testID={this.props.testID + 'Label'}>
              <Text numberOfLines={this.props.labelLines} style={[styles.label, this.props.labelStyle]}>{this.props.label}</Text>
            </View>
          ) : <View></View>) }
        </View>
      )
    }

    return (
      <TouchableHighlight accessible={this.props.accessible} accessibilityLabel={this.props.accessibilityLabel} testID={this.props.testID} onPress={this.onChange} underlayColor={this.props.underlayColor} style={styles.flexContainer} checkbox={this.props.hitSlop}>
        {container}
      </TouchableHighlight>
    )
  }
}

var styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    width: width(4),
    height: height(3),
    resizeMode: 'contain'
  },
  labelContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  label: {
    fontSize: width(3.5),
    color: '#656565'
  }
})

CheckBox.defaultProps = {
  label: 'Label',
  labelLines: 1,
  labelBefore: false,
  checked: null,
  checkedImage: images.select,
  uncheckedImage: images.unSelect,
  underlayColor: 'transparent'
}

module.exports = CheckBox
