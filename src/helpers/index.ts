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

export const extractData = ( file, onSuccess, onError ) => {
  const reader = new FileReader()

  reader.readAsText( file, 'UTF-8' )
  reader.onload = ( e ) => {
    if( e.target?.result ) {
      try {
        const data = JSON.parse( e.target?.result as string )

        onSuccess( data )
      } catch( e ) {
        onError( e )
      }
    }
  }

  reader.onerror = ( e ) => {
    onError( e )
  }
}