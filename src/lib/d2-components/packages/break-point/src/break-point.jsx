import { defineComponent, computed, unref, watch } from 'vue'
import { keys, mapValues } from 'lodash-es'
import { provideGenerator } from '../../../utils/provide.js'
import { makeComponentName } from '../../../utils/make.js'
import { useBreakPoint } from '../../../use/break-point.js'
import { useConfigForD2Components } from 'd2-components/use/config.js'

export const name = makeComponentName('break-point')

const provide = provideGenerator(name)

export default defineComponent({
  name,
  props: {
    // example
    //   {
    //     foo: ['foo min', { sm: 'foo sm', md: 'foo md' }],
    //     bar: ['bar min', { sm: 'bar sm', lg: 'bar lg' }]
    //   }
    // return
    //   on min status:
    //     { foo: 'foo min', bar: 'bar min' }
    //   on md status:
    //     { foo: 'foo md', bar: 'bar sm' }
    //   on xl status:
    //     { foo: 'foo md', bar: 'bar lg' }
    data: { type: Object, default: () => ({}) }
  },
  setup (props, { slots }) {
    const $D2COM = useConfigForD2Components()

    const config = $D2COM.breakPoints

    const names = keys(config)

    const status = useBreakPoint()

    provide('name', computed(() => status.breakPoint))

    const data = computed(() => ({
      breakPoint: unref(status.breakPoint),
      min: unref(status.min),
      ...mapValues(config, (v, k) => unref(status[k])),
      data: mapValues(props.data, (v, k) => unref(status.responsive(...props.data[k])))
    }))
    
    return () => {
      return [
        slots.default?.(unref(data)),
        slots.min?.(unref(data)),
        ...names.map(e => slots?.[e]?.(unref(data)))
      ]
    }
  }
})