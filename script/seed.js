'use strict'

const db = require('../server/db')
const {User, Honor} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    Honor.create({name: "DR. DENNIS DEPERRO '77", year: '2019'}),
    Honor.create({name: 'TIMOTHY KELLY', year: '2019'}),
    Honor.create({name: "TRISTAN D'AMGELO", year: '2019'}),
    Honor.create({name: 'THERESA SCHUTA', year: '2019'}),
    Honor.create({name: 'DANIEL CAULFIELD', year: '2018'}),
    Honor.create({name: 'CHRISTOPHER RUSIN', year: '2018'}),
    Honor.create({name: 'MARGE CARROLL', year: '2018'}),
    Honor.create({name: 'MAUREEN DIGGINS', year: '2018'}),
    Honor.create({name: "JOE HEAD '69", year: '2018'}),
    Honor.create({name: "REV. GREG JAKUBOWICS '83", year: '2018'}),
    Honor.create({name: "MICHAEL LEMPKO '84", year: '2018'}),
    Honor.create({name: 'THE HILLERY FAMILY', year: '2017'}),
    Honor.create({name: 'THE WHALEN FAMILY', year: '2017'}),
    Honor.create({name: 'MICHAEL LUCARELLI', year: '2017'}),
    Honor.create({name: "JOHN COLLINS ESQ. '64", year: '2017'}),
    Honor.create({name: 'ROBERT CHAMBERS', year: '2017'}),
    Honor.create({name: 'MEL PALANO', year: '2017'}),
    Honor.create({name: "MARTY MALONEY '91", year: '2016'}),
    Honor.create({name: 'MAUREEN MYERS', year: '2016'}),
    Honor.create({name: "WILLIAM MURPHY ESQ '89", year: '2016'}),
    Honor.create({name: "BRIAN PILARSKI '01", year: '2016'}),
    Honor.create({name: "BJ RYAN '98", year: '2016'}),
    Honor.create({name: 'BONNIE AND JERRY SULLIVAN', year: '2016'}),
    Honor.create({name: "PETERY CLANCY '79", year: '2015'}),
    Honor.create({name: "THOMAS SULLIVAN '75", year: '2015'}),
    Honor.create({name: 'SR. MARY ELLEN TWIST RSM', year: '2015'}),
    Honor.create({name: 'REV. RICHARD "DUKE" ZAJAC', year: '2015'}),
    Honor.create({name: "ERIK BOHEN '00", year: '2014'}),
    Honor.create({name: "STEVEN HIETANEN,DDS '80", year: '2014'}),
    Honor.create({name: "REV. THOMAS QUINLIVAN '63", year: '2014'}),
    Honor.create({name: 'DAVID "WARD" SCARCWELLO \'76', year: '2014'}),
    Honor.create({name: "PATRICK STANTON '69", year: '2014'}),
    Honor.create({name: 'DAVE POWERS', year: '2014'}),
    Honor.create({name: 'JIM BOURIS', year: '2014'}),
    Honor.create({name: "BILL CONROY '78", year: '2013'}),
    Honor.create({name: "GENE OVERDORF '71", year: '2013'}),
    Honor.create({name: 'BARBARA HART', year: '2013'}),
    Honor.create({name: "DR. PETER PURCELL '74", year: '2013'}),
    Honor.create({name: 'SR. PEGGEY GORMAN RSM', year: '2013'}),
    Honor.create({name: 'JIM PALANO', year: '2013'}),
    Honor.create({name: "MARK CASSIDY '77 ", year: '2012'}),
    Honor.create({name: "PAT and JOE CROWLEY '53", year: '2012'}),
    Honor.create({name: "JACK DEVINE '54", year: '2012'}),
    Honor.create({name: "TOM GRAHAM '59", year: '2012'}),
    Honor.create({name: "JACK JERGE '52", year: '2012'}),
    Honor.create({name: "TOM MCDONNELL '86", year: '2012'}),
    Honor.create({name: 'MICHAEL BURKE', year: '2011'}),
    Honor.create({name: "HENRY DEMICKE '54", year: '2011'}),
    Honor.create({name: 'REV. EDWARD DURKIN SJ', year: '2011'}),
    Honor.create({name: 'REV. JAMES JUDGE', year: '2011'}),
    Honor.create({name: 'MARGARET OVERDORF', year: '2011'}),
    Honor.create({name: 'MAUREEN WINNERT', year: '2011'}),
    Honor.create({name: "MATT BURKE '80 ", year: '2011'}),
    Honor.create({name: "MICHAEL DIGGINS '60", year: '2011'}),
    Honor.create({name: "NEIL FARREL '75", year: '2011'}),
    Honor.create({name: "RAY MCGURN '69", year: '2011'}),
    Honor.create({name: "MARK REED '89", year: '2011'}),
    Honor.create({name: 'BETTY EAGEN', year: '2009'}),
    Honor.create({name: 'THOMAN HIGGINS', year: '2009'}),
    Honor.create({name: 'THOMAS MCCARTHY', year: '2009'}),
    Honor.create({name: 'BARBARA RYAN', year: '2009'}),
    Honor.create({name: 'PATRICK FITZGERALD', year: '2009'}),
    Honor.create({name: 'JOHN HOFFSTETTER', year: '2009'}),
    Honor.create({name: "JAMEs C. TILLEY '59", year: '2008'}),
    Honor.create({name: "SISTER ELLEN O'KEEFE S.S.J.", year: '2008'}),
    Honor.create({name: "MARY ELLEN and TOM REILLY '62", year: '2008'}),
    Honor.create({name: 'REV.WILLIAM BIGELOW', year: '2007'}),
    Honor.create({name: 'DAN FINUCANE', year: '2007'}),
    Honor.create({name: 'CARL and CATHY PALADINO', year: '2007'}),
    Honor.create({name: 'MSGR. DAVID M. LEE', year: ''}),
    Honor.create({name: 'SUE AND TED OVERDORF', year: ''}),
    Honor.create({name: 'MARGARET "PEG" SULLIVAN', year: ''}),
    Honor.create({name: 'SISTER SALLY WALTZ, RSM', year: ''}),
    Honor.create({name: 'PAUL AND VICKI BARBUS', year: ''}),
    Honor.create({name: "RICHARD ROBINSON SR. '52", year: ''}),
    Honor.create({name: 'FATHER JOEL A. CAMPBELL, O.F.M.', year: ''}),
    Honor.create({name: "MSGR.WILLIAM J. GALLAGHER '57", year: ''}),
    Honor.create({name: "KAREN and CHARLIE WILSON '61", year: ''}),
    Honor.create({name: 'JUNE BARNES', year: ''}),
    Honor.create({name: "PAUL FITZPATRICK '66", year: ''}),
    Honor.create({name: 'REV. MSGR. ROBERT C. WURTZ', year: ''}),
    Honor.create({name: 'FR. JOE BAYNE O.F.M', year: ''}),
    Honor.create({name: "JOHN GLOSE '68", year: ''}),
    Honor.create({name: "MARK SCHROEDER '74", year: ''}),
    Honor.create({name: 'REV JOHN ALDERSON O.F.M.', year: ''}),
    Honor.create({name: "JOSEPH CRANGLE ESQ. '50", year: ''}),
    Honor.create({name: "MATTHEW COLPOYS '55", year: ''}),
    Honor.create({name: 'JOSEPH CROWLEY', year: ''}),
    Honor.create({name: 'JOHN (JACK) HEITZHAUS', year: ''}),
    Honor.create({name: 'PATRICK SHINE', year: ''}),
    Honor.create({name: 'NORMAN KERSCH', year: ''}),
    Honor.create({name: 'RICH ROBILLARD', year: ''}),
    Honor.create({name: 'MARTIN "MARTY WINNERT JR.', year: ''}),
    Honor.create({name: 'DOLORES MALONEY', year: ''}),
    Honor.create({name: 'JACK REID', year: ''}),
    Honor.create({name: 'ALFRED "ALFIE" B. WRIGHT SR.', year: ''}),
    Honor.create({name: 'HONORABLE JACK QUINN', year: ''}),
    Honor.create({name: 'JERRY WHALEN ESQ', year: ''}),
    Honor.create({name: 'ROBERT "HOPPER" RUSH', year: ''}),
    Honor.create({name: 'JAMES R. HILLERY', year: ''}),
    Honor.create({name: 'WILLIAM (DUKE) FORSYTHE', year: ''}),
    Honor.create({name: 'REV. MSGR. JAMES F. CAMPBELL', year: ''}),
    Honor.create({name: 'JOHN J. "NOEY" NOSTRANT', year: ''}),
    Honor.create({name: 'RICHARD DONOVAN', year: ''}),
    Honor.create({name: 'DOROTHY PANKOW', year: ''}),
    Honor.create({name: 'MSGR. BASIL A. ORMSBY D.D.', year: ''}),
    Honor.create({name: 'SISTER BARBARA CIARICO R.S.M', year: ''}),
    Honor.create({name: 'HON. KEVIN M. DILLON', year: ''}),
    Honor.create({name: 'JACK CHILCOTT', year: ''}),
    Honor.create({name: 'REV. MSGR. S. THEODORE BERG', year: ''}),
    Honor.create({name: 'DOMINIC and IDA CHELLA', year: ''}),
    Honor.create({name: 'ELIZABETH MADDIGAN', year: ''}),
    Honor.create({name: 'BRIAN M. HIGGINS', year: ''}),
    Honor.create({name: 'ROBERT H. CHAMBERS', year: ''}),
    Honor.create({name: 'REV. MSGR. WILLIAM G. STANTON', year: ''}),
    Honor.create({name: ' LOUIS J. NILLITTIER', year: ''}),
    Honor.create({name: 'REV. MSGR. DINO J. LORENZETTI', year: ''}),
    Honor.create({name: 'COLONEL HENRY F. WILLIAMS', year: ''}),
    Honor.create({name: 'REV. VENARD CARR O.F.M.', year: ''}),
    Honor.create({name: 'REV HUGH HINES O.F.M', year: ''}),
    Honor.create({name: 'SR. MARY WALTER LOVE S.S.J', year: ''}),
    Honor.create({name: 'ENNETH J. BRAUN', year: ''}),
    Honor.create({name: 'SR. ELLEN MAHON R.S.M.', year: ''}),
    Honor.create({name: 'SR. M.BERCHMANS MCDONOUGH R.S.M.', year: ''}),
    Honor.create({name: 'SR. M. JEAN. BAPTIST TRINOR R.S.M', year: ''}),
    Honor.create({name: 'SR.SHEILA MARIE WALSH R.S.M', year: ''}),
    Honor.create({name: 'JAMES M. CONNORS', year: ''}),
    Honor.create({name: 'DANIEL DRISCOLL', year: ''}),
    Honor.create({name: 'GEORGE ELLIS', year: ''}),
    Honor.create({name: 'MICHAEL LICATA', year: ''}),
    Honor.create({name: 'MEL PALANO', year: ''}),
    Honor.create({name: 'GERALI A. WHALEN', year: ''}),
    Honor.create({name: 'ROBERT H. CHAMBERS', year: ''}),
    Honor.create({name: 'WALTER J. MAHONEY', year: ''}),
    Honor.create({name: 'ERNEST L. COLUCCI', year: ''}),
    Honor.create({name: 'WILLIAM D. HASSERR JR.', year: ''}),
    Honor.create({name: 'REV. MSGR LEO E. HAMMERL', year: ''}),
    Honor.create({name: 'RICHARD F. TORREY', year: ''}),
    Honor.create({name: 'SR. MARY MECHTILDE R.S.M. P.E.P', year: ''}),
    Honor.create({name: 'JOSEPH V. BROCATO', year: ''}),
    Honor.create({name: 'THE MOST REVERAND JAMES A. MCNULTY D.D. ', year: ''}),
    Honor.create({name: 'PETER GUST ECONOMOU', year: ''}),
    Honor.create({name: 'ANTHONY L. MIKULEC', year: ''}),
    Honor.create({name: 'REV. JAMES J. REDMOND S.J.', year: ''}),
    Honor.create({name: 'MRS. EDWARD H. COTTRELL', year: ''}),
    Honor.create({name: 'PASCHAL C. RUBINO ', year: ''}),
    Honor.create({name: 'JAMES J. DUNIGAN JR.', year: ''}),
    Honor.create({name: 'JOHN M. GALVIN', year: ''}),
    Honor.create({name: ' REV. TIMOTHY J. QUINN O.F.M.', year: ''}),
    Honor.create({name: 'DR. JOSEPH C. SCANIO', year: ''}),
    Honor.create({name: 'JOHN F. MAHONEY', year: ''}),
    Honor.create({name: 'GEORGE J. EVANS', year: ''}),
    Honor.create({name: "DR. JOSEPH P O'BREIN", year: ''}),
    Honor.create({name: 'GERALD A. WHALEN', year: ''})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
