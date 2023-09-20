import { writeFileSync } from 'node:fs';
import colors from 'colors'

export const crearArchivoTabla = async ( base = 5, listar = false, hasta = 10 ) => {

  try {
    let salida = ''
    let consola = ''
  
    for (let i = 1; i <= hasta; i++) {
      consola += `${ colors.cyan( base ) } ${colors.green('X')} ${ colors.cyan( i ) }: ${ colors.white( base * i ) }\n`
      salida += `${ base } X ${ i }: ${ base * i }\n`
    }
    
    if (listar) {
      console.log("=====================".cyan)
      console.log(`    Tabla del ${ colors.green( base ) }`.cyan)
      console.log("=====================".cyan)

      console.log(consola)
    }
    
    writeFileSync(`./salida/tablaDel${ base }.txt`, salida)
    
    return  `tablaDel${ base }.txt`
  } catch (error) {
    throw error
  }
}