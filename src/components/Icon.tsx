import React, { useRef, useEffect, useState } from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  alt: string | null;
}

export const Icon: React.FC<IconProps> = ({
  name,
  alt = null,
  ...rest
}): JSX.Element | null => {
  const ImportedIconRef = useRef<
    React.FC<React.SVGProps<SVGSVGElement>> | any
  >();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect((): void => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(
            `!!@svgr/webpack?-svgo,+titleProp,+ref!../assets/icons/${name}.svg`
          )
        ).default;
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading) {
    if (error) {
      return <div>{alt}</div>;
    }

    const { current: ImportedIcon = null } = ImportedIconRef;

    if (ImportedIcon) {
      return <ImportedIcon {...rest} />;
    }
  }
  return null;
};
