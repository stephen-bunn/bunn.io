import { z, ZodType } from 'zod'

export const ResumeWorkSchema = z.object({
  endDate: z.string().optional(),
  highlights: z.array(z.string()),
  location: z.string().optional(),
  name: z.string(),
  position: z.string(),
  startDate: z.string(),
  summary: z.string().optional(),
  url: z.string().optional(),
  hidden: z.literal(false).optional()
})

export const ResumeEducationSchema = z.object({
  area: z.string(),
  courses: z.array(z.string()).optional(),
  endDate: z.string().optional(),
  institution: z.string(),
  score: z.string().optional(),
  startDate: z.string(),
  studyType: z.string(),
  url: z.string().optional()
})

export const ResumePublicationSchema = z.object({
  name: z.string(),
  publisher: z.string(),
  releaseDate: z.string(),
  summary: z.string(),
  url: z.string().optional()
})

export const ResumeCertificateSchema = z.object({
  date: z.string(),
  issuer: z.string(),
  name: z.string(),
  url: z.string().optional()
})

export const ResumeAwardSchema = z.object({
  date: z.string(),
  title: z.string(),
  awarder: z.string(),
  summary: z.string().optional()
})

export const ResumeSkillSchema = z.object({
  name: z.string(),
  keywords: z.array(z.string())
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function validateResumeSchema<T, S extends ZodType<any, any, any>>(
  value: T,
  schema: S
): value is z.infer<S> {
  return schema.safeParse(value).success
}
