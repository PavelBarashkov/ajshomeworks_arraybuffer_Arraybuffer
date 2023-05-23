/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-underscore-dangle */
class ArrayBufferConverter {
  constructor() {
    this._buffer = null;
  }

  load(buffer) {
    this._buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this._buffer);
    let result = '';
    for (let i = 0; i < bufferView.length; i++) {
      result += String.fromCharCode(bufferView[i]);
    }
    return result;
  }
}

export default ArrayBufferConverter;
