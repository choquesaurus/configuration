
import { createLogger, format, transports } from 'winston'
import fs from 'fs'

const logsPath = './logs/'

// !fs.existsSync(logsPath) && fs.mkdirSync(logsPath);
if(!fs.existsSync(logsPath)) fs.mkdirSync(logsPath);

const logger = createLogger({
	level : 'info',
	format: format.combine(
		format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss',
		}),
		format.errors({ stack: true }),
		format.splat(),
		format.json(),
	),
	defaultMeta: { service: 'user-service' },
	transports : [
		//
		// - Write to all logs with level `info` and below to `quick-start-combined.log`.
		// - Write all logs error (and below) to `quick-start-error.log`.
		//
		new transports.Console(),
		new transports.File({
			filename: `${logsPath}error.log`,
			level   : 'error',
		}),
		new transports.File({ filename: `${logsPath}combined.log` }),
	],
})

export { logger }
