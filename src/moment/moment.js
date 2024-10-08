const moment = require('moment');

const startDate = moment("2024-01-10T00:00:00.000+07:00");
const endDate = moment("2024-01-14T00:00:00.000+07:00");
const duration = moment.duration(endDate.diff(startDate));
// console.log(moment(duration).format('YYYY-MM-DD HH:mm:ss'))
const days = duration.asDays();
console.log('days: ', days)
const newStartDate = startDate.subtract(days, 'days')

console.log('prev - end specific: ', newStartDate.format('YYYY-MM-DD HH:mm:ss'))
console.log('prev - start specific: ', newStartDate.subtract(days, 'days').format('YYYY-MM-DD HH:mm:ss'))



// const date = moment().set('h', 0).set('m', 0).set('s', 0).format('x');

// console.log('date:', date)
// console.log('date2:', moment(Number(date)).format('YYYY-MM-DD HH:mm:ss'))

// console.log(Array.from(Array(3)).map(el => console.log(el)));

// console.log('+ 4 days: ', moment().set('h', 23).set('m', 59).set('s', 59).add(4, 'days').format('YYYY-MM-DD HH:mm:ss'))

// console.log(moment.utc('2024-01-01').valueOf())

// console.log(moment().valueOf())

const startDate = moment("2024-01-10T00:00:00.000+07:00");
const endDate = moment("2024-01-14T00:00:00.000+07:00");
// const needDate = endDate - startDate;
const duration = moment.duration(endDate.diff(startDate));
// console.log(moment(duration).format('YYYY-MM-DD HH:mm:ss'))
const days = duration.asDays();
console.log('days: ', days)

// const startDate1 = startDate.subtract(days + 1, 'days');
// console.log('prev- start days: ', startDate1.format('YYYY-MM-DD HH:mm:ss'))
// console.log('prev- end days: ', startDate1.add(days, 'days').format('YYYY-MM-DD HH:mm:ss'))

const newStartDate = startDate.clone().subtract(1, 'week')
// console.log('prev - start last week: ', newStartDate.format('YYYY-MM-DD HH:mm:ss'))
// console.log('prev - end last week: ', newStartDate.endOf('week').format('YYYY-MM-DD HH:mm:ss'))
// console.log('prev - start month: ', startDate.subtract(1, 'month').format('YYYY-MM-DD HH:mm:ss'))
// console.log('prev - end month: ', startDate.endOf('month').format('YYYY-MM-DD HH:mm:ss'))
// console.log('prev - start year: ', startDate.subtract(1, 'year').format('YYYY-MM-DD HH:mm:ss'))
// console.log('prev - end year: ', startDate.endOf('year').format('YYYY-MM-DD HH:mm:ss'))
console.log('prev - start specific: ', startDate.subtract(days, 'days').format('YYYY-MM-DD HH:mm:ss'))
console.log('prev - end last week: ', newStartDate.endOf('week').format('YYYY-MM-DD HH:mm:ss'))