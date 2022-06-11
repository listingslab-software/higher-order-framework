import PJSON from '../package.json'
import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import { store } from './app/store'
import { useAppSelector, useAppDispatch } from './app/hooks'
import { getById } from './app/utils'
import Shared from './Shared'
import RouteEngine from './RouteEngine'
import MaxiButton from './components/MaxiButton'
import Landing from './components/Landing'
import Navigator from './components/Navigator'
import MiniButton from './components/MiniButton'
import OnTheMap from './components/OnTheMap'
import TitleMovie from './components/TitleMovie'
import AppMenu from './components/AppMenu'
import SigninDialog from './components/admin/SigninDialog'
import Social from './components/Social'
import Blocked from './components/Blocked'
import Map from './components/Map'
import MetaButton from './components/MetaButton'
import FindUs from './components/FindUs'
import CMS from './components/admin/CMS'

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

import { selectCms, setCms, cmsRead } from './features/cms'

import {
    Persona,
    selectPersona,
    setPersona,
    signIn,
    unsignIn,
} from './features/persona'

import {
    selectRoute,
    selectRefresh,
    selectSSR,
    selectCore,
    setCore,
    navClick,
    navigateTo,
} from './features/core'

import { Icon, getDesignTokens } from './theme'

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
    RouteEngine,
    selectRoute,
    selectRefresh,
    selectSSR,
    Map,
    store,
    useAppDispatch,
    useAppSelector,
    getDesignTokens,
    Icon,
    Social,
    signIn,
    unsignIn,
    getById,
    Navigator,
    MetaButton,
    MiniButton,
    MaxiButton,
    Persona,
    setPersona,
    selectPersona,
    // Components
    AppMenu,
    FindUs,
    OnTheMap,
    Landing,
    TitleMovie,
    Blocked,
    SigninDialog,
    CMS,
    // Cms
    cmsRead,
    selectCms,
    setCms,
    // Core
    navClick,
    navigateTo,
    selectCore,
    setCore,
    // Flash
    selectFlash,
    selectMovieClips,
    setFlash,
    initFlash,
    getDisplay,
    Flash,
    MovieClip,
    getNextHighestDepth,
}
