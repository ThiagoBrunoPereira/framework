export function hSlot(slots) {
  const slot = slots.default;

  return slot !== undefined ? slot() : '';
}

export function hMergeSlot(slots, source) {
  const slot = slots.default;

  return slot !== undefined ? source.concat(slot()) : source;
}