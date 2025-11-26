(() => {
  // node_modules/lucide/dist/esm/createElement.js
  var createElement = (tag, attrs, children = []) => {
    const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.keys(attrs).forEach((name) => {
      element.setAttribute(name, String(attrs[name]));
    });
    if (children.length) {
      children.forEach((child) => {
        const childElement = createElement(...child);
        element.appendChild(childElement);
      });
    }
    return element;
  };
  var createElement$1 = ([tag, attrs, children]) => createElement(tag, attrs, children);

  // node_modules/lucide/dist/esm/replaceElement.js
  var getAttrs = (element) => Array.from(element.attributes).reduce((attrs, attr) => {
    attrs[attr.name] = attr.value;
    return attrs;
  }, {});
  var getClassNames = (attrs) => {
    if (typeof attrs === "string")
      return attrs;
    if (!attrs || !attrs.class)
      return "";
    if (attrs.class && typeof attrs.class === "string") {
      return attrs.class.split(" ");
    }
    if (attrs.class && Array.isArray(attrs.class)) {
      return attrs.class;
    }
    return "";
  };
  var combineClassNames = (arrayOfClassnames) => {
    const classNameArray = arrayOfClassnames.flatMap(getClassNames);
    return classNameArray.map((classItem) => classItem.trim()).filter(Boolean).filter((value, index, self) => self.indexOf(value) === index).join(" ");
  };
  var toPascalCase = (string) => string.replace(/(\w)(\w*)(_|-|\s*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
  var replaceElement = (element, { nameAttr, icons, attrs }) => {
    const iconName = element.getAttribute(nameAttr);
    if (iconName == null)
      return;
    const ComponentName = toPascalCase(iconName);
    const iconNode = icons[ComponentName];
    if (!iconNode) {
      return console.warn(
        `${element.outerHTML} icon name was not found in the provided icons object.`
      );
    }
    const elementAttrs = getAttrs(element);
    const [tag, iconAttributes, children] = iconNode;
    const iconAttrs = {
      ...iconAttributes,
      "data-lucide": iconName,
      ...attrs,
      ...elementAttrs
    };
    const classNames = combineClassNames(["lucide", `lucide-${iconName}`, elementAttrs, attrs]);
    if (classNames) {
      Object.assign(iconAttrs, {
        class: classNames
      });
    }
    const svgElement = createElement$1([tag, iconAttrs, children]);
    return element.parentNode?.replaceChild(svgElement, element);
  };

  // node_modules/lucide/dist/esm/defaultAttributes.js
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };

  // node_modules/lucide/dist/esm/icons/chevron-down.js
  var ChevronDown = ["svg", defaultAttributes, [["path", { d: "m6 9 6 6 6-6" }]]];

  // node_modules/lucide/dist/esm/icons/link.js
  var Link = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }],
      ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }]
    ]
  ];

  // node_modules/lucide/dist/esm/icons/x.js
  var X = [
    "svg",
    defaultAttributes,
    [
      ["path", { d: "M18 6 6 18" }],
      ["path", { d: "m6 6 12 12" }]
    ]
  ];

  // node_modules/lucide/dist/esm/lucide.js
  var createIcons = ({ icons = {}, nameAttr = "data-lucide", attrs = {} } = {}) => {
    if (!Object.values(icons).length) {
      throw new Error(
        "Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`"
      );
    }
    if (typeof document === "undefined") {
      throw new Error("`createIcons()` only works in a browser environment.");
    }
    const elementsToReplace = document.querySelectorAll(`[${nameAttr}]`);
    Array.from(elementsToReplace).forEach(
      (element) => replaceElement(element, { nameAttr, icons, attrs })
    );
    if (nameAttr === "data-lucide") {
      const deprecatedElements = document.querySelectorAll("[icon-name]");
      if (deprecatedElements.length > 0) {
        console.warn(
          "[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"
        );
        Array.from(deprecatedElements).forEach(
          (element) => replaceElement(element, { nameAttr: "icon-name", icons, attrs })
        );
      }
    }
  };

  // <stdin>
  createIcons({
    icons: {
      X,
      ChevronDown,
      Link
    },
    attrs: { "aria-hidden": true }
  });
})();
/*! Bundled license information:

lucide/dist/esm/createElement.js:
lucide/dist/esm/replaceElement.js:
lucide/dist/esm/defaultAttributes.js:
lucide/dist/esm/icons/chevron-down.js:
lucide/dist/esm/icons/link.js:
lucide/dist/esm/icons/x.js:
lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.460.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
