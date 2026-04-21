import React from 'react';
import { useI18n } from '../i18n/I18nContext';

interface StatusBadgeProps {
  status: 'available' | 'unavailable' | 'unknown';
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const { t } = useI18n();
  
  const getStatusClass = () => {
    switch (status) {
      case 'available':
        return 'status-available';
      case 'unavailable':
        return 'status-unavailable';
      case 'unknown':
        return 'status-unknown';
      default:
        return 'status-unknown';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'available':
        return t('status.available');
      case 'unavailable':
        return t('status.unavailable');
      case 'unknown':
        return t('status.unknown');
      default:
        return t('status.unknown');
    }
  };

  return (
    <span className={`status-badge ${getStatusClass()}`}>
      {getStatusText()}
    </span>
  );
};

export default StatusBadge;