import BitcoinHash from "./BitcoinHash"
import AppShell from "./AppShell"
// Components
import Icon from "./components/Icon"
import {Font} from "./components/Font"
import Search from "./components/Search"
import CurrencyMenu from "./components/CurrencyMenu"
import BitQuery from "./components/BitQuery"
import Notifyer from "./components/Notifyer"
import AccordionTestData from "./components/AccordionTestData"
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
import { updateSearchStrT } from "./redux/actions/updateSearchStrT"
import { updateSearchStrA } from "./redux/actions/updateSearchStrA"
import { searchAddresses } from "./redux/actions/searchAddresses"
import { searchTransactions } from "./redux/actions/searchTransactions"
import { toggleNotifyer } from "./redux/actions/toggleNotifyer"

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
  updateSearchStrT,
  updateSearchStrA,
  toggleNotifyer,
  searchTransactions,
  searchAddresses,
  Search,
  BitQuery,
  CurrencyMenu,
  Notifyer,
  AccordionTestData,
  Icon,
  Font,
}
