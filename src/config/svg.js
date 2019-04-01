import Vue from 'vue'
import SvgIcon from '@/components/Svg'
import { requireFile } from '@/utils'

Vue.component('svg-icon', SvgIcon)
const svg = require.context('@/assets/svg', false, /\.svg$/)
requireFile(svg)
