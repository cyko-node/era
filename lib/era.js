/* ---- + ------------------------------------------------------------------- +
 | DEPS : MODULES
 + ---- + ---------- */
const nox = require('nox')
/* ---- + ----------
 | VARS : UTILS
 + ---- + ---------- */
const now = new Date()
/* ---- + ----------
 | VARS : CONFIG
 + ---- + ---------- */
const cfg = {
  pkg: require('../package.json'),
  def: require('../config.json'),
  usr: require('../config.json')
};{
  ops = {
    pkg: {
      o: cfg, attributes: {
        configurable: false,
        enumerable: true,
        writable: false,
      }
    },
    def: {
      o: cfg, attributes: {
        configurable: false,
        enumerable: true,
        writable: false,
      }
    },
    usr: {
      o: cfg, attributes: {
        configurable: false,
        enumerable: true,
        writable: true,
      }
    }
  }

  for (const p in ops) {
    Object.defineProperty(ops[p].o, p, ops[p].attributes)
  }
}

/* ---- + ------------------------------------------------------------------- +
 | CODE : HELP
 + ---- */

class help {
  static string(...arg) {
    return nox.to.string(...arg)
  }

  static number(val) {
    return Number(val)
  }
}

/* ---- + ------------------------------------------------------------------- +
 | CODE : MAIN
 + ---- */

exports.package = function() {
  return cfg.pkg
}

exports.config = function(arg = null) {
  if (arg != null) {
    // locale properties
    if (nox.has(arg, 'locale')) {
      cfg.usr.locale.name =
        nox.get(arg.locale, 'name', cfg.def.locale.name)
      cfg.usr.locale.zone =
        nox.get(arg.locale, 'zone', cfg.def.locale.zone)
      cfg.usr.locale.tick =
        nox.get(arg.locale, 'tick', cfg.def.locale.tick)
    }

    return this
  } else {
    return cfg.usr
  }
}

/* ---- + ------------------------------------------------------------------- +
 | CODE : DATE
 + ---- */

exports.date = class {
  static string() {
    return `${(
      now.toLocaleDateString(cfg.usr.locale.name, {
        timeZone: cfg.usr.locale.zone,
        year: 'numeric'
      })
    )}/${(
      now.toLocaleDateString(cfg.usr.locale.name, {
        timeZone: cfg.usr.locale.zone,
        month: '2-digit'
      })
    )}/${(
      now.toLocaleDateString(cfg.usr.locale.name, {
        timeZone: cfg.usr.locale.zone,
        day: '2-digit'
      })
    )}`
  }

  static year() {
    return help.number(now.getFullYear())
  }

  static month() {
    return help.number(now.getMonth()) + 1 // 0-11
  }

  static day() {
    return help.number(now.getDate())
  }
}

/* ---- + ------------------------------------------------------------------- +
 | CODE : TIME
 + ---- */

exports.time = class {
  static string() {
    return now.toLocaleTimeString(cfg.usr.locale.name, {
      timeZone: cfg.usr.locale.zone, hourCycle: 'h' + cfg.usr.locale.tick,
      hour:   '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }

  static hour() {
    return help.number(now.getHours())
  }

  static minute() {
    return help.number(now.getMinutes())
  }

  static second() {
    return help.number(now.getSeconds())
  }
}
