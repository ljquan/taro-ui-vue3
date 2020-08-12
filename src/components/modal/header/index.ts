import { defineComponent, computed, h } from 'vue'
import classNames from 'classnames'
import { View } from '@/utils/components'
import { AtModalHeaderProps } from 'types/modal'
import AtComponentWithDefaultProps from '@/components/mixins'

const AtModalHeader = defineComponent({
    mixins: [ AtComponentWithDefaultProps ],

    setup(props: AtModalHeaderProps, { slots }) {
        return () => {
            const rootClass = computed(() => classNames(
                'at-modal__header',
                props.className
            ))

            return h(View, {
                class: rootClass.value
            }, slots.default && slots.default())
        }
    }
})

export default AtModalHeader
