const era = require('era')
const pkg = era.package()
const num = process.argv.includes('test', 2)
  ? Number(process.argv.at(3))
  : false

if (num) {
  const out = console.debug
  const err = console.error

  switch (num) {
    case 1||2||3||4||5||6||7||8||9: {
      out(`@ ${pkg.name}:test[${num}]`, '...')
      out()

      out(era.config())
      out('----')
      out(era.time.string())
      out(era.time.hour())
      out(era.time.minute())
      out(era.time.second())
      out('----')
      out(era.date.string())
      out(era.date.year())
      out(era.date.month())
      out(era.date.day())
      out('----')
      era.config({
        locale: {
          tick: 12
        }
      })
      out(era.config())
      out('----')
      out(era.time.string())
      out(era.time.hour())
      out(era.time.minute())
      out(era.time.second())
      out('----')
      out(era.date.string())
      out(era.date.year())
      out(era.date.month())
      out(era.date.day())
      out('----')
      era.config({
        locale: {
          name: 'en-US',
          zone: 'America/New_York',
          tick: 24
        }
      })
      out(era.config())
      out('----')
      out(era.time.string())
      out(era.time.hour())
      out(era.time.minute())
      out(era.time.second())
      out('----')
      out(era.date.string())
      out(era.date.year())
      out(era.date.month())
      out(era.date.day())
      out('----')
      era.config({
        locale: {
          name: 'sv-SE',
          zone: 'Europe/Stockholm'
        }
      })
      out(era.config())
      out('----')
      out(era.time.string())
      out(era.time.hour())
      out(era.time.minute())
      out(era.time.second())
      out('----')
      out(era.date.string())
      out(era.date.year())
      out(era.date.month())
      out(era.date.day())
      out('----')

      out()
      out(`@ ${pkg.name}:test[${num}] done.`)
    } break

    default: {
      err(`@ ${pkg.name}:test[${num}] unknown!`)
    }
  }
}
