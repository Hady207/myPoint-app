import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Container} from '@components/atoms';

const BookCalendar = () => {
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};

  return (
    <Container>
      <Calendar
        // Initially visible month. Default = now
        // current={'2022-01-04'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => {
          console.log('selected day', day);
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        markingType={'multi-dot'}
        markedDates={{
          '2022-01-25': {
            dots: [vacation, massage, workout],
            selected: true,
            selectedColor: '#FF1493',
          },
          '2022-01-26': {dots: [massage, workout]},
        }}
        // day from another month that is visible in calendar page. Default = false
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
        firstDay={1}
        // Show week numbers to the left. Default = false
        showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        disableAllTouchEventsForDisabledDays={true}
        // Replace default month and year title with custom one. the function receive a date as parameter

        // Enable the option to swipe between months. Default = false
        enableSwipeMonths={true}
      />
    </Container>
  );
};

export default BookCalendar;

const styles = StyleSheet.create({});
