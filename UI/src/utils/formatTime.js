import { format, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

const monthWord = function(month){
  switch(month){
    case 1:
      return 'Enero';
    case 2: 
      return 'Febrero';
    case 3: 
      return 'Marzo';
    case 4: 
      return 'Abril';
    case 5: 
      return 'Mayo';
    case 6: 
      return 'Junio';
    case 7: 
      return 'Julio';
    case 8: 
      return 'Agosto';
    case 9: 
      return 'Septiembre';
    case 10: 
      return 'Octubre';
    case 11: 
      return 'Noviembre';
    case 12: 
      return 'Diciembre';
  }
}

export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fDateTimeDayMonth(date) {
  let newDate = {
    day: date.getDate(),
    month: monthWord(date.getMonth())
  }
  console.log(newDate);
  return newDate;
}

export function fDateTimeToLongText(date) {
  let d = new Date(date);

  let text = d.getDate().toString().padStart(2,'0') + ' de ' + monthWord(d.getMonth()+1) + ' a las ' + d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0');

  return text;

}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true
  });
}
