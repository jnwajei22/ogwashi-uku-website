"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { chapters } from '@/data/mockData';

export type DemoRole = 
  | 'NationalAdmin'
  | 'NationalPresident'
  | 'NationalSecretary'
  | 'NationalTreasurer'
  | 'ChapterAdmin'
  | 'ChapterPresident'
  | 'ChapterSecretary'
  | 'ChapterTreasurer'
  | 'Member';

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  role: DemoRole;
  chapterId: string;
  membershipStatus: 'Active' | 'Expired';
}

interface DemoContextType {
  isDemoMode: boolean;
  demoUser: DemoUser | null;
  enterDemoMode: () => void;
  exitDemoMode: () => void;
  setDemoRole: (role: DemoRole) => void;
  isNationalRole: (role?: DemoRole) => boolean;
  canAccessChapter: (chapterId: string) => boolean;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

const DEMO_MODE_KEY = 'ogwashi_demo_mode';
const DEMO_USER_KEY = 'ogwashi_demo_user';

const defaultDemoUser: DemoUser = {
  id: 'demo-user-1',
  name: 'Demo User',
  email: 'demo@ogwashiukuusa.org',
  role: 'NationalAdmin',
  chapterId: chapters[0]?.id || 'houston',
  membershipStatus: 'Active',
};

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [demoUser, setDemoUser] = useState<DemoUser | null>(null);

  useEffect(() => {
    const storedMode = localStorage.getItem(DEMO_MODE_KEY);
    const storedUser = localStorage.getItem(DEMO_USER_KEY);
    
    if (storedMode === 'true' && storedUser) {
      setIsDemoMode(true);
      setDemoUser(JSON.parse(storedUser));
    }
  }, []);

  const enterDemoMode = () => {
    localStorage.setItem(DEMO_MODE_KEY, 'true');
    localStorage.setItem(DEMO_USER_KEY, JSON.stringify(defaultDemoUser));
    setIsDemoMode(true);
    setDemoUser(defaultDemoUser);
  };

  const exitDemoMode = () => {
    localStorage.removeItem(DEMO_MODE_KEY);
    localStorage.removeItem(DEMO_USER_KEY);
    setIsDemoMode(false);
    setDemoUser(null);
  };

  const setDemoRole = (role: DemoRole) => {
    if (demoUser) {
      const updatedUser = { ...demoUser, role };
      localStorage.setItem(DEMO_USER_KEY, JSON.stringify(updatedUser));
      setDemoUser(updatedUser);
    }
  };

  const isNationalRole = (role?: DemoRole) => {
    const checkRole = role || demoUser?.role;
    return ['NationalAdmin', 'NationalPresident', 'NationalSecretary', 'NationalTreasurer'].includes(checkRole || '');
  };

  const canAccessChapter = (chapterId: string) => {
    if (!demoUser) return false;
    if (isNationalRole()) return true;
    return demoUser.chapterId === chapterId;
  };

  return (
    <DemoContext.Provider value={{
      isDemoMode,
      demoUser,
      enterDemoMode,
      exitDemoMode,
      setDemoRole,
      isNationalRole,
      canAccessChapter,
    }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (context === undefined) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
}
