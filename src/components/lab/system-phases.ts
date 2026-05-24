export interface SystemPhase {
  title: string;
  description: string;
}

export const libertradeSystemPhases: SystemPhase[] = [
  {
    title: 'Capture',
    description:
      'Import trades, sync journal notes, log daily readiness and rule compliance.',
  },
  {
    title: 'Diagnose',
    description:
      'Break the week down by session, setup, instrument, timing, tags, and rule behaviour.',
  },
  {
    title: 'Synthesize',
    description:
      'Generate weekly Performance and Psychology reviews that turn raw trades into a clean operating focus.',
  },
  {
    title: 'Act',
    description:
      'Leave the week with a small number of specific changes: size rules, time windows, hold-quality targets, emotional gates, or setup filters.',
  },
];
