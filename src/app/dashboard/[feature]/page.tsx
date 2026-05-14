'use client'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from '@/components/ui'
import { AppHeader } from '@/components/layout'
import { formatDate, formatCurrency } from '@/lib/utils'
import { MOCK_CLIENTS, MOCK_CAMPAIGNS, MOCK_PROOF_PACKS } from '@/lib/data'
import { Search, Plus, Download, Eye } from 'lucide-react'

export default function FeaturePage() {
  const params = useParams()
  const slug = (params.feature as string) ?? ''
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [selected, setSelected] = useState<string | null>(null)

  const getClientName = (clientId: string) => {
    const client = MOCK_CLIENTS.find(c => c.id === clientId)
    return client ? client.name : 'Unknown Client'
  }

  // ── Feature 1: Campaign Data Intake (/dashboard/intake) ──────────────────────
  if (slug === 'intake') {
    const items = MOCK_CAMPAIGNS.filter(i =>
      (!search || i.name.toLowerCase().includes(search.toLowerCase()) || i.objective.toLowerCase().includes(search.toLowerCase())) &&
      (!statusFilter || i.status === statusFilter)
    )
    return (
      <div className="space-y-6">
        <AppHeader
          title="Campaign Data Intake"
          subtitle={`${items.length} campaigns total`}
          actions={<Button size="sm"><Plus size={14} className="mr-1" />New Campaign</Button>}
        />
        <Card>
          <CardHeader>
            <div className="flex gap-3">
              <div className="relative flex-1 max-w-xs">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search campaigns..."
                  className="w-full pl-9 pr-3 py-2 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
                />
              </div>
              <select
                value={statusFilter}
                onChange={e => setStatusFilter(e.target.value)}
                className="px-3 py-2 text-sm border border-zinc-200 rounded-lg bg-white focus:outline-none"
              >
                <option value="">All statuses</option>
                <option value="planning">Planning</option>
                <option value="running">Running</option>
                <option value="completed">Completed</option>
                <option value="paused">Paused</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="border-b border-zinc-100">
                <tr className="text-left text-zinc-500 text-xs uppercase tracking-wide">
                  <th className="px-6 py-3">Campaign Name</th>
                  <th className="px-6 py-3">Platform</th>
                  <th className="px-6 py-3">Objective</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Start Date</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {items.map(item => (
                  <tr
                    key={item.id}
                    onClick={() => setSelected(selected === item.id ? null : item.id)}
                    className={`hover:bg-zinc-50 cursor-pointer transition-colors ${selected === item.id ? 'bg-indigo-50' : ''}`}
                  >
                    <td className="px-6 py-3 font-medium text-zinc-900">{item.name}</td>
                    <td className="px-6 py-3 text-zinc-500">{item.platform}</td>
                    <td className="px-6 py-3 text-zinc-700">{item.objective}</td>
                    <td className="px-6 py-3">
                      <Badge
                        variant={
                          item.status === 'running' ? 'success' :
                          item.status === 'planning' ? 'warning' :
                          item.status === 'paused' ? 'error' :
                          'default' // For completed, archived
                        }
                      >
                        {item.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-3 text-zinc-400 text-xs">{formatDate(item.startDate)}</td>
                    <td className="px-6 py-3">
                      <button className="text-zinc-400 hover:text-zinc-700 p-1"><Eye size={14} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-3 border-t border-zinc-100 text-xs text-zinc-400">
              Showing {items.length} of {MOCK_CAMPAIGNS.length} campaigns
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // ── Feature 2: Proof Pack Dashboard (/dashboard/dashboard) ──────────────────────
  if (slug === 'dashboard') {
    const items = MOCK_PROOF_PACKS.filter(i =>
      !search || i.packName.toLowerCase().includes(search.toLowerCase()) || getClientName(i.clientId).toLowerCase().includes(search.toLowerCase())
    )
    return (
      <div className="space-y-6">
        <AppHeader
          title="Proof Pack Dashboard"
          subtitle={`${items.length} proof packs`}
          actions={<Button size="sm"><Plus size={14} className="mr-1" />New Proof Pack</Button>}
        />
        <div className="mb-4">
          <div className="relative max-w-xs">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search proof packs..."
              className="w-full pl-9 pr-3 py-2 text-sm border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(item => (
            <Card key={item.id} className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelected(item.id)}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
                    {String(item.packName).slice(0, 2).toUpperCase()}
                  </div>
                  <Badge variant={
                    item.status === 'Ready' ? 'success' :
                    item.status === 'Draft' ? 'warning' :
                    item.status === 'Archived' ? 'error' :
                    'default'
                  }>
                    {item.status}
                  </Badge>
                </div>
                <h3 className="font-semibold text-zinc-900 text-sm mb-1">{item.packName}</h3>
                <p className="text-zinc-500 text-xs mb-3">Client: {getClientName(item.clientId)}</p>
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span>{item.campaignCount} Campaigns</span>
                  <span>{formatDate(item.updatedAt)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  // ── Feature 3: Proof Pack Exports (/dashboard/exports) ──────────────────────
  if (slug === 'exports') {
    const items = MOCK_PROOF_PACKS.filter(i =>
      !search || i.packName.toLowerCase().includes(search.toLowerCase()) || getClientName(i.clientId).toLowerCase().includes(search.toLowerCase())
    )
    return (
      <div className="space-y-6">
        <AppHeader
          title="Proof Pack Exports"
          subtitle={`${items.length} proof packs available`}
          actions={
            <div className="flex gap-2">
              <Button variant="outline" size="sm"><Download size={14} className="mr-1" />Export Selected</Button>
              <Button size="sm"><Plus size={14} className="mr-1" />Generate New Pack</Button>
            </div>
          }
        />
        <Card>
          <CardHeader>
            <div className="relative max-w-xs">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search exports..."
                className="w-full pl-9 pr-3 py-2 text-sm border border-zinc-200 rounded-lg focus:outline-none" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="border-b border-zinc-100">
                <tr className="text-left text-zinc-500 text-xs uppercase tracking-wide">
                  <th className="px-6 py-3">Pack Name</th>
                  <th className="px-6 py-3">Client</th>
                  <th className="px-6 py-3">Campaigns</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Last Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-50">
                {items.map(item => (
                  <tr key={item.id} className="hover:bg-zinc-50 cursor-pointer" onClick={() => setSelected(item.id)}>
                    <td className="px-6 py-3 font-medium text-zinc-900">{item.packName}</td>
                    <td className="px-6 py-3 text-zinc-500">{getClientName(item.clientId)}</td>
                    <td className="px-6 py-3 text-zinc-700">{item.campaignCount}</td>
                    <td className="px-6 py-3">
                        <Badge
                        variant={
                            item.status === 'Exported' ? 'success' :
                            item.status === 'Ready' ? 'default' : // default for ready, as exports implies ready to be exported
                            'info'
                        }
                        >
                            {item.status}
                        </Badge>
                    </td>
                    <td className="px-6 py-3 text-zinc-400 text-xs">{formatDate(item.updatedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    )
  }

  // ── Default: feature hub ──────────────────────────────────────────────────
  return (
    <div className="space-y-6">
      <AppHeader title="Features" subtitle="Select a feature to get started" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { slug: 'intake', name: 'Campaign Data Intake', description: 'Input campaign results and client details to build proof packs.', count: MOCK_CAMPAIGNS.length },
          { slug: 'dashboard', name: 'Proof Pack Dashboard', description: 'Overview of all proof packs in progress and their status.', count: MOCK_PROOF_PACKS.length },
          { slug: 'exports', name: 'Proof Pack Exports', description: 'Generate and manage client-ready proof pack exports.', count: MOCK_PROOF_PACKS.length },
        ].map(f => (
          <a key={f.slug} href={`/dashboard/${f.slug}`}>
            <Card className="hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                  <Eye size={20} />
                </div>
                <h3 className="font-bold text-zinc-900 mb-1">{f.name}</h3>
                <p className="text-zinc-500 text-sm mb-4">{f.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">{f.count} records</span>
                  <span className="text-xs font-medium text-indigo-600">Open →</span>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
}