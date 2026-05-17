import { Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>&copy; {currentYear} Suleidis Leyva</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">{t('footer.role')}</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:suleidisdanai@gmail.com"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/suleidis-leyva-ramirez/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
