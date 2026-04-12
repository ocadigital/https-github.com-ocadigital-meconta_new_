import { useState } from 'react';

export const useMonthClosure = (currentDate: Date, isPreviousMonthClosed: boolean) => {
  const [showClosureWizard, setShowClosureWizard] = useState(false);
  const [closureTargetDate, setClosureTargetDate] = useState<{month: number, year: number} | null>(null);

  const getClosureTarget = () => {
      if (!isPreviousMonthClosed) {
          const prevDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
          return { month: prevDate.getMonth() + 1, year: prevDate.getFullYear() };
      }
      return { month: currentDate.getMonth() + 1, year: currentDate.getFullYear() };
  };

  const handleCloseMonth = () => {
      setClosureTargetDate(getClosureTarget());
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
