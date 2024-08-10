export const getStateColor = (stateKey: string) => {
  switch (stateKey) {
    case 'inWork':
    case 'registered':
      return '#eab308';
    case 'agreement':
    case 'confirmation':
      return '#3b82f6';
    case 'closed':
      return '#6b7280';
    default:
      return '#e2e8f0';
  }
};
