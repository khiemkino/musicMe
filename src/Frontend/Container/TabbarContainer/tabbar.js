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
          <TouchableOpacity disabled={activeTab === i} activeOpacity={1}
            key={tab} onPress={() => goToPage(i)} style={styles.tab}>
            <View style={{ alignItems: 'center',
              justifyContent: 'center',
              opacity: activeTab === i ? 1 : 0.5 }}>
              <MaterialIcons name={icons[i].icon} size={width(7)} color={'black'} />
              <Text numberOfLines={1}
                style={styles.txtStyle}>{I18n.t(tab)}</Text>
            </View>
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
