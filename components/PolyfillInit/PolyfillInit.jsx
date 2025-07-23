
'use client';
import { useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

export default function PolyfillInit() {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return null;
}
