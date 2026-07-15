if (typeof globalThis !== 'undefined' && !globalThis.DOMException) {
  // Fallback just in case
  globalThis.DOMException = class DOMException extends Error {
    constructor(message, name) {
      super(message);
      this.name = name || 'DOMException';
    }
  };
}

module.exports = typeof globalThis !== 'undefined' ? globalThis.DOMException : undefined;
