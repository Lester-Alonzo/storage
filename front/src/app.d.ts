// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			id: string | null;
			role: string | null;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
