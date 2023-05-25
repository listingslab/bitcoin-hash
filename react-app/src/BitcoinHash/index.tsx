import {usePwaDispatch} from "./hooks/usePwaDispatch"
import {usePwaSelect} from "./hooks/usePwaSelect"
import {makeImgSrc} from "./theme/utils"
import {makeTheme} from "./theme/makeTheme"
import MuiTheme from "./theme/MuiTheme"
import Icon from "./components/Icon"
import {Font} from "./components/Font"
import WrapRedux from "./redux/WrapRedux"
import {locales} from "./redux/locales"
import {theme} from "./redux/theme"
import {selectPWA, setPwaKey} from "./redux/pwaReducer"
import {store} from "./redux/store"
import {persistor} from "./redux/store"
import { startApp } from "./redux/actions/startApp"
import { getAValue } from "./redux/actions/getAValue"
import { setLocale } from "./redux/actions/setLocale"
import { setSeo } from "./redux/actions/setSeo"
import { setOpen } from "./redux/actions/setOpen"
import { navigateTo } from "./redux/actions/navigateTo"

export {
  locales,
  theme,
  store,
  persistor,
  setPwaKey,
  WrapRedux,
  MuiTheme,
  usePwaDispatch,
  usePwaSelect,
  makeTheme,
  Icon,
  Font,
  makeImgSrc,
  selectPWA,
  startApp,
  getAValue,
  setLocale,
  navigateTo,
  setSeo,
  setOpen,
}
