import React from 'react';
import classnames from 'classnames';
import { ActionNotification } from '../';

const BasicIconTitle = ({ text, iconPath, textType, underline, className }) => (
  <div className={classnames('icon_title-wrapper', { underline }, className)}>
    {iconPath &&
      <img src={iconPath} alt={text} className="icon_title-image" />
    }
    <div className={classnames('icon_title-text', textType)}>
      {text}
    </div>
  </div>
);

const EnhancedIconTitle = ({ subtitle, actionProps, ...rest }) => (
  <div className={classnames('w-100')}>
    <BasicIconTitle {...rest} />
    <div className={classnames('d-flex', 'justify-content-between', 'p-relative')}>
      <div className="font-weight-bold font-small">
        {subtitle}
      </div>
      <div>
        {actionProps && <ActionNotification {...actionProps} />}
      </div>
    </div>
  </div>
);

const IconTitle = ( props ) => {
  if (props.subtitle || props.actionProps) {
    return <EnhancedIconTitle {...props} />;
  }
  return <BasicIconTitle {...props} />;
}

IconTitle.defaultProps = {
  iconPath: '',
  textType: '',
  underline: false,
}

export default IconTitle;
