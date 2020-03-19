(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{211:function(n,e,s){"use strict";s.r(e);var t=s(28),o=Object(t.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("p",[n._v("JavaScript 中继承主要通过原型链来实现。基本思想：利用原型让一个引用类型继承另一个引用类型的属性和方法。实现继承便能达到属性与函数的复用的目的。")]),n._v(" "),s("p",[n._v("常见的继承方式：")]),n._v(" "),s("p",[s("strong",[n._v("原型链继承")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('function superType() { }\n    function subType() { }\n\n    superType.prototype.colors = [\'blue\']\n    superType.prototype.getColors = function () {\n        return this.colors\n    }\n\n    subType.prototype = new superType()\n    const instance1 = new subType()\n    instance1.colors.push(\'red\')\n    const instance2 = new subType()\n    console.log(instance1.getColors())  // ["blue", "red"]\n    console.log(instance2.getColors())  // ["blue", "red"]\n')])])]),s("p",[n._v("将父类所有的属性和方法都放在父类的原型上，再去修改子类的原型，从而达到继承的目的。 这种方式的坏处显而易见，如果父类上有引用类型的属性，那么子类的实例属性将都受到影 响。同时子类不能向父类传递参数，以此来改变父类的属性。不过可以采用借用构造函数的 形式解决这个两个问题。")]),n._v(" "),s("p",[s("strong",[n._v("借用构造函数")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("function superType(name) {\n        this.colors = ['blue']\n        this.name = name\n    }\n\n    function subType(name) {\n        superType.call(this, name)\n    }\n\n    const instance1 = new subType('ghc')\n    instance1.colors.push('red')\n    const instance2 = new subType('someone')\n    console.log(instance1.colors)  // [\"blue\", \"red\"]\n    console.log(instance1.name)  // ghc\n    console.log(instance2.colors)  // [\"blue\"]\n    console.log(instance2.name)  // someone\n")])])]),s("p",[n._v("通过借用构造函数的方式，可以解决父类引用类型属性相互影响的问题。同时可以向父类传递 参数灵活的改变属性的值。但是函数的定义却成了问题，如果将函数定义在父类中或者在父类 之外定义函数，这便没有封装复用的意义。所以要实现继承达到复用的目的，只能将函数定义 在父类的原型中，那么子类要如何继承父类的原型？这便有了组合继承。")]),n._v(" "),s("p",[s("strong",[n._v("组合继承")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("function superType(name) {\n        this.colors = ['blue']\n        this.name = name\n    }\n\n    superType.prototype.getColors = function () {\n        return this.colors\n    }\n\n    superType.prototype.getName = function () {\n        return this.name\n    }\n\n    function subType(name) {\n        superType.call(this, name)\n    }\n\n    subType.prototype = new superType()\n\n    const instance1 = new subType('ghc')\n    instance1.colors.push('red')\n    const instance2 = new subType('someone')\n    console.log(instance1.getColors())  // [\"blue\", \"red\"]\n    console.log(instance1.getName())  // ghc\n    console.log(instance2.getColors())  // [\"blue\"]\n    console.log(instance2.getName())  // someone\n")])])]),s("p",[n._v("组合继承不同的地方，就是将子类的原型修改成了父类的实例对象。因此子类就能通过原型来 访问父类上的方法。同时，组合继承带来的问题就是实例化了两次父类，造成了属性重复定义， 即子类的实例上有父类的属性，并且实例的原型上也有父类的属性。解决这个问题，可以采用 ES6 的 Object.create() 方法。")]),n._v(" "),s("p",[s("strong",[n._v("寄生组合继承")])]),n._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("function superType(name) {\n        this.colors = ['blue']\n        this.name = name\n    }\n\n    superType.prototype.getColors = function () {\n        return this.colors\n    }\n\n    superType.prototype.getName = function () {\n        return this.name\n    }\n\n    function subType(name) {\n        superType.call(this, name)\n    }\n\n    subType.prototype = Object.create(superType.prototype)\n\n    const instance1 = new subType('ghc')\n    instance1.colors.push('red')\n    const instance2 = new subType('someone')\n    console.log(instance1.getColors())  // [\"blue\", \"red\"]\n    console.log(instance1.getName())  // ghc\n    console.log(instance2.getColors())  // [\"blue\"]\n    console.log(instance2.getName())  // someone\n")])])]),s("p",[n._v("Object.create 方法：参数是一个对象，它会实例化一个以参数为原型的对象。")]),n._v(" "),s("p",[n._v("寄生组合继承借用这个方法，解决了属性重复定义的问题。并且达到了函数复用的目的，所 以寄生组合继承是平时最为常用的继承方式。")]),n._v(" "),s("p",[n._v("以上。")])])}),[],!1,null,null,null);e.default=o.exports}}]);