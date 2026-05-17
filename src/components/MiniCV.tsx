import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import { Download, Mail, Linkedin } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function MiniCV() {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const { t, cvPath } = useLanguage()

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {t('minicv.label')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            {t('minicv.title')}
          </h2>

          {/* CV Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-2xl shadow-foreground/10 border border-border overflow-hidden">
              {/* CV Document */}
              <div className="p-8 sm:p-10 text-left">
                {/* Header */}
                <div className="border-b border-border pb-4 mb-4">
                  <h3 className="text-2xl font-bold text-foreground">Suleidis Leyva</h3>
                  <p className="text-sm text-primary font-medium mt-1">
                    {t('hero.subtitle')}
                  </p>
                </div>

                {/* Contact */}
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-6">
                  <a
                    href="mailto:suleidisdanai@gmail.com"
                    className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                  >
                    <Mail size={12} />
                    suleidisdanai@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suleidis-leyva-ramirez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-foreground transition-colors"
                  >
                    <Linkedin size={12} />
                    linkedin.com/in/suleidis-leyva-ramirez
                  </a>
                </div>

                {/* Summary */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    {t('minicv.summary')}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t('minicv.summaryText')}
                  </p>
                </div>

                {/* Experience */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                    {t('minicv.experience')}
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="font-medium text-sm text-foreground">DualBoot Partners</p>
                        <span className="text-xs text-muted-foreground">Jun 2025 – Present</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{t('experience.dualboot.role')} · Remote – Uruguay</p>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="font-medium text-sm text-foreground">ANF AC – Autoridad de Certificacion</p>
                        <span className="text-xs text-muted-foreground">Nov 2023 – Jun 2025</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{t('experience.anf.role')} · Remote – Spain</p>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                    {t('minicv.coreSkills')}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Functional Testing, Manual Testing, QA Automation, API Testing, Database
                    Validation, Regression, Smoke, Integration, Exploratory Testing, Risk-Based
                    Testing, Bug Reporting, Playwright, TypeScript, Cursor, MCP Tools,
                    AI-Assisted QA, Azure DevOps, Jira, BrowserStack, Postman, Swagger, Azure
                    Data Studio, DevTools, Lighthouse, WAVE.
                  </p>
                </div>
              </div>
            </div>

            {/* Download button */}
            <motion.a
              href={cvPath}
              download
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={18} />
              {t('minicv.downloadFull')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
