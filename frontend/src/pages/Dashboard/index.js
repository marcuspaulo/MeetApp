import React, { useState, useMemo, useEffect } from 'react';

import history from '~/services/history';

import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import {
  MdChevronLeft,
  MdChevronRight,
  MdAddCircleOutline,
} from 'react-icons/md';

import { Container, Time } from './styles';

import api from '~/services/api';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadEvents() {
      const response = await api.get('events', {
        // params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          // isScheduled: response.data.find(a =>
          //   isEqual(parseISO(a.date), compareDate)
          // ),
        };
      });
      setSchedule(data);
    }
    loadEvents();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button" onClick={() => history.push('/meetapp-new')}>
          <MdAddCircleOutline />
          New Meetapp
        </button>
      </header>

      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past}>
            <strong>{time.time}</strong>
            <span>{time.isSubscribe}</span>
            {/* <span>{time.isSubscribe}</span> */}
          </Time>
        ))}
      </ul>
    </Container>
  );
}
