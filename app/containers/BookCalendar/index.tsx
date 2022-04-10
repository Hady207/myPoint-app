import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {useSelector} from 'react-redux';
import {Container} from '@components/atoms';
import {CalendarModal} from '@components/molecules';
import {Colors} from '@styles/index';
import BookCalendarSelector from './selectors';

const BookCalendar = () => {
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'red'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'yellow'};
  const workout = {key: 'workout', color: 'green'};

  const [open, setOpen] = useState(false);
  const [selectedDateString, setSelectDateString] = useState<string>();
  const {calendarDates, bookings} = useSelector(BookCalendarSelector);

  const bNum = bookings.filter(
    (d: any) => d.bookingDate === selectedDateString,
  );

  return (
    <Container>
      <Calendar
        onDayPress={day => {
          if (day?.dateString in calendarDates) {
            setOpen(!open);
            setSelectDateString(day?.dateString);
          }
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        markingType={'multi-dot'}
        markedDates={calendarDates}
        // Show week numbers to the left. Default = false
        // showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace default month and year title with custom one. the function receive a date as parameter

        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
      />
      <CalendarModal
        visible={open}
        visibleFun={() => setOpen(!open)}
        selectedDate={selectedDateString}
        numberOfBookings={bNum.length}
      />
    </Container>
  );
};

export default BookCalendar;

const styles = StyleSheet.create({});
