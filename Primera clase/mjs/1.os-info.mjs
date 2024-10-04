import os, { platform, version, arch, cpus, freemem, totalmem, uptime } from 'node:os'
// OR
import os from 'node:os'


console.log('Informacion del sistema operativo')
console.log('-------------------------')

console.log('Nombre del sistema operativo', platform())
console.log('Version del sistema operativo', version())
console.log('Arquitectura', arch())
console.log('CPUs ', cpus())
console.log('Memoria libre', freemem() / 1024 / 1024)
console.log('Memoria total', totalmem() / 1024 / 1024)
console.log('Dias de encendido', uptime() / 60 / 60)