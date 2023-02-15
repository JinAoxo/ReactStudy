import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

// 버튼 컴포넌트 구성
// export const Button = ({ buttonstate, size, label, ...props }) => {
//   // buttonstate : 버튼 상태 제어
//   // size : 버튼 사이즈 제어
//   // label : 버튼 내부 텍스트
//   // ...props : 그 외 다양한 값 넘길 때
//   return (
//     <button type="button" className={`button ${buttonstate} ${size}`} {...props}>
//       {label}
//     </button>
//   );
// };

// 아무것도 설정하지 않았을 경우 default로 보이는 상태 값 설정
// Button.defaultProps = {
//   buttonstate: 'secondary',
//   size: 'medium',
//   onClick: undefined,
// };

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
