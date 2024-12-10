'use client';

import { parseISO, format } from 'date-fns';
import { useEffect, useState } from 'react';

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const date = parseISO(dateString);
    if (!isNaN(date.getTime())) {
      setFormattedDate(format(date, "LLLL d, yyyy"));
    } else {
      setFormattedDate("Invalid date");
    }
  }, [dateString]);

  return <time dateTime={dateString}>{formattedDate}</time>;
};

export default DateFormatter;
