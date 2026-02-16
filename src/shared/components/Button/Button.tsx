import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'tab';

type BaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
} & Omit<ComponentPropsWithoutRef<'a'>, keyof BaseProps>;

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: () => void;
  active?: boolean;
  type?: 'button' | 'submit' | 'reset';
} & Omit<ComponentPropsWithoutRef<'button'>, keyof BaseProps>;

export type ButtonProps = ButtonAsLink | ButtonAsButton;

function Button({
  variant = 'primary',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const isLink = 'href' in rest && rest.href != null;
  const classNames = [
    styles.button,
    variant === 'primary' ? styles['button-primary'] : styles['button-tab'],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (isLink) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <a href={href} className={classNames} {...linkRest}>
        {variant === 'primary' ? (
          <span className={styles['button-text']}>{children}</span>
        ) : (
          children
        )}
      </a>
    );
  }

  const {
    active,
    onClick,
    type = 'button',
    ...buttonRest
  } = rest as ButtonAsButton;
  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      aria-selected={active}
      {...buttonRest}
    >
      {variant === 'primary' ? (
        <span className={styles.button__text}>{children}</span>
      ) : (
        children
      )}
    </button>
  );
}

export { Button };
