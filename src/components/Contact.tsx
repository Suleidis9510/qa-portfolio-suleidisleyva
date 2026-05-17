import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import { Mail, Linkedin, Download, Send } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2 })
  const { t, cvPath } = useLanguage()

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {t('contact.label')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            {t('contact.subtitle')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:suleidisdanai@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              {t('contact.emailMe')}
            </a>
            <a
              href="https://www.linkedin.com/in/suleidis-leyva-ramirez/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={cvPath}
              download
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-background text-foreground rounded-lg font-medium border border-border hover:bg-accent transition-colors"
            >
              <Download size={18} />
              {t('hero.downloadCV')}
            </a>
          </motion.div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-16 max-w-md mx-auto p-6 bg-background rounded-2xl border border-border"
          >
            <div className="flex items-center justify-center w-14 h-14 mx-auto bg-primary/10 rounded-full mb-4">
              <Send size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{t('contact.reachOut')}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t('contact.reachOutText')}
            </p>
            <a
              href="mailto:suleidisdanai@gmail.com"
              className="text-sm text-primary font-medium hover:underline"
            >
              suleidisdanai@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
