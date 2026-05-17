import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, Clock, Terminal } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const qaTerms = [
  { text: 'UI Testing', status: 'pass' },
  { text: 'API Validation', status: 'pass' },
  { text: 'Mobile Testing', status: 'pass' },
  { text: 'Regression', status: 'running' },
  { text: 'Smoke Tests', status: 'pass' },
  { text: 'Database Checks', status: 'pass' },
  { text: 'Automation', status: 'pass' },
  { text: 'AI-Assisted QA', status: 'pass' },
]

const mobileTerms = [
  { text: 'iOS Testing', status: 'pass' },
  { text: 'Android Testing', status: 'pass' },
  { text: 'Tablet Tests', status: 'pass' },
  { text: 'Responsive', status: 'pass' },
]

const tabletTerms = [
  { text: 'Integration', status: 'pass' },
  { text: 'E2E Tests', status: 'running' },
  { text: 'Cross-Browser', status: 'pass' },
]

function StatusIcon({ status }: { status: string }) {
  if (status === 'pass') return <CheckCircle2 size={12} className="text-test-pass" />
  if (status === 'fail') return <AlertCircle size={12} className="text-test-fail" />
  return <Clock size={12} className="text-warning animate-pulse" />
}

function TestCard({ text, status, delay }: { text: string; status: string; delay: number }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  if (!visible) return null

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-center gap-2 px-2.5 py-1.5 bg-code-bg/90 rounded text-xs font-mono text-white/90"
    >
      <StatusIcon status={status} />
      <span>{text}</span>
    </motion.div>
  )
}

export function DeviceMockups() {
  const { t } = useLanguage()

  return (
    <div className="relative w-full h-[500px]">
      {/* Laptop */}
      <div className="absolute top-0 left-0 w-[340px]">
        <div className="bg-foreground/90 rounded-t-lg p-2">
          <div className="flex gap-1.5 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-test-fail/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-warning/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-test-pass/80" />
          </div>
          <div className="bg-code-bg rounded-md p-3 h-[180px] overflow-hidden">
            <div className="flex items-center gap-2 mb-3 text-xs text-primary font-mono">
              <Terminal size={12} />
              <span>{t('devices.dashboard')}</span>
            </div>
            <div className="space-y-1.5">
              {qaTerms.map((term, index) => (
                <TestCard key={term.text} {...term} delay={index * 200} />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-foreground/80 h-3 rounded-b-sm mx-4" />
        <div className="bg-foreground/60 h-1 rounded-b-lg mx-12" />
      </div>

      {/* Tablet */}
      <div className="absolute top-8 right-0 w-[180px]">
        <div className="bg-foreground/90 rounded-xl p-2">
          <div className="bg-code-bg rounded-lg p-2.5 h-[140px] overflow-hidden">
            <div className="text-[10px] text-primary/80 font-mono mb-2">{t('devices.ipad')}</div>
            <div className="space-y-1">
              {tabletTerms.map((term, index) => (
                <TestCard key={term.text} {...term} delay={1600 + index * 200} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="absolute bottom-0 right-12 w-[120px]">
        <div className="bg-foreground/90 rounded-2xl p-1.5">
          <div className="bg-code-bg rounded-xl p-2 h-[180px] overflow-hidden">
            <div className="w-12 h-1 bg-foreground/30 rounded-full mx-auto mb-2" />
            <div className="text-[9px] text-primary/80 font-mono mb-2">{t('devices.mobile')}</div>
            <div className="space-y-1">
              {mobileTerms.map((term, index) => (
                <TestCard key={term.text} {...term} delay={2200 + index * 200} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Code snippet decoration */}
      <div className="absolute bottom-24 left-4 text-[10px] font-mono text-muted-foreground/50 leading-relaxed">
        <div>{'describe("QA Tests", () => {'}</div>
        <div className="pl-2">{'it("validates user flow", async () => {'}</div>
        <div className="pl-4 text-test-pass">{'// ✓ All assertions passed'}</div>
        <div className="pl-2">{'})'}</div>
        <div>{'})'}</div>
      </div>
    </div>
  )
}
