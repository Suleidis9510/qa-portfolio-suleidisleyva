import { motion } from 'framer-motion'
import { useInView } from './hooks/useInView'
import {
  CheckSquare,
  Search,
  Shield,
  AlertTriangle,
  RefreshCw,
  Layers,
  FileSearch,
  Target,
  Server,
  Database,
  FileCode,
  Settings,
  Play,
  Repeat,
  Bot,
  Sparkles,
  FileText,
  Bug,
  Eye,
  Wrench,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const skillCategories = [
  {
    titleKey: 'skills.testing',
    icon: CheckSquare,
    skills: [
      { name: 'Functional Testing', icon: CheckSquare },
      { name: 'Manual Testing', icon: Search },
      { name: 'Regression Testing', icon: RefreshCw },
      { name: 'Smoke Testing', icon: Shield },
      { name: 'Integration Testing', icon: Layers },
      { name: 'Exploratory Testing', icon: FileSearch },
      { name: 'Acceptance Criteria', icon: Target },
      { name: 'Risk-Based Testing', icon: AlertTriangle },
      { name: 'Edge Case Detection', icon: AlertTriangle },
    ],
  },
  {
    titleKey: 'skills.apiData',
    icon: Server,
    skills: [
      { name: 'API Testing', icon: Server },
      { name: 'Postman', icon: FileCode },
      { name: 'Swagger', icon: FileCode },
      { name: 'Database Validation', icon: Database },
      { name: 'Azure Data Studio', icon: Database },
      { name: 'SQL Basics', icon: Database },
    ],
  },
  {
    titleKey: 'skills.automation',
    icon: Settings,
    skills: [
      { name: 'Playwright', icon: Play },
      { name: 'TypeScript', icon: FileCode },
      { name: 'Test Maintenance', icon: Wrench },
      { name: 'Smoke Automation', icon: Shield },
      { name: 'Regression Automation', icon: Repeat },
      { name: 'Flow Automation', icon: RefreshCw },
    ],
  },
  {
    titleKey: 'skills.aiAssisted',
    icon: Bot,
    skills: [
      { name: 'Cursor', icon: Sparkles },
      { name: 'MCP Tools', icon: Bot },
      { name: 'AI Test Analysis', icon: Eye },
      { name: 'AI Bug Reporting', icon: Bug },
      { name: 'AI Test Maintenance', icon: Wrench },
      { name: 'AI Documentation', icon: FileText },
      { name: 'AI-Assisted Debug', icon: Bug },
    ],
  },
]

const tools = [
  'Azure DevOps',
  'Jira',
  'Redmine',
  'Postman',
  'Swagger',
  'Azure Data Studio',
  'BrowserStack',
  'DevTools',
  'Lighthouse',
  'WAVE',
  'Jam',
  'Excel',
  'Slack',
  'Google Chat',
  'Playwright',
  'TypeScript',
  'Cursor',
  'MCP Tools',
]

export function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {t('skills.label')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
            {t('skills.title')}
          </h2>

          {/* Skill categories */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.titleKey}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="p-6 bg-card rounded-2xl border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{t(category.titleKey)}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium"
                    >
                      <skill.icon size={12} className="text-muted-foreground" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Accessibility section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-6 p-6 bg-card rounded-2xl border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Eye size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{t('skills.accessibility')}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Basic Accessibility Testing', 'Lighthouse', 'WAVE', 'DevTools'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-xs font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-12"
          >
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              {t('skills.toolsTitle')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.02 }}
                  className="px-3 py-1.5 bg-muted text-muted-foreground rounded-full text-xs font-medium border border-border hover:border-primary/30 hover:text-foreground transition-colors cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
