import 'dotenv/config'
import { z } from 'zod'

const nodeEnv = z.enum(['development', 'production', 'test'])

function requiredOnEnv(env: z.infer<typeof nodeEnv>) {
  return (value: any) => {
    if (env === process.env.NODE_ENV && !value) {
      return false
    }

    return true
  }
}

const envSchema = z.object({
  NODE_ENV: nodeEnv.default('development'),
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url(),
  DIRECT_URL: z.string().url().optional().refine(requiredOnEnv('production')),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
