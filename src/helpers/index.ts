import { HandledError } from './HandledError'

export const encodeHTML = ( dirty: string ) => {
  return dirty
}

export const exportToFile = ( fileName: string, data: string ) => {
  if( document ) {
    const dataURI = 'data:application/json;charset=utf-8,' + encodeURIComponent( data )
    const link = document.createElement( 'a' )

    link.setAttribute( 'href', dataURI )
    link.setAttribute( 'download', fileName )
    link.click()
  }
}

export const extractData = ( file, onSuccess ) => {
  const reader = new FileReader()

  reader.readAsText( file, 'UTF-8' )
  reader.onload = ( e ) => {
    if( e.target?.result ) {
      try {
        const data = JSON.parse( e.target?.result as string )

        onSuccess( data )
      } catch( e ) {
        throw new HandledError( 'Invalid JSON format.' )
      }
    }
  }

  reader.onerror = ( e ) => {
    throw new HandledError( 'Something went wrong while importing this file.' )
  }
}

export const generateId = () => {
  return `${Date.now()}-${Math.floor( Math.random() * 10000 )}`
}