import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import I18n from '*/Lang'
import styles from './styles'
import { connect } from 'react-redux'
import { width } from '@/globalStyles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const TabbarScreen = (props) => {
  const { goToPage, activeTab, style, tabs } = props
  const icons = [
    { key: 0, icon: 'home' },
    { key: 1, icon: 'album' },
    { key: 2, icon: 'library-music' },
    { key: 3, icon: 'settings' }
  ]
  return (
    <View style={[styles.tabs, style]}>
      {tabs.map((tab, i) => {
        return (
          <TouchableOpacity disabled={activeTab === i}
            ref={(icon) => { icons[i] = icon }}
            key={tab} onPress={() => goToPage(i)} style={styles.tab}>
            <MaterialIcons name={icons[i].icon} size={width(7)} color={'black'} />
            <Text numberOfLines={1}
              style={[styles.txtStyle, { fontSize: width(3), color: activeTab === i ? 'white' : '#555555' }]}>{I18n.t(tab)}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
const mapStateToProps = (state) => ({
  ...state
})
export default connect(mapStateToProps)(TabbarScreen)
