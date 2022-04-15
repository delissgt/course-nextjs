import {useRouter} from "next/router";

import { getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  // console.log('filterdata', filterData)
  if (!filterData) {
    return <p className='center'>Loading...</p>
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  // todo important
  const numYear = +filteredYear; // convert "numberYear" to numberYear string to number
  const numMonth = +filteredMonth;

  // todo importat validation
  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12 ) {
    return <p>Invalid filter. Please adjust your values!.</p>
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })


  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events fount fot the chosen filter!</p>;
  }

  const date = new Date(numYear, numMonth -1);

  return (
      <>
        {/*<h1>Show Filtered Events</h1>*/}
        <ResultsTitle date={date}/>
        <h1>/events/filter-parameter/event</h1>
        <EventList items={filteredEvents} />
      </>
  )
}

export default FilteredEventsPage;