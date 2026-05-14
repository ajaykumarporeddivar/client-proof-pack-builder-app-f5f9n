export interface DemoUser {
  id: string
  name: string
  email: string
  role: string
  plan: string
  avatar: string
  joinedAt: string
}

export interface Client {
  id: string
  name: string
  email: string
  status: 'active' | 'inactive' | 'on_hold'
  createdAt: string
  updatedAt: string
}

export interface Campaign {
  id: string
  clientId: string // Foreign key to Client
  name: string
  platform: 'Facebook Ads' | 'Google Ads' | 'TikTok Ads' | 'LinkedIn Ads' | 'SEO' | 'Email Marketing' | 'Other'
  objective: string // e.g., 'Leads', 'Sales', 'Brand Awareness'
  startDate: string // ISO Date string
  endDate: string // ISO Date string
  status: 'planning' | 'running' | 'completed' | 'paused' | 'archived'
  createdAt: string
  updatedAt: string
}

export interface Result {
  id: string
  campaignId: string // Foreign key to Campaign
  metricType: 'Clicks' | 'Impressions' | 'Conversions' | 'Leads' | 'Sales' | 'Cost' | 'ROI' | 'Engagement' | 'Reach' | 'Video Views'
  value: number
  unit: '$' | '%' | '#' | 'days' | 'hours' | 'seconds' | 'ratio' | 'count' // Completed unit types
  date: string // ISO Date string of when the result was recorded
}

export interface ProofPack {
  id: string
  clientId: string
  campaignIds: string[] // Campaigns included in this pack
  name: string
  description: string
  status: 'draft' | 'ready_for_review' | 'sent_to_client' | 'archived'
  createdAt: string
  updatedAt: string
  generatedByUserId: string
}