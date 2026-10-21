const KEY='gestion-agence-offline-queue';
export const newId=()=>globalThis.crypto?.randomUUID?.()||`${Date.now()}-${Math.random()}`;
export function readQueue(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch{return []}}
export function enqueue(op){localStorage.setItem(KEY,JSON.stringify([...readQueue(),op]))}
export function clearQueue(){localStorage.removeItem(KEY)}
