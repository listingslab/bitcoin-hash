import BitcoinHash from "./BitcoinHash"
// Components
import AppShell from "./components/AppShell"
import Icon from "./components/Icon"
import {Font} from "./components/Font"
import Addresses from "./components/Addresses"
import Transactions from "./components/Transactions"
import Search from "./components/Search"
import CurrencyMenu from "./components/CurrencyMenu"
import Subscribed from "./components/Subscribed"
import TopFive from "./components/TopFive"
import BitQuery from "./components/BitQuery"
import LatestBlocks from "./components/LatestBlocks"
import Onboarding from "./components/Onboarding"
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

export {
  BitcoinHash,
  AppShell,
  theme,
  currencies,
  store,
  persistor,
  setPwaKey,
  WrapRedux,
  MuiTheme,
  usePwaDispatch,
  usePwaSelect,
  makeTheme,
  Search,
  LatestBlocks,
  TopFive,
  BitQuery,
  CurrencyMenu,
  Subscribed,
  Transactions,
  Onboarding,
  Addresses,
  Icon,
  Font,
  selectPWA,
  startApp,
  setCurrency,
  getBitquery,
  updateSearchMode,
  updateSearchStr,
  search,
}
