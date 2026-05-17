import { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  cvPath: string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.impact': 'Impact',
    'nav.contact': 'Contact',
    'nav.getInTouch': 'Get in Touch',

    // Hero
    'hero.role': 'QA Engineer',
    'hero.subtitle': 'QA Functional | QA Automation | AI-Assisted Testing',
    'hero.description': 'I help teams deliver reliable digital products through functional testing, automation, API validation, and AI-assisted QA workflows.',
    'hero.viewExperience': 'View Experience',
    'hero.downloadCV': 'Download CV',
    'hero.contactMe': 'Contact Me',
    'hero.scroll': 'Scroll',

    // About
    'about.label': 'About',
    'about.title': 'QA Professional',
    'about.p1': 'QA Functional / QA Automation professional with experience testing web, mobile, Android, iOS, and tablet applications in international agile environments.',
    'about.p2': 'I apply solid QA technical knowledge to validate business-critical workflows, translate acceptance criteria into test scenarios, identify risks and edge cases, and verify behavior across UI, APIs, integrations, databases, responsiveness, and basic accessibility.',
    'about.p3': 'I combine functional testing expertise with Playwright, TypeScript, Cursor, MCP tools, and AI-assisted workflows to improve test coverage, maintain automated tests, support requirement analysis, create clearer bug reports, and assist basic debugging when needed.',
    'about.highlight1': 'Web, Mobile, iOS, Android, Tablet',
    'about.highlight2': 'Risk-Based Testing',
    'about.highlight3': 'Functional + Automation',
    'about.highlight4': 'AI-Assisted Workflows',

    // Skills
    'skills.label': 'Expertise',
    'skills.title': 'Core Skills',
    'skills.testing': 'Testing',
    'skills.apiData': 'API & Data',
    'skills.automation': 'Automation',
    'skills.aiAssisted': 'AI-Assisted QA',
    'skills.accessibility': 'Accessibility',
    'skills.toolsTitle': 'Tools & Technologies',

    // Experience
    'experience.label': 'Career',
    'experience.title': 'Experience',
    'experience.dualboot.role': 'QA Functional & Automation',
    'experience.dualboot.description': 'QA Functional & Automation in a software factory environment, currently working on the third project since joining the company. Experience includes a healthcare web application, an iOS tablet application, and a current web platform integrated with connected mobile applications for iOS, Android, phones, and tablets.',
    'experience.dualboot.point1': 'Analyze user stories, acceptance criteria, and business rules',
    'experience.dualboot.point2': 'Execute smoke, regression, integration, API, mobile, tablet, and responsiveness testing',
    'experience.dualboot.point3': 'Validate APIs using Swagger and Postman',
    'experience.dualboot.point4': 'Perform database validation using Azure Data Studio',
    'experience.dualboot.point5': 'Report, track, and validate defects using Azure DevOps and Jira',
    'experience.dualboot.point6': 'Use BrowserStack for cross-browser and device validation',
    'experience.dualboot.point7': 'Maintain and update automated test cases with Playwright and TypeScript',
    'experience.dualboot.point8': 'Use Cursor, MCP tools, and AI-assisted workflows for QA analysis and debugging',
    'experience.dualboot.point9': 'Collaborate with international teams in English',
    'experience.anf.role': 'Software Tester',
    'experience.anf.description': 'Tested multiple interconnected internal web applications, validating functional behavior, integrations, API endpoints, responsive views, and end-to-end workflows.',
    'experience.anf.point1': 'Analyzed requirements and validated expected behavior across dependent web applications',
    'experience.anf.point2': 'Designed and executed functional, regression, smoke, exploratory, and integration tests',
    'experience.anf.point3': 'Tested API endpoints using Postman',
    'experience.anf.point4': 'Reported and tracked defects in Redmine until resolution and closure',
    'experience.anf.point5': 'Validated responsive web behavior for mobile views',
    'experience.anf.point6': 'Maintained QA documentation and test suites',

    // Impact
    'impact.label': 'Value',
    'impact.title': 'Impact',
    'impact.risk.title': 'Risk-Based Testing',
    'impact.risk.description': 'Prioritize critical flows, business rules, edge cases, and high-impact scenarios to reduce production risk.',
    'impact.defect.title': 'Clear Defect Reporting',
    'impact.defect.description': 'Create structured bug reports with evidence, expected vs actual behavior, reproduction steps, and technical context.',
    'impact.functional.title': 'Functional + Automation Mindset',
    'impact.functional.description': 'Combine functional testing criteria with automation to improve coverage and reduce repetitive manual work.',
    'impact.ai.title': 'AI-Assisted QA',
    'impact.ai.description': 'Use Cursor, MCP tools, and AI to support analysis, test coverage, reporting, documentation, assisted execution, and basic debugging.',

    // Defect Examples
    'defects.label': 'Quality',
    'defects.title': 'Highlighted Defect Examples',
    'defects.subtitle': 'Anonymized examples of critical defects identified and reported during testing.',
    'defects.api.title': 'Unexpected Server Error',
    'defects.api.description': 'Detected unexpected 500 errors during endpoint execution affecting critical user flows.',
    'defects.ui.title': 'Rendering Issues',
    'defects.ui.description': 'Identified UI rendering problems after incomplete migrations causing visual inconsistencies across views.',
    'defects.interaction.title': 'Drag-and-Drop Failure',
    'defects.interaction.description': 'Found broken drag-and-drop behavior causing elements to disappear unexpectedly.',
    'defects.navigation.title': 'Missing CTAs',
    'defects.navigation.description': 'Reported missing or disappearing call-to-action buttons in critical workflows.',
    'defects.auth.title': 'Authentication Issues',
    'defects.auth.description': 'Detected magic link and access token issues preventing expected user access.',
    'defects.integration.title': 'Offline Sync Data Loss',
    'defects.integration.description': 'Identified a critical issue in an iPad app where losing connection during upload and sync caused locally captured data to be lost.',

    // Mini CV
    'minicv.label': 'Resume',
    'minicv.title': 'Mini CV',
    'minicv.summary': 'Summary',
    'minicv.summaryText': 'QA Functional / QA Automation professional with experience in web, mobile, Android, iOS, tablet applications, API testing, database validation, automation, and AI-assisted QA workflows.',
    'minicv.experience': 'Experience',
    'minicv.coreSkills': 'Core Skills',
    'minicv.downloadFull': 'Download Full CV',

    // Contact
    'contact.label': 'Contact',
    'contact.title': "Let's Connect",
    'contact.subtitle': 'Open to QA Functional, QA Automation, and AI-assisted QA opportunities.',
    'contact.emailMe': 'Email Me',
    'contact.reachOut': 'Reach Out',
    'contact.reachOutText': 'Feel free to contact me for QA opportunities or collaborations.',

    // Footer
    'footer.role': 'QA Functional & Automation',

    // Device mockups
    'devices.dashboard': 'QA Test Dashboard',
    'devices.ipad': 'iPad Tests',
    'devices.mobile': 'Mobile QA',
  },
  es: {
    // Navigation
    'nav.about': 'Acerca',
    'nav.skills': 'Habilidades',
    'nav.experience': 'Experiencia',
    'nav.impact': 'Impacto',
    'nav.contact': 'Contacto',
    'nav.getInTouch': 'Contactar',

    // Hero
    'hero.role': 'Ingeniera QA',
    'hero.subtitle': 'QA Funcional | QA Automatizado | Testing con IA',
    'hero.description': 'Ayudo a equipos a entregar productos digitales confiables mediante testing funcional, automatizacion, validacion de APIs y flujos de QA asistidos por IA.',
    'hero.viewExperience': 'Ver Experiencia',
    'hero.downloadCV': 'Descargar CV',
    'hero.contactMe': 'Contactarme',
    'hero.scroll': 'Desplazar',

    // About
    'about.label': 'Acerca',
    'about.title': 'Profesional QA',
    'about.p1': 'Profesional QA Funcional / QA Automatizado con experiencia en testing de aplicaciones web, moviles, Android, iOS y tablets en entornos agiles internacionales.',
    'about.p2': 'Aplico conocimientos tecnicos solidos de QA para validar flujos criticos de negocio, traducir criterios de aceptacion en escenarios de prueba, identificar riesgos y casos borde, y verificar comportamiento en UI, APIs, integraciones, bases de datos, responsividad y accesibilidad basica.',
    'about.p3': 'Combino experiencia en testing funcional con Playwright, TypeScript, Cursor, herramientas MCP y flujos asistidos por IA para mejorar la cobertura de pruebas, mantener tests automatizados, apoyar el analisis de requerimientos, crear reportes de bugs mas claros y asistir en debugging basico cuando es necesario.',
    'about.highlight1': 'Web, Movil, iOS, Android, Tablet',
    'about.highlight2': 'Testing Basado en Riesgo',
    'about.highlight3': 'Funcional + Automatizacion',
    'about.highlight4': 'Flujos Asistidos por IA',

    // Skills
    'skills.label': 'Experiencia',
    'skills.title': 'Habilidades Principales',
    'skills.testing': 'Testing',
    'skills.apiData': 'API y Datos',
    'skills.automation': 'Automatizacion',
    'skills.aiAssisted': 'QA Asistido por IA',
    'skills.accessibility': 'Accesibilidad',
    'skills.toolsTitle': 'Herramientas y Tecnologias',

    // Experience
    'experience.label': 'Carrera',
    'experience.title': 'Experiencia',
    'experience.dualboot.role': 'QA Funcional y Automatizado',
    'experience.dualboot.description': 'QA Funcional y Automatizado en un entorno de fabrica de software, actualmente trabajando en el tercer proyecto desde que me uni a la empresa. La experiencia incluye una aplicacion web de salud, una aplicacion para tablet iOS, y una plataforma web actual integrada con aplicaciones moviles conectadas para iOS, Android, telefonos y tablets.',
    'experience.dualboot.point1': 'Analizar historias de usuario, criterios de aceptacion y reglas de negocio',
    'experience.dualboot.point2': 'Ejecutar pruebas de smoke, regresion, integracion, API, movil, tablet y responsividad',
    'experience.dualboot.point3': 'Validar APIs usando Swagger y Postman',
    'experience.dualboot.point4': 'Realizar validacion de base de datos usando Azure Data Studio',
    'experience.dualboot.point5': 'Reportar, dar seguimiento y validar defectos usando Azure DevOps y Jira',
    'experience.dualboot.point6': 'Usar BrowserStack para validacion cross-browser y de dispositivos',
    'experience.dualboot.point7': 'Mantener y actualizar casos de prueba automatizados con Playwright y TypeScript',
    'experience.dualboot.point8': 'Usar Cursor, herramientas MCP y flujos asistidos por IA para analisis QA y debugging',
    'experience.dualboot.point9': 'Colaborar con equipos internacionales en ingles',
    'experience.anf.role': 'Tester de Software',
    'experience.anf.description': 'Probe multiples aplicaciones web internas interconectadas, validando comportamiento funcional, integraciones, endpoints de API, vistas responsivas y flujos end-to-end.',
    'experience.anf.point1': 'Analice requerimientos y valide comportamiento esperado en aplicaciones web dependientes',
    'experience.anf.point2': 'Disene y ejecute pruebas funcionales, de regresion, smoke, exploratorias y de integracion',
    'experience.anf.point3': 'Probe endpoints de API usando Postman',
    'experience.anf.point4': 'Reporte y di seguimiento a defectos en Redmine hasta su resolucion y cierre',
    'experience.anf.point5': 'Valide comportamiento web responsivo para vistas moviles',
    'experience.anf.point6': 'Mantuve documentacion QA y suites de pruebas',

    // Impact
    'impact.label': 'Valor',
    'impact.title': 'Impacto',
    'impact.risk.title': 'Testing Basado en Riesgo',
    'impact.risk.description': 'Priorizar flujos criticos, reglas de negocio, casos borde y escenarios de alto impacto para reducir riesgo en produccion.',
    'impact.defect.title': 'Reportes de Defectos Claros',
    'impact.defect.description': 'Crear reportes de bugs estructurados con evidencia, comportamiento esperado vs actual, pasos de reproduccion y contexto tecnico.',
    'impact.functional.title': 'Mentalidad Funcional + Automatizacion',
    'impact.functional.description': 'Combinar criterios de testing funcional con automatizacion para mejorar cobertura y reducir trabajo manual repetitivo.',
    'impact.ai.title': 'QA Asistido por IA',
    'impact.ai.description': 'Usar Cursor, herramientas MCP e IA para apoyar analisis, cobertura de pruebas, reportes, documentacion, ejecucion asistida y debugging basico.',

    // Defect Examples
    'defects.label': 'Calidad',
    'defects.title': 'Ejemplos de Defectos Destacados',
    'defects.subtitle': 'Ejemplos anonimizados de defectos criticos identificados y reportados durante el testing.',
    'defects.api.title': 'Error Inesperado del Servidor',
    'defects.api.description': 'Detecte errores 500 inesperados durante la ejecucion de endpoints afectando flujos criticos de usuario.',
    'defects.ui.title': 'Problemas de Renderizado',
    'defects.ui.description': 'Identifique problemas de renderizado UI despues de migraciones incompletas causando inconsistencias visuales en las vistas.',
    'defects.interaction.title': 'Falla de Drag-and-Drop',
    'defects.interaction.description': 'Encontre comportamiento roto de drag-and-drop causando que elementos desaparecieran inesperadamente.',
    'defects.navigation.title': 'CTAs Faltantes',
    'defects.navigation.description': 'Reporte botones de llamada a la accion faltantes o que desaparecian en flujos criticos.',
    'defects.auth.title': 'Problemas de Autenticacion',
    'defects.auth.description': 'Detecte problemas de magic link y tokens de acceso que impedian el acceso esperado del usuario.',
    'defects.integration.title': 'Perdida de Datos en Sync Offline',
    'defects.integration.description': 'Identifique un problema critico en una app de iPad donde perder conexion durante la carga y sincronizacion causaba que los datos capturados localmente se perdieran.',

    // Mini CV
    'minicv.label': 'Curriculum',
    'minicv.title': 'Mini CV',
    'minicv.summary': 'Resumen',
    'minicv.summaryText': 'Profesional QA Funcional / QA Automatizado con experiencia en aplicaciones web, moviles, Android, iOS, tablets, testing de APIs, validacion de bases de datos, automatizacion y flujos de QA asistidos por IA.',
    'minicv.experience': 'Experiencia',
    'minicv.coreSkills': 'Habilidades Principales',
    'minicv.downloadFull': 'Descargar CV Completo',

    // Contact
    'contact.label': 'Contacto',
    'contact.title': 'Conectemos',
    'contact.subtitle': 'Abierta a oportunidades en QA Funcional, QA Automatizado y QA asistido por IA.',
    'contact.emailMe': 'Enviar Email',
    'contact.reachOut': 'Contactame',
    'contact.reachOutText': 'No dudes en contactarme para oportunidades QA o colaboraciones.',

    // Footer
    'footer.role': 'QA Funcional y Automatizado',

    // Device mockups
    'devices.dashboard': 'Panel de Pruebas QA',
    'devices.ipad': 'Pruebas iPad',
    'devices.mobile': 'QA Movil',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  const cvPath = language === 'en' ? './Suleidis-Leyva-CV-EN.pdf' : './Suleidis-Leyva-CV-ES.pdf'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, cvPath }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
