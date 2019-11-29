const formatUnixDate = (uDate) =>
  new Date(uDate)
    .toISOString()
    .replace('T', ' ')
    .replace('Z', '')
    .split('.')[0];

export { formatUnixDate };
