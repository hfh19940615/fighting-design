import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { FLink } from '../index'
import { FIGHTING_TYPE, FIGHTING_TARGET } from '../../_tokens'

describe('FLink', () => {
  test('class', () => {
    const wrapper = mount(FLink)
    expect(wrapper.classes()).toContain('f-link')
  })

  test('type', () => {
    FIGHTING_TYPE.forEach(item => {
      const wrapper = mount(FLink, {
        props: { type: item }
      })
      expect(wrapper.classes()).toContain(`f-link__${item}`)
    })
  })

  test('href', () => {
    const wrapper = mount(FLink, {
      props: { href: 'https://tianyuhao.cn' }
    })
    expect(wrapper.attributes('href')).toContain('https://tianyuhao.cn')
  })

  test('size', () => {
    const wrapper = mount(FLink, {
      props: { size: '20px' }
    })
    expect(wrapper.attributes('style')).toContain('--f-link-size: 20px')
  })

  test('size', () => {
    const wrapper = mount(FLink, {
      props: { size: 16 }
    })
    expect(wrapper.attributes('style')).toContain('--f-link-size: 16px')
  })

  test('state', () => {
    const state = ['line', 'bag'] as const
    state.forEach(item => {
      const wrapper = mount(FLink, {
        props: { state: item }
      })
      expect(wrapper.classes()).toContain(`f-link__${item}`)
    })
  })

  test('disabled', () => {
    const wrapper = mount(FLink, {
      props: { disabled: true }
    })
    expect(wrapper.classes()).toContain('f-link__disabled')
  })

  test('target', () => {
    FIGHTING_TARGET.forEach(item => {
      const wrapper = mount(FLink, {
        props: { target: item }
      })
      expect(wrapper.attributes('target')).toContain(item)
    })
  })

  test('color', () => {
    const wrapper = mount(FLink, {
      props: { color: 'red' }
    })
    expect(wrapper.attributes('style')).toContain('red')
  })

  test('noCopy', () => {
    const wrapper = mount(FLink, {
      props: { noCopy: true }
    })
    expect(wrapper.classes()).toContain('f-link__no-copy')
  })
})
