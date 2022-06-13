import PJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import { store } from './app/store'
import { useAppSelector, useAppDispatch } from './app/hooks'

import Shared from './Shared'
import { Icon, getDesignTokens } from './theme'

import RouteEngine from './RouteEngine'
import MaxiButton from './components/MaxiButton'
import Navigator from './components/Navigator'
import MiniButton from './components/MiniButton'
import OnTheMap from './components/OnTheMap'
import AppMenu from './components/AppMenu'
import SigninDialog from './components/admin/SigninDialog'
import Social from './components/Social'
import Blocked from './components/Blocked'
import Map from './components/Map'
import FindUs from './components/FindUs'
import FullScreenToggle from './components/FullScreenToggle'

import CMS from './components/admin/CMS'
import Form from './components/admin/Form'
import Nav from './components/admin/Nav'
import Collection from './components/admin/Collection'
import Shape from './components/admin/Shape'

import { getById, sortByAttribute } from './app/utils'

import {
    Flash,
    MovieClip,
    initFlash,
    setFlash,
    selectFlash,
    selectMovieClips,
    getDisplay,
    getNextHighestDepth,
} from './Flash'

import { selectCms, setCms, setDataBus, cmsRead, newCollectionBus, updateDataBus } from './features/cms'

import {
    selectRoute,
    selectRefresh,
    selectSSR,
    selectCore,
    setCore,
    navClick,
    navigateTo,
    signIn,
    unsignIn,
} from './features/core'

console.warn('hof', PJSON.version)

const lifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: Shared,
    errorBoundary(err, info, props) {
        console.warn('shared', err, info, props)
        return null
    },
})

export const { bootstrap, mount, unmount } = lifecycles

export {
    // Core
    store,
    useAppDispatch,
    useAppSelector,
    RouteEngine,
    selectRoute,
    selectRefresh,
    selectSSR,
    signIn,
    unsignIn,
    navClick,
    navigateTo,
    selectCore,
    setCore,
    // Theme
    getDesignTokens,
    Icon,
    // Components
    Navigator,
    MiniButton,
    MaxiButton,
    AppMenu,
    FindUs,
    OnTheMap,
    Blocked,
    Map,
    Social,
    FullScreenToggle,
    // Admin
    SigninDialog,
    CMS,
    Form,
    Nav,
    Collection,
    Shape,
    // Cms
    cmsRead,
    newCollectionBus,
    selectCms,
    setCms,
    setDataBus,
    updateDataBus,
    // Flash
    selectFlash,
    selectMovieClips,
    setFlash,
    initFlash,
    getDisplay,
    Flash,
    MovieClip,
    getNextHighestDepth,
    // Utils
    getById,
    sortByAttribute,
}
