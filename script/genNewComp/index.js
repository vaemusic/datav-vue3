import { tplReplacer } from './tplReplacer.js'
import { infoCollector } from './infoCollector.js'

async function run() {
  const meta = await infoCollector()
  tplReplacer(meta)
}

run()
