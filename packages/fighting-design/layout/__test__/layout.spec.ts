import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FLayout } from '../index'

describe('f-layout', () => {
  test('class', () => {
    const wrapper = mount(FLayout)
    expect(wrapper.classes()).toContain('f-layout')
  })
})