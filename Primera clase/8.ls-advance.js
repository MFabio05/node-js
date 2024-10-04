const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

// El ? significa que si la condicion de su izquierda igual a null o
// undefinded se posicione en el directorio actual (".").
const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder) // Con esto lees el folder o carpeta.
  } catch {
    console.error(pc.red(`No se pudo leer el archivo ${folder}`))
    process.exit(1) // Creas tu catch para en caso de haber un error manejarlo.
  }

  const filesPromises = files.map(async file => { // Haces un mapeo en donde vayas seleccionando cada archivo de tu carpeta.
    const filePath = path.join(folder, file) // Creas un nuevo path que comience primero con la carpeta donde te ubiques y luego con tu archivo.
    let stats

    try {
      stats = await fs.stat(filePath) // stat - informacion del archivo, y le indicamos cuales archivos porque como parametro le pasamos las rutas.
    } catch {
      console.error(pc.red(`No se pudo leer el archivo ${folder}`))
      process.exit(1) // Manejamos el error.
    }

    const isDirectory = stats.isDirectory() // Creas una constante que te indique si es directorio.
    const fileType = isDirectory ? 'd' : 'f' // Creas una constante que sera el tipo de archivo, en donde si es un directorio ponga una 'd' de lo contrario una 'f'.
    const fileSize = stats.size.toString() // Conviertes el tipo de dato numerico que arroja el .size a string.
    const fileModified = stats.mtime.toDateString() // Conviertes las .mtime igual a una fecha.

    return `${pc.white(fileType)} ${pc.blue(file.padEnd(20))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
    // Colocas primero el tipo de texto, luego el archivo con 20 carateres de espacio al final, luego el tamaño del texto con 10 carateres antes y las fechas.
  })

  const filesInfo = await Promise.all(filesPromises) // Creas una constante que esperara que se resuelvan todas las promesas del map.

  filesInfo.forEach(fileInfo => console.log(fileInfo)) // Ya que se resolvieron las promesas del map las iteras en un forEach para que se muestren en consola.
}

ls(folder) // Muestras la carpeta que le indicaste.
