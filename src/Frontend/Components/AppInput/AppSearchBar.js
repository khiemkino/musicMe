import React from 'react'
import { TextInput, View, TouchableOpacity } from 'react-native'

import styles from './styles'
import { iconBack } from '@/globalIcon'
import * as Animatable from 'react-native-animatable'

const AppSearchBar = (props) => {
  const { containerStyle, inputStyle, value, txtHolder, placeHolderStyle, searchData, handleResults, renderLeft,
    renderRight, handleClearInput, handleInputSearch } = props

  const deActiveSearch = () => {
    handleClearInput()
    onChangeText('')
  }

  const clearInput = () => {
    handleClearInput()
    onChangeText('')
  }

  const onChangeText = (input) => {
    handleInputSearch(input)
    handleResults(internalSearch(input))
  }

  const internalSearch = (input) => {
    if (input === '') {
      return searchData
    }

    let filterData = searchData.filter(item =>
      item.name.toLowerCase().includes(input.toLowerCase())
    )

    return filterData
  }

  return (
    <Animatable.View style={[styles.rowContainer, containerStyle]} animation={'fadeIn'}>

      <Animatable.Text transition={'opacity'}
        style={[styles.txtPlaceHolder, placeHolderStyle,
          (value ? styles.placeHolderHide : styles.placeHolderShow)]}>{txtHolder}</Animatable.Text>

      <View style={styles.searchLabelContainer}>
        <View style={styles.iconContainer}>
          {renderLeft}
        </View>
      </View>
      <TextInput
        {...this.props}
        value={value}
        style={[styles.inputContainer, inputStyle]}
        onChangeText={onChangeText}
        underlineColorAndroid={'transparent'}
      />
      <Animatable.View transition={'opacity'}
        style={[styles.searchLabelContainer, (value ? styles.placeHolderShow : styles.placeHolderHide)]}>
        <TouchableOpacity onPress={clearInput} style={styles.iconContainer}>
          {renderRight}
        </TouchableOpacity>
      </Animatable.View>
    </Animatable.View>
  )
}

export default AppSearchBar
