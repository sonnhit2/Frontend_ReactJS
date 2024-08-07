import EventEmitter from "events";

const _emmiter = new EventEmitter();
_emmiter.setMaxListeners(0); // unlimit listener

export const emitter = _emmiter;