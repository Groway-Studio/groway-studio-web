import { PointCloudCanvas } from '@/components/hero/PointCloudCanvas'

/**
 * LucIA's "thinking" indicator: the hero point cloud shrunk to a badge.
 * Mounted only while a turn is pending (submit -> first text_delta) so the
 * second WebGL context lives just for those few seconds.
 */
export function ThinkingOrb({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full">
        <PointCloudCanvas className="h-full w-full" />
      </div>
      <span className="text-sm text-fg-muted">{label}</span>
    </div>
  )
}
