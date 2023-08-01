import {writable} from 'svelte/store'
/**
 * @template T
 * @typedef {import('svelte/store').Writable<T>} Writable
 */
/**
 * @typedef {import('../types/general').Notify} Notify
 */

export const notify = /** @type {Writable<Notify>} */ (writable({
    message: 'loremg ipsum dolor sit amet consectetur adipisicing elit.',
    type: 'warning',
    show: false,
}));