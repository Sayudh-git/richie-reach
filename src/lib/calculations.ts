import {
  BLENDED_ENRICHMENT_COST,
  ICP_PASS_RATE_SIGNAL_LED,
  ICP_FAIL_RATE_UNFILTERED,
  SIGNAL_REPLY_UPLIFT_MULTIPLIER,
  WEEKS_PER_MONTH,
  OPS_TIME_REDUCTION_WITH_RR,
  RR_MONTHLY_FEE,
  RICHIE_REACH_SIGNAL_FEED_MONTHLY,
} from '@/lib/constants'

export interface ModeAInputs {
  monthlyDataSpend: number
  weeklyVolume: number
  currentReplyRate: number // percentage, e.g. 3 = 3%
  avgDealValue: number
}

export interface ModeAResult {
  current: {
    recordsPerMonth: number
    repliesPerMonth: number
    meetingsPerMonth: number
    costPerMeeting: number
    monthlyDataCost: number
    enrichmentWaste: number
  }
  withRR: {
    recordsContactedPerMonth: number
    signalReplyRate: number // as percentage, e.g. 7.0
    repliesPerMonth: number
    meetingsPerMonth: number
    costPerMeeting: number
  }
  delta: {
    savingsPerMeeting: number
    rrCheaper: boolean
  }
  pipeline: {
    opportunities: number
    newClients: number
    projectedARR: number
  }
}

export interface ModeBInputs {
  clientCount: number
  dataSpendPerClient: number
  hoursPerClient: number // hours per month
  hourlyRate: number
}

export interface ModeBResult {
  current: {
    monthlyOpsCost: number
    totalDataSpend: number
    totalHoursPerMonth: number
  }
  withRR: {
    opsCostWithRR: number
    totalRRCost: number
    hoursPerClientWithRR: number
    hoursFreedPerClient: number
    totalFreedHours: number
  }
}

export function calcModeA(inputs: ModeAInputs): ModeAResult {
  const { monthlyDataSpend, weeklyVolume, currentReplyRate, avgDealValue } = inputs

  // Current setup — full unfiltered volume
  const monthlyVolume = weeklyVolume * WEEKS_PER_MONTH
  const enrichmentWaste = monthlyVolume * ICP_FAIL_RATE_UNFILTERED * BLENDED_ENRICHMENT_COST
  const replies = monthlyVolume * (currentReplyRate / 100)
  const meetings = replies * 0.18
  const totalCurrentCost = monthlyDataSpend + enrichmentWaste
  const cpmCurrent = meetings > 0 ? totalCurrentCost / meetings : 0

  // With Richie Reach — ICP-filtered contacts at signal reply rate
  const rrContacts = weeklyVolume * ICP_PASS_RATE_SIGNAL_LED * WEEKS_PER_MONTH
  const signalReplyRate = Math.min(currentReplyRate * SIGNAL_REPLY_UPLIFT_MULTIPLIER, 12)
  const rrReplies = rrContacts * (signalReplyRate / 100)
  const rrMeetings = rrReplies * 0.22
  const cpmRR = rrMeetings > 0 ? RR_MONTHLY_FEE / rrMeetings : 0

  // Pipeline (directional)
  const opportunities = rrMeetings * 0.25
  const newClients = opportunities * 0.35
  const projectedARR = newClients * avgDealValue * 12

  return {
    current: {
      recordsPerMonth: Math.round(monthlyVolume),
      repliesPerMonth: Math.round(replies),
      meetingsPerMonth: Math.round(meetings),
      costPerMeeting: Math.round(cpmCurrent),
      monthlyDataCost: monthlyDataSpend,
      enrichmentWaste: Math.round(enrichmentWaste),
    },
    withRR: {
      recordsContactedPerMonth: Math.round(rrContacts),
      signalReplyRate: Math.round(signalReplyRate * 10) / 10,
      repliesPerMonth: Math.round(rrReplies),
      meetingsPerMonth: Math.round(rrMeetings),
      costPerMeeting: Math.round(cpmRR),
    },
    delta: {
      savingsPerMeeting: Math.round(cpmCurrent - cpmRR),
      rrCheaper: cpmRR < cpmCurrent,
    },
    pipeline: {
      opportunities: Math.round(opportunities * 10) / 10,
      newClients: Math.round(newClients * 10) / 10,
      projectedARR: Math.round(projectedARR),
    },
  }
}

export function calcModeB(inputs: ModeBInputs): ModeBResult {
  const { clientCount, dataSpendPerClient, hoursPerClient, hourlyRate } = inputs

  // Current
  const monthlyOpsCost = clientCount * hoursPerClient * hourlyRate
  const totalDataSpend = clientCount * dataSpendPerClient
  const totalHoursPerMonth = clientCount * hoursPerClient

  // With Richie Reach
  const rrEnrichCostPerClient =
    RICHIE_REACH_SIGNAL_FEED_MONTHLY * ICP_PASS_RATE_SIGNAL_LED * BLENDED_ENRICHMENT_COST
  const hoursPerClientWithRR = hoursPerClient * (1 - OPS_TIME_REDUCTION_WITH_RR)
  const opsCostWithRR = clientCount * hoursPerClientWithRR * hourlyRate
  const totalRRCost = clientCount * rrEnrichCostPerClient + RR_MONTHLY_FEE
  const hoursFreedPerClient = hoursPerClient * OPS_TIME_REDUCTION_WITH_RR
  const totalFreedHours = hoursFreedPerClient * clientCount

  return {
    current: {
      monthlyOpsCost,
      totalDataSpend,
      totalHoursPerMonth,
    },
    withRR: {
      opsCostWithRR: Math.round(opsCostWithRR),
      totalRRCost: Math.round(totalRRCost),
      hoursPerClientWithRR: Math.round(hoursPerClientWithRR * 10) / 10,
      hoursFreedPerClient: Math.round(hoursFreedPerClient * 10) / 10,
      totalFreedHours: Math.round(totalFreedHours * 10) / 10,
    },
  }
}
