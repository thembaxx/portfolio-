"use client";

import { useEffect, useState } from "react";
import { Activity, BarChart3, ShieldCheck, Zap } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { month: "Jan", score: 96, lighthouse: 98, webVitals: 99 },
  { month: "Feb", score: 98, lighthouse: 99, webVitals: 98 },
  { month: "Mar", score: 97, lighthouse: 98, webVitals: 100 },
  { month: "Apr", score: 99, lighthouse: 100, webVitals: 99 },
  { month: "May", score: 100, lighthouse: 100, webVitals: 100 },
  { month: "Jun", score: 98, lighthouse: 99, webVitals: 99 },
];

const vitalsBreakdown = [
  { metric: "LCP", value: "0.8s", benchmark: "< 2.5s", status: "Optimal" },
  { metric: "FID", value: "12ms", benchmark: "< 100ms", status: "Optimal" },
  { metric: "CLS", value: "0.001", benchmark: "< 0.1", status: "Optimal" },
  { metric: "INP", value: "35ms", benchmark: "< 200ms", status: "Optimal" },
];

export function AnalyticsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="analytics" className="py-20 border-b border-border transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-sky-400">
            <BarChart3 className="w-4 h-4" />
            <span>Engineering Analytics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance">
            Performance &amp; Core Web Vitals
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground text-pretty">
            Measured quality benchmarks demonstrating production speed, accessibility, SEO, and structural performance across desktop and mobile devices.
          </p>
        </div>

        {/* Metrics Overview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {vitalsBreakdown.map((item) => (
            <div
              key={item.metric}
              className="p-4 rounded-xl bg-card border border-border shadow-2xs space-y-2 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-muted-foreground">
                  {item.metric}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3" />
                  {item.status}
                </span>
              </div>
              <div className="text-2xl font-bold font-mono tracking-tight text-foreground tabular-nums">
                {item.value}
              </div>
              <p className="text-[11px] text-muted-foreground tabular-nums">Target: {item.benchmark}</p>
            </div>
          ))}
        </div>

        {/* Chart Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lighthouse Score Area Chart */}
          <div className="p-6 rounded-2xl bg-card border border-border space-y-6 shadow-2xs transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-semibold flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  Lighthouse Audit Score Trend
                </h3>
                <p className="text-xs text-muted-foreground">
                  Average automated audit rating over 6 months
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-sky-400 tabular-nums">
                100 / 100
              </span>
            </div>

            <div className="h-64 w-full">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis dataKey="month" stroke="currentColor" className="text-xs text-muted-foreground" />
                    <YAxis domain={[80, 100]} stroke="currentColor" className="text-xs text-muted-foreground tabular-nums" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                        borderRadius: "8px",
                        color: "var(--foreground)",
                        fontSize: "12px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="lighthouse"
                      stroke="#2563eb"
                      strokeWidth={2}
                      fillOpacity={0.15}
                      fill="#2563eb"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full w-full flex items-center justify-center text-xs text-muted-foreground">
                  Loading analytics chart...
                </div>
              )}
            </div>
          </div>

          {/* Web Vitals Efficiency Bar Chart */}
          <div className="p-6 rounded-2xl bg-card border border-border space-y-6 shadow-2xs transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-base font-semibold flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  Page Load &amp; Interactive Efficiency
                </h3>
                <p className="text-xs text-muted-foreground">
                  Speed Index and Web Vitals ratings
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 tabular-nums">
                99.4%
              </span>
            </div>

            <div className="h-64 w-full">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis dataKey="month" stroke="currentColor" className="text-xs text-muted-foreground" />
                    <YAxis domain={[80, 100]} stroke="currentColor" className="text-xs text-muted-foreground tabular-nums" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "var(--card)",
                        borderColor: "var(--border)",
                        borderRadius: "8px",
                        color: "var(--foreground)",
                        fontSize: "12px",
                      }}
                    />
                    <Bar dataKey="webVitals" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full w-full flex items-center justify-center text-xs text-muted-foreground">
                  Loading performance metrics...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
