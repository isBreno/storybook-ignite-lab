import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react';

const Checkbox = () => {
  return (
    <CheckboxRadix.Root className="w-6 h-6 p-1 rounded bg-gray-800">
      <CheckboxRadix.Indicator>
        <Check className="w-4 h-4 text-sky-500" weight="bold" />
      </CheckboxRadix.Indicator>
    </CheckboxRadix.Root>
  );
};

export default Checkbox;
