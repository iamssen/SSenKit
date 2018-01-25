import * as moment from 'moment';

export default (prevDate: moment.MomentInput, nextDate: moment.MomentInput, granularity: moment.unitOfTime.StartOf) => {
  const hasPrevDate: boolean = prevDate !== null && prevDate !== undefined;
  const hasNextDate: boolean = nextDate !== null && nextDate !== undefined;
  return hasPrevDate === hasNextDate && moment(prevDate).isSame(nextDate, granularity);
}