const formatUnixDate = uDate =>
  new Date(uDate)
    .toISOString()
    .replace('T', ' ')
    .replace('Z', '')
    .split('.')[0];

const isObjectEmpty = (obj = {}) =>
  typeof obj === 'object' && Boolean(Object.keys(obj).length);

export { formatUnixDate, isObjectEmpty };
