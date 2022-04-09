import { writable, type Writable } from 'svelte/store';
import type { DbContextManager } from './db';

export const db: Writable<DbContextManager> = writable();
