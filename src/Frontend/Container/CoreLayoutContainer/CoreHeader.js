import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// Styles components
import styles from './styles'

// |------------------------------|
// |--- RENDER MAIN VIEW START ---|
// |------------------------------|
const leftActionHeader = (action) => action

const CoreHeader = ({ THIS }) => {
  const { leftAction, iconLeft, title, headerStyle, customView } = THIS.props
  return (
    <View style={[styles.container, headerStyle]}>

      <View style={styles.coreStyle}>
        {
          leftAction
            ? <TouchableOpacity onPress={leftActionHeader(leftAction)}
              style={styles.iconHeaderLeftContainer}>
              <View style={styles.iconHeaderLeft}>
                {iconLeft}
              </View>
            </TouchableOpacity>
            : <View style={styles.iconHeaderLeft} />
        }

        <View style={customView ? styles.titleRightContainer : styles.txtTitleContainer}>
          <Text numberOfLines={1} style={customView ? styles.txtTitleCustom : styles.txtTitle} >{title}</Text>
        </View>
        {customView}

      </View>
    </View>
  )
}

export default CoreHeader
