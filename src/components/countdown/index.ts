import { h, defineComponent, computed, ref, watch, reactive, onMounted, onUnmounted } from "vue"

import classNames from 'classnames'

import { View } from '@/utils/components'
import { AtCountDownProps, AtCountdownState } from 'types/countdown'

import AtComponentWithDefaultProps from '../mixins'
import AtCountdownItem from "./item"

import './index.scss'

const toSeconds = (
    day: number,
    hours: number,
    minutes: number,
    seconds: number
): number => day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds

const AtCountdown = defineComponent({
    mixins: [AtComponentWithDefaultProps],

    props: {
        // 参数
        isCard: Boolean,
        isShowDay: Boolean,
        isShowHour: { type: Boolean, default: true },
        format: {
            type: Object as () => AtCountDownProps['format'],
            default: () => ({
                day: '天',
                hours: '时',
                minutes: '分',
                seconds: '秒'
            }),
        },
        day: {
            type: Number as () => AtCountDownProps['day'],
            default: 0,
        },
        hours: {
            type: Number as () => AtCountDownProps['hours'],
            default: 0,
        },
        minutes: {
            type: Number as () => AtCountDownProps['minutes'],
            default: 0,
        },
        seconds: {
            type: Number as () => AtCountDownProps['seconds'],
            default: 0,
        },
        // 事件
        onTimeUp: Function as unknown as () => AtCountDownProps['onTimeUp']
    },

    onShow() {
        this.setTimer()
    },

    onHide(){
        this.clearTimer()
    },

    setup(props: AtCountDownProps) {
        const secondsRef = ref<number>(toSeconds(
            props.day!,
            props.hours!,
            props.minutes!,
            props.seconds!
        ))

        const timer = ref<NodeJS.Timeout | number | null>(null)

        const state = reactive<AtCountdownState>(calculateTime())

        watch(() => [
            props.day,
            props.hours,
            props.minutes,
            props.seconds
        ], ([
            day,
            hours,
            minutes,
            seconds
        ]) => {
            secondsRef.value = toSeconds(day!, hours!, minutes!, seconds!)
            clearTimer()
            setTimer()
        })

        function setTimer() {
            if (!timer.value) countdown()
        }

        function clearTimer() {
            if (timer.value) {
                clearTimeout(timer.value as number)
            }
        }

        function calculateTime(): AtCountdownState {
            let [_day, _hours, _minutes, _seconds] = [0, 0, 0, 0]

            if (secondsRef.value > 0) {
                _day = props.isShowDay
                    ? Math.floor(secondsRef.value / (60 * 60 * 24))
                    : 0

                _hours = Math.floor(secondsRef.value / (60 * 60)) - _day * 24
                _minutes = Math.floor(secondsRef.value / 60) - _day * 24 * 60 - _hours * 60
                _seconds =
                    Math.floor(secondsRef.value) -
                    _day * 24 * 60 * 60 -
                    _hours * 60 * 60 -
                    _minutes * 60
            }

            return {
                _day,
                _hours,
                _minutes,
                _seconds
            }
        }

        function countdown() {
            Object.assign(state, calculateTime())
            secondsRef.value--

            if (secondsRef.value < 0) {
                clearTimer()
                props.onTimeUp && props.onTimeUp()
                return
            }

            timer.value = setTimeout(() => {
                countdown()
            }, 1000)
        }

        onMounted(() => {
            setTimer()
        })

        onUnmounted(() => {
            clearTimer()
        })

        return () => {
            const rootClass = computed(() => classNames(
                {
                    'at-countdown': true,
                    'at-countdown--card': props.isCard
                },
                props.className
            ))

            return (
                h(View, {
                    class: rootClass.value,
                    style: props.customStyle
                }, [
                    props.isShowDay && (
                        h(AtCountdownItem, {
                            num: state._day,
                            separator: props.format!.day
                        })
                    ),
                    props.isShowHour && (
                        h(AtCountdownItem, {
                            num: state._hours,
                            separator: props.format!.hours
                        })
                    ),
                    h(AtCountdownItem, {
                        num: state._minutes,
                        separator: props.format!.minutes
                    }),
                    h(AtCountdownItem, {
                        num: state._seconds,
                        separator: props.format!.seconds
                    })
                ])
            )
        }
    },
})

export default AtCountdown