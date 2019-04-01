import Vue from 'vue'
import SvgIcon from '@/components/Svg'
import { requireAll } from '@/utils'

Vue.component('svg-icon', SvgIcon)
const svg = require.context('@/assets/svg', false, /\.svg$/)
requireAll(svg)
