import React from 'react'
import { Text, TextInput, View } from 'react-native'

import styles from './styles'
import * as Animatable from 'react-native-animatable'

const AppInputError = (props) => {
  const { containerStyle, value, inputStyle, isError, placeHolderStyle, errMessage,
    iconHolder, btnViewRender, labelStyle, txtLabel, txtHolder, textErrCustom, onChangeText } = props

  const styleInput = [styles.container, containerStyle,
    isError
      ? styles.borderErrContainer
      : (value.length > 0 && styles.borderSuccessContainer)]

  const onChangeTextInput = (input) => {
    onChangeText(input)
  }

  return (
    <View>
      <Animatable.View style={styleInput} duration={800} transition={'borderColor'}>
        {
          iconHolder &&
          <View style={styles.iconStyle}>
            {
              iconHolder
            }
          </View>
        }

        <Animatable.Text transition={'opacity'}
          style={[styles.txtPlaceHolderAdmin, placeHolderStyle,
            (value ? styles.placeHolderHide : styles.placeHolderShow)]}>{txtHolder}</Animatable.Text>

        <TextInput
          {...this.props}
          value={value}
          onChangeText={onChangeTextInput}
          style={[styles.inputContainer, inputStyle]}
          underlineColorAndroid={'transparent'}
        />
        {txtLabel
          ? <View style={styles.labelContainer}>
            <Text style={labelStyle}>{txtLabel}</Text>
          </View>
          : <View style={styles.labelContainer}>
            {btnViewRender}
          </View>}

      </Animatable.View>
      {
        // Custom style with msgTypeCustomErr props
        <Animatable.Text transition={['top', 'opacity', 'fontSize']}
          style={isError ? [styles.txtErr, textErrCustom] : styles.txtNoErr}>{errMessage}</Animatable.Text>
      }
    </View>

  )
}

export default AppInputError
