module.exports = (componentName) => ({
  content: `import "../tailwind.scss";

import classNames from "classnames";
import React from "react";

import { Component } from "../shared";

export interface ${componentName}Props extends Component {
  foo: string;
}

export const ${componentName}: React.FC<${componentName}Props> = ({ foo, className, ...props }) => (
  <div className={classNames(className)} {...props}>
    {foo}
  </div>
);
`,
  extension: `.tsx`,
});
