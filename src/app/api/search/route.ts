import { NextRequest } from 'next/server'
import {
  MOCK_CLIENTS,
  MOCK_CAMPAIGNS,
  MOCK_PROOF_PACKS,
} from '@/lib/data'
import {
  Client,
  Campaign,
  ProofPack,
} from '@/lib/types'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export async function GET(request: NextRequest): Promise<Response> {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q') || ''
  const type = searchParams.get('type') // Optional: 'client', 'campaign', 'proofPack'

  const lowerCaseQuery = query.toLowerCase()
  let results: Array<Client | Campaign | ProofPack> = []

  if (!query) {
    // If query is empty, return first 5 items, e.g., clients
    results = MOCK_CLIENTS.slice(0, 5)
  } else {
    if (!type || type === 'client') {
      const clientMatches = MOCK_CLIENTS.filter(
        (c) =>
          c.name.toLowerCase().includes(lowerCaseQuery) ||
          c.email.toLowerCase().includes(lowerCaseQuery),
      )
      results = results.concat(clientMatches)
    }

    if (!type || type === 'campaign') {
      const campaignMatches = MOCK_CAMPAIGNS.filter(
        (cp) =>
          cp.name.toLowerCase().includes(lowerCaseQuery) ||
          cp.objective.toLowerCase().includes(lowerCaseQuery) ||
          cp.platform.toLowerCase().includes(lowerCaseQuery),
      )
      results = results.concat(campaignMatches)
    }

    if (!type || type === 'proofPack') {
      const proofPackMatches = MOCK_PROOF_PACKS.filter((pp) =>
        pp.packName.toLowerCase().includes(lowerCaseQuery),
      )
      results = results.concat(proofPackMatches)
    }
  }

  // Remove duplicates by ID and limit to 20 results
  const uniqueResults = Array.from(new Set(results.map((r) => r.id)))
    .map((id) => results.find((r) => r.id === id))
    .filter((item): item is Client | Campaign | ProofPack => item !== undefined)
    .slice(0, 20)

  return Response.json(
    {
      ok: true,
      data: {
        results: uniqueResults,
        total: uniqueResults.length,
        query: query,
      },
    },
    { headers: corsHeaders },
  )
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, { status: 200, headers: corsHeaders })
}