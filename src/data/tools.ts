import { Tool } from '../types';

export const TOOLS: Tool[] = [
  { id: 'pest-risk', title: 'Pest Risk Forecast', description: 'Forecast pest emergence and pressure based on degree-days and weather patterns.', category: 'Risk', primaryOutcome: 'Identify high-risk periods', viewPath: 'Risk' },
  { id: 'disease-risk', title: 'Disease Risk Forecast', description: 'Track temperature and humidity combinations to predict disease outbreaks.', category: 'Disease', primaryOutcome: 'Anticipate infection windows', viewPath: 'Disease' },
  { id: 'scouting-log', title: 'Scouting Log', description: 'Record field observations, pest counts, and crop damage levels.', category: 'Scouting', primaryOutcome: 'Track field-level pressure', viewPath: 'Scouting' },
  { id: 'trap-tracker', title: 'Trap Count Tracker', description: 'Monitor daily or weekly trap catches to identify population trends.', category: 'Traps', primaryOutcome: 'Identify pest spikes', viewPath: 'Traps' },
  { id: 'spray-decision', title: 'Spray Decision Checker', description: 'Evaluate current pressure against thresholds to justify intervention.', category: 'Spray', primaryOutcome: 'Optimize spray timing', viewPath: 'Spray' },
  { id: 'threshold-alerts', title: 'Threshold Alert Panel', description: 'Get notified when trap counts or scouting numbers exceed action thresholds.', category: 'Alerts', primaryOutcome: 'Prevent critical damage', viewPath: 'Alerts' },
  { id: 'interactive-calculators', title: 'Interactive Calculators', description: 'Suite of 5 distinct calculators to evaluate ROI, spray timing, and degree days.', category: 'Calculators', primaryOutcome: 'Evaluate ROI & Timing', viewPath: 'Calculators' },
];
