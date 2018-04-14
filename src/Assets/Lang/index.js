// Trans Component
import I18n from 'react-native-i18n'
import en from './TranslationsEN'
import vi from './TranslationsVI'

I18n.fallbacks = true
I18n.translations = {
  en, vi
}
export default I18n
