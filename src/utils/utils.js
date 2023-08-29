const getMaxReportPeriod = () => {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();
    if (month < 10) { month = '0' + month }
    return `${year}${month}`;
  }

export const isSelectedPeriodWithinRange = (selectedPeriod) => {
    const maxReportPeriod = getMaxReportPeriod();

    const year1 = parseInt(maxReportPeriod.substring(0, 4));
    const month1 = parseInt(maxReportPeriod.substring(4, 6));
    const year2 = parseInt(selectedPeriod.substring(0, 4));
    const month2 = parseInt(selectedPeriod.substring(4, 6));
  
    if (year1 > year2 || (year1 === year2 && month1 > month2)) {
      return true;
    } else if (year2 > year1 || (year2 === year1 && month2 > month1)) {
      return false;
    }
  }
  