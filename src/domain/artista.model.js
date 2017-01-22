"use strict";
var Artista = (function () {
    function Artista() {
    }
    Artista.prototype.presentarse = function () {
        alert("Hola soy: " + this.nombre);
    };
    return Artista;
}());
exports.Artista = Artista;
//# sourceMappingURL=artista.model.js.map