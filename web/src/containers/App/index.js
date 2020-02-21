import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../actions/authAction';
import { setMe, setBalance, updateUser } from '../../actions/userAction';
import { addUserTrades } from '../../actions/walletActions';

import {
	setUserOrders,
	addOrder,
	updateOrder,
	removeOrder
} from '../../actions/orderAction';
import {
	setOrderbooks,
	setTrades,
	setOrderbook,
	addTrades,
	setPairsData
} from '../../actions/orderbookAction';

import App from './App';

import {
	setTickers,
	setPairs,
	changePair,
	setCurrencies,
	setNotification,
	closeNotification,
	openContactForm,
	openHelpfulResourcesForm,
	setLanguage,
	changeTheme,
	closeAllNotification,
	setChatUnreadMessages,
	setOrderLimits,
	setSnackDialog,
	setValidBaseCurrency,
	setConfig,
	setInfo
} from '../../actions/appActions';

const mapStateToProps = (store) => ({
	coins: store.app.coins,
	symbol: store.orderbook.symbol,
	prices: store.orderbook.prices,
	fetchingAuth: store.auth.fetching,
	activeNotification: store.app.activeNotification,
	verification_level: store.user.verification_level,
	activeLanguage: store.app.language,
	activeTheme: store.app.theme,
	orders: store.order.activeOrders,
	user: store.user,
	pair: store.app.pair,
	orderbooks: store.orderbook.pairsOrderbooks,
	pairsTrades: store.orderbook.pairsTrades,
	unreadMessages: store.app.chatUnreadMessages,
	settings: store.user.settings,
	config: store.app.config,
	info: store.app.info
});

const mapDispatchToProps = (dispatch) => ({
	logout: bindActionCreators(logout, dispatch),
	addTrades: bindActionCreators(addTrades, dispatch),
	setOrderbook: bindActionCreators(setOrderbook, dispatch),
	setMe: bindActionCreators(setMe, dispatch),
	setBalance: bindActionCreators(setBalance, dispatch),
	setUserOrders: bindActionCreators(setUserOrders, dispatch),
	addOrder: bindActionCreators(addOrder, dispatch),
	updateOrder: bindActionCreators(updateOrder, dispatch),
	removeOrder: bindActionCreators(removeOrder, dispatch),
	addUserTrades: bindActionCreators(addUserTrades, dispatch),
	updateUser: bindActionCreators(updateUser, dispatch),
	closeNotification: bindActionCreators(closeNotification, dispatch),
	closeAllNotification: bindActionCreators(closeAllNotification, dispatch),
	openContactForm: bindActionCreators(openContactForm, dispatch),
	openHelpfulResourcesForm: bindActionCreators(
		openHelpfulResourcesForm,
		dispatch
	),
	setNotification: bindActionCreators(setNotification, dispatch),
	changeLanguage: bindActionCreators(setLanguage, dispatch),
	changePair: bindActionCreators(changePair, dispatch),
	setPairs: bindActionCreators(setPairs, dispatch),
	setPairsData: bindActionCreators(setPairsData, dispatch),
	setOrderbooks: bindActionCreators(setOrderbooks, dispatch),
	setTrades: bindActionCreators(setTrades, dispatch),
	setTickers: bindActionCreators(setTickers, dispatch),
	changeTheme: bindActionCreators(changeTheme, dispatch),
	setChatUnreadMessages: bindActionCreators(setChatUnreadMessages, dispatch),
	setOrderLimits: bindActionCreators(setOrderLimits, dispatch),
	setSnackDialog: bindActionCreators(setSnackDialog, dispatch),
	setCurrencies: bindActionCreators(setCurrencies, dispatch),
	setValidBaseCurrency: bindActionCreators(setValidBaseCurrency, dispatch),
	setConfig: bindActionCreators(setConfig, dispatch),
	setInfo: bindActionCreators(setInfo, dispatch)
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);