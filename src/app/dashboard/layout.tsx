'use client';

import { AppSidebar } from '@/components/layout';
import { LayoutDashboard, FileText, Download } from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: <LayoutDashboard size={16} />, label: 'Dashboard', href: '/dashboard/dashboard' },
  { icon: <FileText size={16} />, label: 'Data Intake', href: '/dashboard/intake' },
  { icon: <Download size={16} />, label: 'Exports', href: '/dashboard/exports' },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <AppSidebar items={navItems} projectName="Client Proof Pack Builder" />
      <div className="flex-1 ml-64 flex flex-col min-h-full">
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}