export function dialStatusIsComplete(status: string) {
    switch (status) {
      case 'completed':
        return true;
      case 'canceled':
        return true;
      case 'no-answer':
        return true;
      case 'failed':
        return true;
      case 'busy':
        return true;
      default:
        return false;
    }
  }