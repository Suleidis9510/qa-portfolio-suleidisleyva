import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import { Target, Zap, Bot, Globe } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function About() {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const { t } = useLanguage()

  const highlights = [
    { icon: Globe, text: t('about.highlight1') },
    { icon: Target, text: t('about.highlight2') },
    { icon: Zap, text: t('about.highlight3') },
    { icon: Bot, text: t('about.highlight4') },
  ]

  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {t('about.label')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            {t('about.title')}
          </h2>

          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </div>

          {/* Highlight cards */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="p-4 bg-background rounded-xl border border-border"
              >
                <item.icon size={20} className="text-primary mb-2" />
                <p className="text-xs font-medium text-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
