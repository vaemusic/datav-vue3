import child_process from 'node:child_process'

function copyDir(src, dist) {
  child_process.spawn('cp', ['-r', src, dist])
}

copyDir('./packages', './docs')
