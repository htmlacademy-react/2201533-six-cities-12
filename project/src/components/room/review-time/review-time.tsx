import dayjs from 'dayjs';

export default function ReviewTime({dateIso}: {dateIso: string}): JSX.Element {
  const date = dayjs(dateIso);
  return (
    <time className="reviews__time" dateTime={date.format('YYYY-MM-DD')}>{date.format('MMMM YYYY')}</time>
  );
}
