import BitcoinHash from "./BitcoinHash"
import AppShell from "./AppShell"
// Components
import Icon from "./components/Icon"
import {Font} from "./components/Font"
import Search from "./components/Search"
import CurrencyMenu from "./components/CurrencyMenu"
import BitQuery from "./components/BitQuery"
import Notifyer from "./components/Notifyer"
// Theme
import MuiTheme from "./theme/MuiTheme"
import {makeTheme} from "./theme/makeTheme"
// Hooks
import {usePwaDispatch} from "./hooks/usePwaDispatch"
import {usePwaSelect} from "./hooks/usePwaSelect"
// Redux
import WrapRedux from "./redux/WrapRedux"
import {theme} from "./redux/theme"
import {currencies} from "./redux/currencies"
import {selectPWA, setPwaKey} from "./redux/pwaReducer"
import {store} from "./redux/store"
import {persistor} from "./redux/store"
import { startApp } from "./redux/actions/startApp"
import { setCurrency } from "./redux/actions/setCurrency"
import { getBitquery } from "./redux/actions/getBitquery"
import { updateSearchMode } from "./redux/actions/updateSearchMode"
import { updateSearchStr } from "./redux/actions/updateSearchStr"
import { search } from "./redux/actions/search"
import { toggleNotifyer } from "./redux/actions/toggleNotifyer"
import { cancelSearch } from "./redux/actions/cancelSearch"

export {
  BitcoinHash,
  AppShell,
  WrapRedux,
  store,
  persistor,
  usePwaDispatch,
  usePwaSelect,
  setPwaKey,
  MuiTheme,
  makeTheme,
  theme,
  currencies,

  selectPWA,
  startApp,
  setCurrency,
  getBitquery,
  updateSearchMode,
  updateSearchStr,
  toggleNotifyer,
  cancelSearch,
  search,
  
  Search,
  BitQuery,
  CurrencyMenu,
  Notifyer,
  Icon,
  Font,
  
}
