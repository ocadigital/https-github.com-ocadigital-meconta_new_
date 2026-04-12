import { useState } from 'react';

export const useMonthClosure = (currentDate: Date) => {
  const [showClosureWizard, setShowClosureWizard] = useState(false);
  const [closureTargetDate, setClosureTargetDate] = useState<{month: number, year: number} | null>(null);

  const handleCloseMonth = () => {
      setClosureTargetDate({ month: currentDate.getMonth() + 1, year: currentDate.getFullYear() });
      setShowClosureWizard(true);
  };

  const closeWizard = () => setShowClosureWizard(false);

  return {
    showClosureWizard,
    closureTargetDate,
    handleCloseMonth,
    closeWizard
  };
};
