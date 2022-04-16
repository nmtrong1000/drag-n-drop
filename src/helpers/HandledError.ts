export class HandledError extends Error {
  public name: string = 'HANDLED'
  constructor( msg: string = '' ) {
    super( msg )
    Object.setPrototypeOf( this, HandledError.prototype )
  }
}