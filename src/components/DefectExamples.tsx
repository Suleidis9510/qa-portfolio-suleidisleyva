import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import { Server, Layout, MousePointer, Navigation, Shield, Wifi } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function DefectExamples() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const defects = [
    {
      icon: Server,
      category: 'API',
      title: t('defects.api.title'),
      description: t('defects.api.description'),
    },
    {
      icon: Layout,
      category: 'UI',
      title: t('defects.ui.title'),
      description: t('defects.ui.description'),
    },
    {
      icon: MousePointer,
      category: 'Interaction',
      title: t('defects.interaction.title'),
      description: t('defects.interaction.description'),
    },
    {
      icon: Navigation,
      category: 'Navigation',
      title: t('defects.navigation.title'),
      description: t('defects.navigation.description'),
    },
    {
      icon: Shield,
      category: 'Auth',
      title: t('defects.auth.title'),
      description: t('defects.auth.description'),
    },
    {
      icon: Wifi,
      category: 'Integration',
      title: t('defects.integration.title'),
      description: t('defects.integration.description'),
    },
  ]

  return (
    <section className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {t('defects.label')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            {t('defects.title')}
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            {t('defects.subtitle')}
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {defects.map((defect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-5 bg-background rounded-xl border border-border hover:border-destructive/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 flex items-center justify-center bg-destructive/10 rounded-lg group-hover:bg-destructive/20 transition-colors">
                    <defect.icon size={18} className="text-destructive" />
                  </div>
                  <span className="text-xs font-semibold text-destructive uppercase tracking-wide">
                    {defect.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{defect.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {defect.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
