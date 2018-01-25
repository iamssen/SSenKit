import * as moment from 'moment';

export default (date: moment.MomentInput, createDefaultValue?: () => moment.Moment) => {
  return date ? moment(date) : createDefaultValue();
}