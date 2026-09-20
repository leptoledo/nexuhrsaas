import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
  trendText?: string;
  trendPositive?: boolean;
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBgColor = 'bg-slate-100',
  iconColor = 'text-slate-700',
  trendText,
  trendPositive = true,
}: MetricCardProps) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>{title}</span>
        <div className={`w-8 h-8 rounded-lg ${iconBgColor} ${iconColor} flex items-center justify-center`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div className="mt-2 text-2xl font-extrabold font-heading text-slate-900">{value}</div>
      {(subtitle || trendText) && (
        <div className="mt-1 flex items-center gap-1 text-[11px]">
          {trendText && (
            <span className={`font-semibold ${trendPositive ? 'text-emerald-600' : 'text-amber-600'}`}>
              {trendText}
            </span>
          )}
          {subtitle && <span className="text-slate-500">{subtitle}</span>}
        </div>
      )}
    </div>
  );
}
