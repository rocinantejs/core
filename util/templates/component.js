module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import "../tailwind.scss";
import classnames from "classnames";
import { Component } from "../shared";

import "./${componentName}.scss";

export interface ${componentName}Props extends Component {
  foo: string;
}

const ${componentName}: React.FC<${componentName}Props> = ({
  foo,
  className,
  ...props
}) => (
    <div className={classnames(className)} {...props}>{foo}</div>
);

export default ${componentName};

`,
  extension: `.tsx`,
});
