import { useLocation } from 'react-router-dom';

export default function useCurrentLang() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  return queryParams.get('lang') || 'mn';
}
