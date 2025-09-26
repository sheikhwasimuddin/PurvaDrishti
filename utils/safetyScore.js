// utils/safetyScore.js
export function computeSafetyScore(metrics) {
  // metrics = {risk, alertsHandledPct, preventiveActions}
  const riskComp = Math.max(0, 100 - metrics.risk); // lower risk gives higher score
  const actionsComp = Math.min(100, metrics.alertsHandledPct * 100);
  const preventiveComp = Math.min(100, metrics.preventiveActions * 10);
  return Math.round((0.5*riskComp + 0.3*actionsComp + 0.2*preventiveComp));
}
