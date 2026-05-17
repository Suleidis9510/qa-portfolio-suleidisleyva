import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import { MapPin, Calendar, Building2, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const experiences = [
    {
      company: 'DualBoot Partners',
      role: t('experience.dualboot.role'),
      location: 'Remote – Uruguay',
      period: 'Jun 2025 – Present',
      description: t('experience.dualboot.description'),
      points: [
        t('experience.dualboot.point1'),
        t('experience.dualboot.point2'),
        t('experience.dualboot.point3'),
        t('experience.dualboot.point4'),
        t('experience.dualboot.point5'),
        t('experience.dualboot.point6'),
        t('experience.dualboot.point7'),
        t('experience.dualboot.point8'),
        t('experience.dualboot.point9'),
      ],
    },
    {
      company: 'ANF AC – Autoridad de Certificacion',
      role: t('experience.anf.role'),
      location: 'Remote – Spain',
      period: 'Nov 2023 – Jun 2025',
      description: t('experience.anf.description'),
      points: [
        t('experience.anf.point1'),
        t('experience.anf.point2'),
        t('experience.anf.point3'),
        t('experience.anf.point4'),
        t('experience.anf.point5'),
        t('experience.anf.point6'),
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {t('experience.label')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            {t('experience.title')}
          </h2>

          <div className="mt-12 space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />

                <div className="bg-background rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1 text-primary">
                        <Building2 size={14} />
                        <span className="text-sm font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

                  {/* Key points */}
                  <div className="grid sm:grid-cols-2 gap-2">
                    {exp.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
