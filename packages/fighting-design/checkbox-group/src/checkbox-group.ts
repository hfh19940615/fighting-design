import type { ExtractPropTypes, InjectionKey, PropType } from 'vue'
import type { CheckboxGroupLabelType, CheckboxGroupSizeType } from './interface'

export const Props = {
  modelValue: {
    type: [String, Number, Array] as PropType<CheckboxGroupLabelType>,
    default: (): [] => []
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  label: {
    type: String,
    default: (): string => ''
  },
  changeEvent: {
    type: Function
  },
  border: {
    type: Boolean,
    default: (): boolean => false
  },
  size: {
    type: String,
    default: (): string => 'middle',
    validator: (val: CheckboxGroupSizeType): boolean => {
      return (['large', 'middle', 'small'] as const).includes(val)
    }
  }
} as const

export const Emits = {
  'update:modelValue': (val: CheckboxGroupLabelType): boolean => Array.isArray(val),
  change: (val: CheckboxGroupLabelType): boolean => typeof val === 'object'
} as const

export type CheckboxGroupPropsType = ExtractPropTypes<typeof Props>

export const checkboxGroupPropsKey: InjectionKey<CheckboxGroupPropsType> = Symbol('f-checkbox-group-props-key')