import { NextRequest } from 'next/server'
import {
  MOCK_CLIENTS,
  MOCK_CAMPAIGNS,
  MOCK_RESULTS,
  MOCK_PROOF_PACKS,
  STATS,
} from '@/lib/data'
import {
  Client,
  Campaign,
  Result,
  ProofPack,
} from '@/lib/types'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function GET(): Promise<Response> {
  const data = {
    clients: MOCK_CLIENTS,
    campaigns: MOCK_CAMPAIGNS,
    results: MOCK_RESULTS,
    proofPacks: MOCK_PROOF_PACKS,
    stats: STATS,
    total: {
      clients: MOCK_CLIENTS.length,
      campaigns: MOCK_CAMPAIGNS.length,
      results: MOCK_RESULTS.length,
      proofPacks: MOCK_PROOF_PACKS.length,
    },
  }

  return Response.json({ ok: true, data }, { headers: corsHeaders })
}

export async function POST(req: NextRequest): Promise<Response> {
  const body = await req.json()
  return Response.json(
    { ok: true, message: 'Demo mode — data not persisted', received: body },
    { headers: corsHeaders },
  )
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, { status: 200, headers: corsHeaders })
}