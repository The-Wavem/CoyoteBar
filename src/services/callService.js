const CHANNEL_NAME = 'coyote_calls_channel';
const STORAGE_KEY = 'coyote_active_calls';
const TABLE_KEY = 'coyote_table_number';

// Inicializa canal de broadcast se suportado no navegador
const getChannel = () => {
  if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
    return new BroadcastChannel(CHANNEL_NAME);
  }
  return null;
};

let channel = getChannel();

export const getSavedTableNumber = () => {
  if (typeof localStorage === 'undefined') return '';
  return localStorage.getItem(TABLE_KEY) || '';
};

export const saveTableNumber = (tableNum) => {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(TABLE_KEY, tableNum);
};

export const getActiveCalls = () => {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const createCall = ({ table, reason, type }) => {
  const newCall = {
    id: `call-${Date.now()}`,
    table,
    reason,
    type,
    createdAt: Date.now(),
    status: 'pendente',
  };

  const current = getActiveCalls();
  const updated = [newCall, ...current];
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  if (!channel) {
    channel = getChannel();
  }
  if (channel) {
    channel.postMessage({ type: 'NEW_CALL', call: newCall });
  }
  return newCall;
};

export const updateCallStatus = (id, newStatus) => {
  const current = getActiveCalls();
  let updated;
  if (newStatus === 'resolvido') {
    updated = current.filter((c) => c.id !== id);
  } else {
    updated = current.map((c) => (c.id === id ? { ...c, status: newStatus } : c));
  }

  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  if (!channel) {
    channel = getChannel();
  }
  if (channel) {
    channel.postMessage({ type: 'STATUS_CHANGE', id, status: newStatus, calls: updated });
  }
  return updated;
};

export const subscribeCalls = (onUpdate) => {
  if (typeof window === 'undefined' || !('BroadcastChannel' in window)) {
    return () => {};
  }

  const activeChannel = new BroadcastChannel(CHANNEL_NAME);

  const handleMessage = (event) => {
    if (event.data?.type === 'NEW_CALL' || event.data?.type === 'STATUS_CHANGE') {
      onUpdate(getActiveCalls(), event.data);
    }
  };

  const handleStorage = (event) => {
    if (event.key === STORAGE_KEY) {
      onUpdate(getActiveCalls(), { type: 'STORAGE_UPDATE' });
    }
  };

  activeChannel.addEventListener('message', handleMessage);
  window.addEventListener('storage', handleStorage);

  return () => {
    activeChannel.removeEventListener('message', handleMessage);
    window.removeEventListener('storage', handleStorage);
    activeChannel.close();
  };
};
