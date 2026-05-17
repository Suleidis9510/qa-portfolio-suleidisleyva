import { motion } from 'framer-motion'
import { Download, Mail, ArrowDown } from 'lucide-react'
import { DeviceMockups } from './DeviceMockups'
import { useLanguage } from '@/context/LanguageContext'

const badges = ['Web', 'Mobile', 'API', 'Database', 'Automation', 'AI']

export function Hero() {
  const { t, cvPath } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-sm font-medium text-primary tracking-wide uppercase">
                {t('hero.role')}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Suleidis Leyva
              </h1>
              <p className="text-lg text-muted-foreground font-medium">
                {t('hero.subtitle')}
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              {t('hero.description')}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {badges.map((badge, index) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full border border-border"
                >
                  {badge}
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                {t('hero.viewExperience')}
              </a>
              <a
                href={cvPath}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-card text-foreground rounded-lg font-medium border border-border hover:bg-accent transition-colors"
              >
                <Download size={16} />
                {t('hero.downloadCV')}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-card text-foreground rounded-lg font-medium border border-border hover:bg-accent transition-colors"
              >
                <Mail size={16} />
                {t('hero.contactMe')}
              </a>
            </div>
          </motion.div>

          {/* Right content - Device Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <DeviceMockups />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-medium">{t('hero.scroll')}</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
