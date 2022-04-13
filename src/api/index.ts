/**
 * API for template processing
 * But I currently use localStorage instead, these can be replaced later
 */

export function saveTemplate( data ) {
  localStorage.setItem( 'template', JSON.stringify( data ) )
}

export function getTemplate() {
  return localStorage.getItem( 'template' )
}