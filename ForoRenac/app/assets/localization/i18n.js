import {I18n} from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import es from './es';
import en from './en';
const locales = RNLocalize.getLocales();

translations = {es, en};
if (Array.isArray(locales)) {
  var i18n = new I18n(translations);
  i18n.locale = locales[0].languageCode;
}
i18n.fallbacks = true;

export default i18n;
