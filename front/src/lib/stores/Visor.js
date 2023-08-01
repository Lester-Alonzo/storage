import {writable} from 'svelte/store'
/**
 * @template T
 * @typedef {import('svelte/store').Writable<T>} Writable
 */
/**
 * @typedef {import('../types/general').ContentVisor} ContentVisor
 */

/**
 * @type {Writable<ContentVisor>}
 */
export const Visor = writable({
    Name: '',
    Path: '',
    Type: 'img',
    show: false,
    Size: 0,
    url: '',

})
/**
 * @type {Writable<any[]>}
 */
export const files = writable([])
/**
 * @type {Writable<string>}
 */
export const currentPath = writable('')
/**
 * @type {Writable<string>}
 */
export const currentDName = writable('')