import makeClassnames from 'classnames'
import { defineComponent, ref, unref, watch, computed } from 'vue'
import { useConfig } from 'd2-projects/d2-config/index.js'
import { makeComponentName, makeComponentClassName } from 'd2-projects/d2-utils/special/d2-components/name.js'

const name = 'svg'

const componentName = makeComponentName(name)
const classname = makeComponentClassName(name)

export default defineComponent({
  name: componentName,
  props: {
    symbolId: { type: String, default: '' },
    dir: { type: String, default: '' },
    name: { type: String, default: '' }
  },
  setup (props) {
    const { svgSymbolId, svgDir } = useConfig()

    const symbolId = computed(() => props.symbolId || svgSymbolId)

    const dir = computed(() => props.dir || svgDir)

    const href = computed(() => {
      let result = unref(symbolId)
        .replace(/\[dir\]/g, unref(dir))
        .replace(/\[name\]/g, props.name)
      if (!unref(dir)) {
        result = result.replace('--', '-')
      }
      return '#' + result
    })

    const classnames = computed(() => makeClassnames(classname, {}))

    return {
      classnames,
      href
    }
  },
  render () {
    const {
      classnames,
      href
    } = this
    return (
      <svg class={ classnames } aria-hidden="true">
        <use xlink:href={ href }/>
      </svg>
    )
  }
})
