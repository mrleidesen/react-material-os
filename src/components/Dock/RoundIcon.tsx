import { RoundIconProps } from "@/types/components";

const RoundIcon = ({ children, variant, ...rest }: RoundIconProps) => {
  return (
    <div className={`round-icon ${variant}`} {...rest}>
      <div className="h-10 w-10 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default RoundIcon;
