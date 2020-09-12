import React from 'react';

const getDate = (date, { day = true, month = true, year = true } = {}) => {
  const dateString = date.toLocaleDateString("en-US", {
    day: day ? "numeric" : undefined,
    month: month ? "long" : undefined,
    year: year ? "numeric" : undefined,
  })
  console.log(dateString)
  return dateString
}

const EventDate = ({ startDate, endDate }) => {
  const start = new Date(startDate)
  const end = new Date(endDate)
  const isOneDay = start.toDateString() === end.toDateString()
  const isSameMonth = start.getMonth() === end.getMonth()
  return (
    <>
      <time dateTime={start.toISOString()}>
        {getDate(start, { year: isOneDay })}
      </time>
      {!isOneDay && (
        <>
          {' - '}
          {isSameMonth ? (
            <time dateTime={end.toISOString()}>
              {end.getDate()} {getDate(end, { day: false, month: false })}
            </time>

          ) : (
              <time dateTime={end.toISOString()}>
                {getDate(end, { month: start.getMonth() !== end.getMonth() })}
              </time>
            )}
        </>
      )
      }
    </>
  )
}

const Event = ({ name, location, url, startDate, endDate }) => (
  <div>
    <h2>{name} ({location})</h2>
    <p>
      <EventDate startDate={startDate} endDate={endDate} />
    </p>
    <p>
      Website: <a href={url}>{url}</a>
    </p>
  </div>
)

export default Event
