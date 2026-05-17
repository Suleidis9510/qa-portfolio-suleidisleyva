import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import { Target, FileText, Layers, Bot } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function Impact() {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const { t } = useLanguage()

  const impacts = [
    {
      icon: Target,
      title: t('impact.risk.title'),
      description: t('impact.risk.description'),
    },
    {
      icon: FileText,
      title: t('impact.defect.title'),
      description: t('impact.defect.description'),
    },
    {
      icon: Layers,
      title: t('impact.functional.title'),
      description: t('impact.functional.description'),
    },
    {
      icon: Bot,
      title: t('impact.ai.title'),
      description: t('impact.ai.description'),
    },
  ]

  return (
    <section id="impact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {t('impact.label')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            {t('impact.title')}
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {impacts.map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <impact.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {impact.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
