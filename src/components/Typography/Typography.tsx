import clsx from 'clsx';
import { ReactNode } from 'react';

type TypographyVariant = 'paragraph16_regular' | 'title36_bold';
type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'p';

type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
  children: ReactNode;
  variant: TypographyVariant;
  tag?: TypographyTag;
};

export const Typography = <Tag extends TypographyTag>({
  tag = 'div',
  variant,
  className,
  children,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;

  return (
    <Component className={clsx(variant, className)} {...props}>
      {children}
    </Component>
  );
};